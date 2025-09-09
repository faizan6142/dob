// Mobile nav menu toggle
const navMenuBtn = document.getElementById('navMenuBtn');
const navLinks = document.getElementById('navLinks');
navMenuBtn.addEventListener('click', function () {
  const expanded = navLinks.classList.toggle('open');
  navMenuBtn.setAttribute('aria-expanded', expanded);
});

// Keyboard accessibility for mobile menu
navMenuBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navMenuBtn.click();
  }
});

// Font size controls
const decreaseFontBtn = document.getElementById('decreaseFont');
const resetFontBtn = document.getElementById('resetFont');
const increaseFontBtn = document.getElementById('increaseFont');

decreaseFontBtn.addEventListener('click', () => {
  document.body.setAttribute('data-fontsize', 'small');
});
increaseFontBtn.addEventListener('click', () => {
  document.body.setAttribute('data-fontsize', 'large');
});
resetFontBtn.addEventListener('click', () => {
  document.body.setAttribute('data-fontsize', 'normal');
});

[decreaseFontBtn, resetFontBtn, increaseFontBtn].forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); btn.click();
    }
  });
});
