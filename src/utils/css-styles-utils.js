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

function getHeaderOffsetHeight() {
  const header = document.querySelector(".header");
  return header ?  header.offsetHeight : null;
}
export {
  getWindowScrollFromTop,
  getWindowPlusScrollBarHeight,
  toggleBodyElementScroll,
  getHeaderOffsetHeight,
};
