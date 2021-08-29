let scrollLine = document.getElementById("page_progress");

window.onscroll = function scrollFunc() {
    let pageHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scroll = window.pageYOffset;

    let progressPercent = scroll/((pageHeight-innerHeight)/100);
    if (progressPercent == NaN) {
        scrollLine.value = 0;
    } else {
        scrollLine.value = progressPercent;
    }
    return progressPercent
}

/*window.addEventListener("resize", function() {
  let funcNum = scrollFunc();

  if (funcNum == NaN) {
    scrollLine.value = 0;
  }
});*/