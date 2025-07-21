// Animate sections when they appear
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Glow effect for shadow button
document.querySelectorAll('.shadow-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = "0 0 25px #8e44ad, 0 0 40px #b388eb";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = "0 0 15px #8e44ad";
  });
});
