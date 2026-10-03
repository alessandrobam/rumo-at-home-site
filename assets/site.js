// Gentle reveal-on-scroll. The page is fully readable without it.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  var els = document.querySelectorAll('.step, .pillar, .tutorial li, .card, .principles > div, .notfor, .cheat');
  els.forEach(function (el) { el.classList.add('reveal'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Click a screenshot to see it larger.
(function () {
  if (!window.HTMLDialogElement) return;
  var dlg = document.createElement('dialog'); dlg.className = 'lb';
  var big = document.createElement('img'); dlg.appendChild(big); document.body.appendChild(dlg);
  dlg.addEventListener('click', function () { dlg.close(); });
  document.querySelectorAll('.shot img, .pair img').forEach(function (img) {
    img.addEventListener('click', function () { big.src = img.currentSrc || img.src; big.alt = img.alt; dlg.showModal(); });
  });
})();
