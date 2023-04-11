// Select all Dom Element
const navBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const scrollLink = document.querySelectorAll(".scroll-link");
const topLink = document.querySelector(".top-link");
const nav = document.querySelector("#nav");

// Navbar
navBtn.addEventListener("click", navbar);

// Fixed  navbar
window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 400) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Scroll
scrollLink.forEach(function (scroll) {
  scroll.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixed = nav.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixed) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      top: position,
      left: 0,
    });

    linksContainer.style.height = 0;
  });
});
// Functions
function navbar() {
  // linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
}

function scrolling() {}
