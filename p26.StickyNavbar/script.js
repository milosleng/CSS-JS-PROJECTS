const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  console.log(window.scrollY, nav.offsetHeight);
  if (window.scrollY > 600) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
