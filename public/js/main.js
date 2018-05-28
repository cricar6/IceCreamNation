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

icon1 = document.getElementsByClassName('characteristic')[0];
icon2 = document.getElementsByClassName('characteristic')[1];
icon3 = document.getElementsByClassName('characteristic')[2];
icon4 = document.getElementsByClassName('characteristic')[3];


var icon1BigCircle = document.getElementById('icon1BigCircle');
var icon1Circle1 = document.getElementById('icon1Circle1');
var icon1Circle2 = document.getElementById('icon1Circle2');
var icon1Container = document.getElementById('icon1Container');
var icon1CoverIce = document.getElementById('icon1CoverIce');
var porfaFunciona = document.getElementById("porfaFunciona");

var icon1Icon = document.querySelector(".svgIcon");

var creamIcon2 = document.getElementById("creamIcon2");
var baseIcon2 = document.getElementById("baseIcon2")

var icon2Icon = document.querySelector("#icecreamIcon2");

var iceStickIcon3 = document.getElementById("iceStickIcon3");
var iceCoverIcon3 = document.getElementById("iceCoverIcon3");

var icon3Icon = document.querySelector("#icecreamIcon3");

var coneIceCream4 = document.getElementById("coneIceCream4");
var coverIceCream4 = document.getElementById("coverIceCream4");

var icon4Icon = document.querySelector("#iceCreamIcon4");

icon3.addEventListener("mouseover", function(){
  iceStickIcon3.style.fill = "#DDB25E";
  iceCoverIcon3.style.fill = "#63AAAA";
  icon3Icon.style.transform = "scale(1.2)";
});

icon3.addEventListener("mouseout", function(){
  iceStickIcon3.style.fill = "white";
  iceCoverIcon3.style.fill = "white";
  icon3Icon.style.transform = "scale(1)";
});

icon4.addEventListener("mouseover", function(){
  
  coneIceCream4.style.fill = "#DDB25E";
  coverIceCream4.style.fill = "#FFAB5D";
  icon4Icon.style.transform = "scale(1.2)";
});

icon4.addEventListener("mouseout", function(){
  coneIceCream4.style.fill = "white";
  coverIceCream4.style.fill = "white";
  icon4Icon.style.transform = "scale(1)";
});


icon2.addEventListener("mouseover", function(){
  creamIcon2.style.fill = "#B7DB66";
  baseIcon2.style.fill = "#D8D8D8";
  icon2Icon.style.transform = "scale(1.2)";
});

icon2.addEventListener("mouseout", function(){
  creamIcon2.style.fill = "white";
  baseIcon2.style.fill = "white";
  icon2Icon.style.transform = "scale(1)";
});

icon1.addEventListener("mouseover", function () {
  porfaFunciona.style.fill = "#B9B7FF";
  icon1Icon.style.transform = "scale(1.2)";
  icon1BigCircle.style.fill = "#B7DB66";
  icon1Circle1.style.fill = "#FFAB5D";
  icon1Circle2.style.fill = "#FFAFB1";
  icon1Container.style.fill = "#D3D3D3";
  icon1CoverIce.style.fill = "#B9B7FF";
});

icon1.addEventListener("mouseout", function () {

  porfaFunciona.style.fill = "white";
  icon1Icon.style.transform = "scale(1)";
  icon1BigCircle.style.fill = "white";
  icon1Circle1.style.fill = "white";
  icon1Circle2.style.fill = "white";
  icon1Container.style.fill = "white";
  icon1CoverIce.style.fill = "white";
});