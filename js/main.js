// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const icons = document.querySelectorAll(".icons");

// Set Initial State Of menu
let showMenu = false;
// Jquizzle for menu tooggle
$(document).ready(function() {
  $(".menu-btn").click(function() {
    $("h1, h2, p,.skills, h3,.mail, .icons, .projects").toggle();
  });
  // $(".preloader").click(() => {
  //   $(".preloader").toggle();
  // });
  let fade_out = function() {
    $(".preloader")
      .fadeOut()
      .empty();
  };

  setTimeout(fade_out, 10000);
});

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// animejs
// original cords
// 215,110 0,110 0,0 49.3,0 215,0"

let preload = anime.timeline({
  duration: 4000
});
preload
  .add({
    targets: ".spinner",
    rotate: "360deg",
    duration: 3000
  })
  .add({
    targets: ".spinner",
    duration: 2000
  })
  .add({
    targets: ".spinner",
    duration: 3000
  })
  .add(
    {
      targets: ".spinner",
      duration: 3000,
      scale: 0.93
    },
    "-=5600"
  )
  .add(
    {
      targets: ".polymorph",
      points: [
        { value: "215, 110 0, 110 0, -2 47.7, -2 120, 10" },
        { value: "215, 110 0, 110 0, 0 47.7, 0 120, 10" },
        { value: "215, 110 0, 110 0, 0 0, 0 67, 76" },
        { value: "215, 110 0, 110 0, 0 0, 60 47, 45" },
        { value: "215, 110 0, 110 0, 0 0, 100 47, 45" },
        { value: "215, 110 0, 110 0, 0 0, 100 55, 110" },
        { value: "215, 110 0, 110 0, 0 0, 200 55, 110" }
      ],
      easing: "easeOutQuad",
      duration: 5600,
      loop: false
    },
    "-=4000"
  )
  .add(
    {
      targets: ".spinner, .circle, .shadow",
      duration: 3000,
      scale: 1.02
    },
    "-=5600"
  )
  .add(
    {
      targets: ".spinner, .circle, .shadow",
      duration: 3000,
      scale: 1.02
    },
    "-=5600"
  )
  .add(
    {
      targets: ".spinner, .circle, .shadow",
      duration: 3000,
      scale: 0
    },
    "-=5000"
  )
  .add({
    targets: "h1",
    opacity: 0,
    scale: [1]
  })
  .add({
    targets: "h1",
    opacity: 1,
    scale: [1.08],
    duration: 1000,
    easing: "easeOutExpo"
  })
  .add({
    targets: "h1",
    scale: [1]
  });
