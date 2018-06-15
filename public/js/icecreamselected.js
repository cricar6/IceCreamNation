var iceCreamPro = document.querySelector('.creamsContainer');
var startInteraction = anime.timeline();

//var activateAnimationBigger = true;
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
    
        iceCreamPro.addEventListener('click', function () {
            if (activable == true) {
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
            }
        });
    
};

function contentToDescription() {
    activable = false;
    document.querySelector(".iceCreamDescription").innerHTML = description;

    y = window;
    if (y.innerWidth >= 671) {
        var size = 50;
    } else {
        var size = 100;
    }

    var doIceCreamBigger = anime.timeline();
    doIceCreamBigger
        .add({
            targets: '.item',
            opacity: 1,
            height: size + "vh",
            duration: 250,

        })
        .add({
            targets: '.dContainer',
            height: size + "vh",
            duration: 500
        })
        .add({
            targets: '.dContainer p',
            opacity: 1,
            duration: 500,
            complete: function (anim) {
                descriptionToContent();
            }
        });

};

function mostrarD(descriptionID) {
    //alert("hi");
    var mostrarDA = anime.timeline();
    mostrarDA
        .add({
            targets: descriptionID,
            translateX: "-100vw"
        });
}

function ocultarD(descriptionID) {
    var ocultarDA = anime.timeline();
    ocultarDA
        .add({
            targets: descriptionID,
            translateX: 0
        });
}

var mostrable = true;

function descriptionToContent() {

    responsiveDescriptions();

    $(window).resize(function () {
        responsiveDescriptions();
    });

    function responsiveDescriptions() {
        if (window.innerWidth >= 671) {
            //document.querySelector(".top").removeEventListener("mouseover", mostrarD('.primeraD'));
            //document.querySelector(".middle").removeEventListener("mouseover", mostrarD('.segundaD'));
            //document.querySelector(".bottom").removeEventListener("mouseover", mostrarD('.terceraD'));
        }
        if (window.innerWidth <= 671) {
            document.querySelector(".top").addEventListener("mouseover", function () {
                mostrarD('.primeraD');
            });
            document.querySelector(".primeraD").addEventListener("mouseout", function () {
                ocultarD('.primeraD');
            });

            //document.querySelector(".middle").addEventListener("mouseover", mostrarD('.segundaD'));
            document.querySelector(".middle").addEventListener("mouseover", function () {
                mostrarD('.segundaD');
            });
            document.querySelector(".segundaD").addEventListener("mouseout", function () {
                ocultarD('.segundaD');
            });

            //document.querySelector(".bottom").addEventListener("mouseover", mostrarD('.terceraD'));
            document.querySelector(".bottom").addEventListener("mouseover", function () {
                mostrarD('.terceraD');
            });
            document.querySelector(".terceraD").addEventListener("mouseout", function () {
                ocultarD('.terceraD');
            });
        }
    }

}


var first = document.querySelector('.firstDescription');
var second = document.querySelector('.secondDescription');
var third = document.querySelector('.thirdDescription');

var description = `
<div class="descriptionContainer">
<div class="dContainer primeraD">
    <p>` + first.innerHTML + `</p>
</div>
<div class="dContainer segundaD">
    <p>` + second.innerHTML + `</p>
</div>
<div class="dContainer terceraD">
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

responsiveButton();

$(window).resize(function () {
    responsiveButton();
});

function responsiveButton() {
    if (window.innerWidth >= 671) {
        document.querySelector("button").style.marginBottom = "50px";
    }
    if (window.innerWidth <= 671) {
        document.querySelector("button").style.marginBottom = "0px";
    }
}