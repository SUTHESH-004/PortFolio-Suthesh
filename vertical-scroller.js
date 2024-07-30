const addVerticalScroller = async function () {
  document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 700) return;
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
};
if (window.innerWidth > 700) {
  addVerticalScroller();
}
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.clientWidth);

// for  vertical website scrolling
