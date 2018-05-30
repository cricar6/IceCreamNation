
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