// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Cookie consent banner
if (!localStorage.getItem('bc-cookie-ok')) {
  const b = document.createElement('div');
  b.className =
    'fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[30rem] bg-black/80 text-[var(--ink)] backdrop-blur border border-[var(--line)] rounded-2xl p-4 shadow-soft';
  b.innerHTML = `
    <div class="text-sm">
      We use cookies for basic analytics and to improve your experience. 
      <a href="#privacy-policy" class="underline">Learn more</a>.
    </div>
    <div class="mt-3 flex gap-2">
      <button id="bc-accept" class="flex-1 rounded-xl bg-[var(--brand)] px-4 py-2 font-semibold hover:opacity-90">OK</button>
      <button id="bc-dismiss" class="flex-1 rounded-xl border border-[var(--line)] px-4 py-2 hover:bg-white/5 hover:border-[var(--brand-2)]">Dismiss</button>
    </div>
  `;
  document.body.appendChild(b);
  document.getElementById('bc-accept').onclick = () => {
    localStorage.setItem('bc-cookie-ok', '1');
    b.remove();
  };
  document.getElementById('bc-dismiss').onclick = () => b.remove();
}
