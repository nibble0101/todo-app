function getWindowScrollFromTop() {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset;
  }
  return (document.documentElement || document.body.parentNode || document.body)
    .scrollTop;
}

function getWindowPlusScrollBarHeight() {
  return window.innerHeight;
}

function toggleBodyElementScroll() {
  const body = document.querySelector("body");
  body.classList.toggle("disable-scroll");
}
export { getWindowScrollFromTop, getWindowPlusScrollBarHeight, toggleBodyElementScroll };
