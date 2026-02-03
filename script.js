const reveals = document.querySelectorAll(".reveal");
const heroImage = document.querySelector(".hero-image");

function onScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });

  if (window.scrollY > 20) {
    heroImage.classList.add("active");
  }
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
