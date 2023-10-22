
let buttonTop = document.getElementById("buttonTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >500 || document.documentElement.scrollTop > 500) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}


function topFunction() {
    smoothScrollToTop();
}

function smoothScrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 20);
    }
}

// dfgr