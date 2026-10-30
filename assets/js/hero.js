// Hero: the portrait as a field of dots, and the name's letters, answer one pointer.
// - Near the pointer, letters gain weight and dots swell and scatter.
// - At rest, one slow wave sweeps left to right through the name and the portrait.
// - A click or tap sends a ripple out from that point through both.
// Without JavaScript the portrait stays a plain photo. With reduced motion the dots are drawn
// once and nothing moves. The loop only runs while the hero is on screen.
(function () {
  var hero = document.querySelector(".hero");
  var box = hero && hero.querySelector(".hero__portrait");
  var photo = box && box.querySelector("img");
  if (!hero || !photo || !window.requestAnimationFrame) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  var BASE = 380; // resting weight, matches the CSS
  var SWING = 400; // extra weight at full strength
  var FALL = 200; // falloff radius in px, shared by letters and dots
  var IDLE_AFTER = 1800; // ms without input before the wave takes over
  var WAVE_MS = 5000; // one sweep of the idle wave
  var RIPPLE_SPEED = 950; // px per second
  var RIPPLE_LIFE = 1800; // ms

  // Split each line of the name into letter spans whose weight we can set one by one.
  var letters = [];
  hero.querySelectorAll(".hero__name [data-line]").forEach(function (line) {
    var text = line.textContent;
    line.textContent = "";
    Array.from(text).forEach(function (ch) {
      var span = document.createElement("span");
      span.className = "hero__letter";
      span.textContent = ch;
      line.appendChild(span);
      letters.push({ el: span, w: BASE });
    });
  });


  var canvas = document.createElement("canvas");
  canvas.className = "hero__canvas";
  canvas.setAttribute("aria-hidden", "true");
  hero.insertBefore(canvas, hero.firstChild);
  var ctx = canvas.getContext("2d");

  var source = new Image();
  source.src = photo.currentSrc || photo.src;

  var dots = [];
  var width = 0;
  var dpr = 1;
  var colour = "#ff4a1f";
  var px = -1e4;
  var py = -1e4;
  var lastInput = -1e9;
  var ripples = [];
  var visible = true;
  var running = false;

  function bump(d) {
    return Math.exp(-(d * d) / (2 * FALL * FALL));
  }

  function readColour() {
    colour = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || colour;
  }

  // On a dark ground the dots are light, so bright areas get big dots; on a light ground the dots
  // act as ink, so dark areas do. Either way the face reads as a positive.
  function lightGround() {
    var hex = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim().replace("#", "");
    if (hex.length !== 6) return false;
    var r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
  }

  // Sample the photo onto a grid and turn each cell's brightness into a dot size.
  function build() {
    if (!source.complete || !source.naturalWidth) return;
    var heroRect = hero.getBoundingClientRect();
    var rect = box.getBoundingClientRect();
    if (!heroRect.width || !rect.width) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = heroRect.width;
    canvas.width = Math.round(heroRect.width * dpr);
    canvas.height = Math.round(heroRect.height * dpr);

    var size = rect.width;
    var ox = rect.left - heroRect.left;
    var oy = rect.top - heroRect.top;
    var step = Math.max(6, Math.round(size / 70));
    var n = Math.floor(size / step);
    var pad = (size - n * step) / 2;

    var sample = document.createElement("canvas");
    sample.width = sample.height = n;
    var s = sample.getContext("2d");
    // Centre-crop the photo to a square before sampling.
    var side = Math.min(source.naturalWidth, source.naturalHeight);
    s.drawImage(source, (source.naturalWidth - side) / 2, (source.naturalHeight - side) / 2, side, side, 0, 0, n, n);
    var data = s.getImageData(0, 0, n, n).data;

    var invert = lightGround();
    dots = [];
    for (var y = 0; y < n; y++) {
      for (var x = 0; x < n; x++) {
        var k = (y * n + x) * 4;
        var lum = (0.299 * data[k] + 0.587 * data[k + 1] + 0.114 * data[k + 2]) / 255;
        var r = Math.pow(invert ? 1 - lum : lum, 1.2) * step * 0.55;
        if (r < 0.6) continue;
        var hx = ox + pad + x * step + step / 2;
        var hy = oy + pad + y * step + step / 2;
        dots.push({ hx: hx, hy: hy, x: hx, y: hy, vx: 0, vy: 0, r: r, s: 1 });
      }
    }
    readColour();
    hero.classList.add("hero--dots");
    draw();
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    ctx.fillStyle = colour;
    ctx.beginPath();
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      ctx.moveTo(d.x + d.r * d.s, d.y);
      ctx.arc(d.x, d.y, d.r * d.s, 0, 6.2832);
    }
    ctx.fill();
  }

  // Strength of all live ripples at a point, plus the outward direction to push along.
  function rippleAt(now, x, y) {
    var g = 0;
    var ux = 0;
    var uy = 0;
    for (var i = 0; i < ripples.length; i++) {
      var c = ripples[i];
      var age = (now - c.t0) / 1000;
      var dx = x - c.x;
      var dy = y - c.y;
      var dist = Math.hypot(dx, dy) || 1;
      var delta = dist - age * RIPPLE_SPEED;
      var k = Math.exp(-(delta * delta) / (2 * 40 * 40)) * Math.max(0, 1 - (now - c.t0) / RIPPLE_LIFE);
      g += k;
      ux += (dx / dist) * k;
      uy += (dy / dist) * k;
    }
    return { g: g, ux: ux, uy: uy };
  }

  function frame(now) {
    running = false;
    if (!visible || document.hidden || reduce.matches) return;

    ripples = ripples.filter(function (c) { return now - c.t0 < RIPPLE_LIFE; });
    var idle = now - lastInput > IDLE_AFTER;
    var waveX = ((now % WAVE_MS) / WAVE_MS) * (width + 600) - 300;
    var heroRect = hero.getBoundingClientRect();

    for (var i = 0; i < letters.length; i++) {
      var l = letters[i];
      var r = l.el.getBoundingClientRect();
      var cx = r.left + r.width / 2 - heroRect.left;
      var cy = r.top + r.height / 2 - heroRect.top;
      var base = idle ? bump(cx - waveX) * 0.6 : bump(Math.hypot(px - cx, py - cy));
      var amt = Math.min(1, base + rippleAt(now, cx, cy).g);
      l.w += (BASE + SWING * amt - l.w) * 0.12;
      l.el.style.fontVariationSettings = '"wght" ' + l.w.toFixed(1);
    }

    for (var j = 0; j < dots.length; j++) {
      var d = dots[j];
      var a;
      if (idle) {
        a = bump(d.hx - waveX) * 0.6;
      } else {
        var dx = d.x - px;
        var dy = d.y - py;
        var dist = Math.hypot(dx, dy) || 1;
        a = bump(dist);
        if (dist < 110) {
          var f = (1 - dist / 110) * 2.2;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
      }
      var rp = rippleAt(now, d.hx, d.hy);
      d.vx += rp.ux * 1.1;
      d.vy += rp.uy * 1.1;
      a = Math.min(1.6, a + rp.g);
      d.s += (1 + a * 0.7 - d.s) * 0.12;
      d.vx += (d.hx - d.x) * 0.045;
      d.vy += (d.hy - d.y) * 0.045;
      d.vx *= 0.82;
      d.vy *= 0.82;
      d.x += d.vx;
      d.y += d.vy;
    }
    draw();
    start();
  }

  function start() {
    if (running || !visible || document.hidden || reduce.matches) return;
    running = true;
    requestAnimationFrame(frame);
  }

  // Reduced motion: settle every letter and dot at rest and draw once.
  function settle() {
    letters.forEach(function (l) {
      l.w = BASE;
      l.el.style.fontVariationSettings = "";
    });
    dots.forEach(function (d) {
      d.x = d.hx; d.y = d.hy; d.vx = d.vy = 0; d.s = 1;
    });
    draw();
  }

  function pointer(e) {
    var r = hero.getBoundingClientRect();
    px = e.clientX - r.left;
    py = e.clientY - r.top;
    lastInput = performance.now();
  }

  hero.addEventListener("pointermove", pointer);
  hero.addEventListener("pointerleave", function () { px = py = -1e4; });
  hero.addEventListener("pointerdown", function (e) {
    if (e.target.closest("a, button")) return;
    pointer(e);
    ripples.push({ x: px, y: py, t0: performance.now() });
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      start();
    }).observe(hero);
  }
  document.addEventListener("visibilitychange", start);
  reduce.addEventListener("change", function () {
    if (reduce.matches) settle();
    else start();
  });

  // Rebuild when the hero changes size (resize, font load, orientation) and recolour on theme change.
  var queued = false;
  function rebuild() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      build();
    });
  }
  if ("ResizeObserver" in window) new ResizeObserver(rebuild).observe(hero);
  else window.addEventListener("resize", rebuild);
  new MutationObserver(rebuild).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", rebuild);

  source.onload = function () {
    build();
    start();
  };
  if (source.complete) source.onload();
})();
