// =========================================================
// TAB SWITCHING
// This reads data-tab on each button and toggles the matching
// <section id="..."> panel. Adding a new tab in index.html
// (button + section with matching id) works automatically —
// no changes needed here.
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        panel.classList.toggle('active', panel.id === target);
      });
    });
  });

  // Optional: allow deep-linking via URL hash, e.g. index.html#projects
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchingBtn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
    if (matchingBtn) matchingBtn.click();
  }

  // Footer year, auto-updates so you never have to touch it
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
