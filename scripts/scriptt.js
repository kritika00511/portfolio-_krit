// Hamburger toggle
const ham = document.getElementById('hamburger');
const nav = document.getElementById('nav-items');
ham.addEventListener('click', () => nav.classList.toggle('active'));

// Experience tabs
const exps = [
  ['exp-1','exp-1-content'],
  ['exp-2','exp-2-content'],
  ['exp-3','exp-3-content']
];
function showExp(id) {
  exps.forEach(([btn, content]) => {
    document.getElementById(btn).classList.toggle('active', content === id);
    document.getElementById(content).classList.toggle('hidden', content !== id);
  });
}

// Initialize first tab visible
showExp('exp-1-content');
