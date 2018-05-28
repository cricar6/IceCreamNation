hamburger = document.querySelector(".hamburguer");
openH = document.getElementById("openH");
closeH = document.getElementById("closeH");
navigator = document.getElementById("navegador");




var open = false;
var activable = true;



function myFunction(x) {
  if (x.matches) { // If media query matches
    openH.style.opacity = "0";
    closeH.style.opacity = "0";
    navigator.opacity = "1";

    $(document).ready(function () {
      $(window).on("scroll", function () {
        var wn = $(document).scrollTop();
        console.log(wn);
        if (wn > 300) {
          $(".nav").css("top", "0");
          $(".nav").css("bottom", "auto");

          $(".nav").css("background", "#fff");
          $(".nav").css("box-shadow", "0px 0px 10px RGBA(0, 0, 0, 0.1)");
          $(".nav").css("transition", "ease 1s");
        } else {

          $(".nav").css("top", "auto");
          $(".nav").css("bottom", "0");

          $(".nav").css("background", "");
          $(".nav").css("box-shadow", "0px 0px 0px RGBA(0, 0, 0, 0.1)");
          $(".nav").css("transition", "ease 1s");
        }
      });
    });
  } else {
    openH.style.opacity = "1";
    closeH.style.opacity = "0";
    navigator.opacity = "0";


    $(document).ready(function () {
      $(window).on("scroll", function () {
        var wn = $(document).scrollTop();
        console.log(wn);
        if (!(wn > 300)) {


          $(".nav").css("top", "0");
          $(".nav").css("bottom", "auto");

        }
      });
    });
  }
}

var x = window.matchMedia("(min-width: 670px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

hamburger.addEventListener("click", function () {
  if (activable == true) {
    if (open == false) {
      //openH.style.display= "none";
      //closeH.style.display = "block";
      activable = false;
      var meterTimeline = anime.timeline();

      meterTimeline
        .add({
          targets: hamburger,
          translateY: 50,
          easing: 'easeInQuad',
          duration: 130
        })
        .add({
          targets: hamburger,
          translateY: -130,
          easing: 'easeOutQuad',
          duration: 500
        })
        .add({
          targets: openH,
          opacity: 0,
          duration: 1
        })
        .add({
          targets: closeH,
          opacity: 1,
          duration: 1
        })
        .add({
          targets: '.nav',
          translateY: "-40vh",
          easing: 'easeOutBack',
          duration: 50
        })
        .add({
          targets: '.nav',
          opacity: 1,
          translateY: "0",
          easing: 'easeInBack',
          duration: 500
        })
        .add({
          targets: hamburger,
          translateY: 0,
          easing: 'easeInOutQuad',

          duration: 500
        })
      meterTimeline.finished.then(activable = true);
      open = true;

    } else {
      var meterTimeline = anime.timeline();
      activable = false;

      meterTimeline
        .add({
          targets: hamburger,
          translateY: 50,
          easing: 'easeInQuad',
          duration: 130
        })
        .add({
          targets: hamburger,
          translateY: -130,
          easing: 'easeOutQuad',
          duration: 500
        })
        .add({
          targets: openH,
          opacity: 1,
          duration: 1
        })
        .add({
          targets: closeH,
          opacity: 0,
          duration: 1
        })
        .add({
          targets: '.nav',
          translateY: "10",
          easing: 'easeInOutBack',
          duration: 100
        })
        .add({
          targets: '.nav',
          opacity: 0,
          translateY: "-100vh",
          easing: 'easeInOutBack',
          duration: 500
        })

        .add({
          targets: hamburger,
          translateY: 0,
          easing: 'easeInOutQuad',
          duration: 500
        })
      meterTimeline.finished.then(activable = true);

      open = false;
    }
  }

});



var flkty = new Flickity('.main-carousel', {
  cellAlign: 'left',
  contain: true
});
