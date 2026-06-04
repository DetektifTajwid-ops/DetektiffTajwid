/* =========================================
   HAMBURGER MENU
========================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

/* Ketika tombol hamburger diklik */
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

/* =========================================
   ANIMASI SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach(function (element) {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    /* Jika elemen muncul di layar */
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

/* Jalankan sekali saat halaman dibuka */
revealOnScroll();

/* =========================================
   FALLBACK GAMBAR
========================================= */

const images = document.querySelectorAll(".image-fallback");

images.forEach(function (img) {

  img.addEventListener("error", function () {

    /* Sembunyikan gambar */
    img.style.display = "none";

    /* Cari placeholder terdekat */
    const placeholder = img.parentElement.querySelector(".image-placeholder");

    if (placeholder) {
      placeholder.style.display = "flex";
    }

  });

});