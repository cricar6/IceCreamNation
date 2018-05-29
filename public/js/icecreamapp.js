
var chargingCosito = document.querySelector(".charging");
var contentApp = document.querySelector(".contentApp");
function postChargueCompleted() {
  contentApp.innerHTML= "";
}
function chargueCompleted () {
  //alert("gi");
  var completeTimeline = anime.timeline();
  completeTimeline
        .add({
          targets: chargingCosito,
          zoom: -1,
          opacity: 0,
          easing: 'easeOutQuad',
          duration: 500,
          complete: function(anim) {
            postChargueCompleted();
          }
        });
        
}
setTimeout(chargueCompleted, 3000);
