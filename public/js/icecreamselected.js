var iceCreamPro = document.querySelector('.creamsContainer');


var startInteraction = anime.timeline();

startInteraction
    .add({
        targets: '.iceCreamContainer',
        translateY: "-100vh",
        duration: 50,
        opacity: 0
    })
    .add({
        targets: '.iceCreamContainer',
        opacity: 1,
        translateY: 0,
        ease: 'easeOutQuart',
        duration: 1000
    })
    .add({
        targets: '.titleContainer span',
        opacity: 0,
        duration: 50

    })
    .add({
        targets: '.titleContainer span',
        opacity: 1,
        duration: 1500
    })
    .add({
        targets: '.titleContainer h1',
        opacity: 0,
        translateX: "-130vw",
        duration: 50
    })
    .add({
        targets: '.titleContainer h1',
        opacity: 1,
        translateX: 0,
        duration: 500
    })
    .add({

        targets: '.item',
        opacity: 0,
        translateY: -300,

        duration: 500

    })
    .add({

        targets: '.topItem',
        opacity: 1,
        translateY: 0,
        duration: 250,
        offset: 4900
    })
    .add({
        targets: '.middleItem',
        opacity: 1,
        translateY: 0,
        duration: 250,
        offset: 3600
    })
    .add({
        targets: '.bottomItem',
        opacity: 1,
        translateY: 0,
        duration: 250,
        offset: 3450,
        complete: function (anim) {
            listenerIce();
        }
    });

var activable = true;

function listenerIce() {
    if(activable ==true) {

    
    iceCreamPro.addEventListener('click', function () {
        var startInteraction = anime.timeline();

        startInteraction
            .add({
                targets: '.titleContainer h1',
                opacity: 1,
                translateX: "140vw",
                translateZ: -1,
                duration: 1000,

            })
            .add({
                targets: '.titleContainer span',
                opacity: 0,
                duration: 1000,
                complete: function (anim) {
                    contentToDescription();
                }
            });
    });
}
};

function contentToDescription() {
    document.querySelector(".iceCreamDescription")
        .innerHTML = description;
    var doIceCreamBigger = anime.timeline();
    doIceCreamBigger
        .add({
            targets: '.item',
            opacity: 1,
            height: "50vh",
            duration: 250,

        })
        .add({
            targets: '.dContainer',
            height: '50vh',
            duration: 500
        })
        .add({
            targets: '.dContainer p',
            opacity: 1,
            duration: 500,
            complete: function (anim) {
                iceCreamPro.addEventListener('click', function () {
                    descriptionToContent();
                })
               
            }
        });

};

var first = document.querySelector('.firstDescription');
var second = document.querySelector('.secondDescription');
var third = document.querySelector('.thirdDescription');

var description = `
<div class="descriptionContainer">
<div class="dContainer">
    <p>` + first.innerHTML + `</p>
</div>
<div class="dContainer">
    <p>` + second.innerHTML + `</p>
</div>
<div class="dContainer">
    <p>` + third.innerHTML + `</p>
</div>


</div>
`;

var titleTempo = document.querySelector('titleVacio');

var title = `
<div class="titleContainer">
<span>Eres</span>
<h1 class="title">` + titleTempo + `</h1>
</div>

`