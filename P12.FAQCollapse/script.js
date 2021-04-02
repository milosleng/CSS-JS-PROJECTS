const toggleButtons = document.querySelectorAll('.faq-toggle');

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.parentNode.classList.toggle('active');
  });
});
