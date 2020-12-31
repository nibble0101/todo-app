function scrollTop() {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset;
  }
  return (document.documentElement || document.body.parentNode || document.body)
    .scrollTop;
}

function windowPlusScrollBarHeight() {
    return window.innerHeight;
}

function windowMinusScrollBarHeight() {
   return document.documentElement.clientHeight;
}
export { scrollTop, windowPlusScrollBarHeight, windowMinusScrollBarHeight };

