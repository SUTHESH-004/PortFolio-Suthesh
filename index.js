document.addEventListener("DOMContentLoaded", () => {
  const fullbody = document.querySelector(".fullbody");
  let scrollAmount = 0;

  window.addEventListener("wheel", (event) => {
    // event.preventDefault();
    scrollAmount += event.deltaY;
    console.log(scrollAmount, event.deltaY);
    // Limit scrolling to the number of sections
    const maxScroll = fullbody.scrollWidth - window.innerWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;

    fullbody.style.transform = `translateX(${-scrollAmount}px)`;
  });
});
// need to know what happening

console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);
//for changing the dino svg to my picture

const myimage1 = document.querySelector(".myimage");
const myimage2 = document.querySelector(".myimage-2");
myimage1.addEventListener("mouseover", function () {
  myimage1.classList.add("hidden");
  myimage2.classList.remove("hidden");
});
myimage2.addEventListener("mouseout", function () {
  myimage1.classList.remove("hidden");
  myimage2.classList.add("hidden");
});

//temporary hide for debugging
const nav = document.querySelector("nav");
nav.classList.add("hidden");
const navalt = document.querySelector(".menu");
const hidebutton = document.querySelector(".hide-button");

navalt.addEventListener("click", function () {
  nav.classList.remove("hidden");
  navalt.classList.add("hidden");
});
// used event delegation for nav bar
nav.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.classList.contains("hide-button")) {
    nav.classList.add("hidden");
    navalt.classList.remove("hidden");
  }
});

// for moving the next slide
// const gonextbutton = document.querySelector(".gonextbutton");
// const firstPage = document.querySelector(".firstPage");
// const secondPage = document.querySelector(".secondPage");
// const fullbody = document.querySelector(".fullbody");
// gonextbutton.addEventListener("click", function (e) {
//   alert("I am clicked");
//   console.log(e);
//   // firstPage.style.display = "none";
//   // secondPage.style.display = "flex";
// });

fetch("https://179cb37526024aaf9859c5bd8b916e17.api.mockbin.io/")
  .then((Response) => Response.json())
  .then((data) => console.log(data));

const contactme = document.querySelector(".bottom1");
contactme.addEventListener("click", () => alert("i am clicked"));

const cvresume = document.querySelector(".bottom2");
cvresume.addEventListener("click", () => alert("i am clicked"));
