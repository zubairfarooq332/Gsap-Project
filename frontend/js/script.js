const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");
const menuToggleIcon = document.getElementById("menuToggleIcon");
const closeBtn = document.getElementById("closeBtn");

let menuOpen = false;

menuIcon.addEventListener("click", () => {
  menu.classList.add("open");
  menuOpen = true;
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
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

const svg = document.getElementById("animatedLineSvg");
const path = svg.querySelector("path");
const pathLength = path.getTotalLength();

// Hide full stroke initially
gsap.set(path, {
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength,
});

gsap.to(path, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".svgContainer",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});

// Gsap
let tl = gsap.timeline();

tl.from(".language", {
  opacity: 0,
  delay: 0.5,
  duration: 1,
  ease: "power2.out",
});
tl.from(".logo", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});
tl.from(".menuBar", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});
tl.from(".pageNo", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});
tl.from(".scroll", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});

gsap.from("#text-overlay text", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.2,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".corporate-identity",
    start: "top 70%",
    scroller: "body",
    toggleActions: "play reverse play reverse",
    markers: true,
  },
});
tl2.from(".circle", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
});

tl2.from(".circle .whiteCircle", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  ease: "power3.inout",
});

tl2.from(".corporate-identity h4", {
  opacity: 0,
  duration: 0.5,
  x: 300,
  ease: "power3.inout",
});

tl2.from(".corporate-identity h2", {
  opacity: 0,
  duration: 0.5,
  x: 300,
  ease: "power3.inout",
});

tl2.from(".corporate-identity p", {
  opacity: 0,
  duration: 0.5,
  x: 300,
  ease: "power3.inout",
});
tl2.from(".corporate-identity .btns", {
  opacity: 0,
  duration: 0.5,
  ease: "power3.inout",
  x: -300,
});

// tl3------------------------------------

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ExpertiseContent",
    start: "top 90%",
    scroller: "body",
    toggleActions: "play reverse play reverse",
  },
});
tl3.from(".expertise-video", {
  opacity: 0,
  x: -300,
  duration: 0.5,
});

tl3.from(".expertise-content", {
  opacity: 0,
  x: 300,
  duration: 0.5,
});
