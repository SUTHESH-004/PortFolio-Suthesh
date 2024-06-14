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








