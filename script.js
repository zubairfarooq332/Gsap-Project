const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");
const menuToggleIcon = document.getElementById("menuToggleIcon");
const closeBtn = document.getElementById("closeBtn");

let menuOpen = false;

menuIcon.addEventListener("click", () => {
  menu.classList.add("open");
  menuToggleIcon.src = "images/close.png"; // cross icon
  menuOpen = true;
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
  menuToggleIcon.src = "images/menu.png"; // back to menu icon
  menuOpen = false;
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Gsap
gsap.from(".language", {
  opacity: 0,
  delay: 1,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".logo", {
  opacity: 0,
  delay: 2,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".menuBar", {
  opacity: 0,
  delay: 2.5,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from("#text-overlay text", {
  y: 100, // Move from bottom
  opacity: 0, // Start hidden
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2, // Optional
});
