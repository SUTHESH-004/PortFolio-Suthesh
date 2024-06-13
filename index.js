console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);
const myimage1 = document.querySelector(".myimage");
const myimage2 = document.querySelector(".myimage-2");
myimage1.addEventListener("click", function () {
  myimage1.classList.add("hidden");
  myimage2.classList.remove("hidden");
});
myimage2.addEventListener("click", function () {
  myimage1.classList.remove("hidden");
  myimage2.classList.add("hidden");
});
// const myimageswapper = function()
