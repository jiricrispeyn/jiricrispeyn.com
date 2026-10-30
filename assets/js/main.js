// Reveal sections once as they enter the viewport. Content stays visible
// without JavaScript: the hidden state only applies under html.js.
(function () {
  var targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  function show(el) {
    el.classList.add("is-in");
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach(show);
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  targets.forEach(function (el) {
    io.observe(el);
  });

  // Safety net: anything on screen a moment after load is shown.
  window.addEventListener("load", function () {
    setTimeout(function () {
      targets.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) show(el);
      });
    }, 2500);
  });
})();
