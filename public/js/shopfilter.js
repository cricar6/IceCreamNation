//Declaración de variables HTML.
var flSelected = document.querySelector(".flavorSelected");
var flOptions = document.querySelectorAll(".optionsFl li");
var listFl = document.querySelector(".optionsFl");

var priceMinSelected = document.querySelector(".priceMinSelected");
var optionsPMin = document.querySelectorAll(".optionsPMin li");
var listPMin = document.querySelector(".optionsPMin");

var priceMaxSelected = document.querySelector(".priceMaxSelected");
var optionsPMax = document.querySelectorAll(".optionsPMax li");
var listPMax = document.querySelector(".optionsPMax");

//Código del filtro de sabores. Inicia el listener para que cuando se haga click aparezcan los elementos
flSelected.addEventListener("click", function () {
    //Esta timeline setea los elementos afuera para despues setear la entrada
    var basicTimeline = anime.timeline();
    basicTimeline
        .add({
            targets: flOptions[0],
            translateX: "-100vw",
            duration: 40
        })
        .add({
            targets: flOptions[1],
            translateX: "-100vw",
            duration: 40
        })
        .add({
            targets: flOptions[2],
            translateX: "-100vw",
            duration: 40,
            complete: function (anim) {
                next();
                //Se comunica con la función next que muestra hasta que se hace click en alguno
            }
        });


});

function next() {
    // se setean los elementos como block,para que aparezcan porque estaban afuera
    listFl.style.display = "block"
    
    //Esta timeline los hace entrar
    var basic2Timeline = anime.timeline();
    basic2Timeline
        .add({
            targets: flOptions[2],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: flOptions[1],
            translateX: "0vw",
            offset: '-=600',
            easing: 'easeOutExpo',
        })
        .add({
            targets: flOptions[0],
            translateX: "0vw",
            offset: '-=800',
            easing: 'easeOutExpo',
        });
}

var oneSelected = false;

flOptions.forEach(function (e) {
    //Esta funcion añade un listener a todos los elementos, para que cuando se haga click se levanten
    e.addEventListener("click", function () {
        var optionUping = anime({
            targets: e,
            translateY: -100
        });
        var dissapearing = anime({
            targets: flOptions,
            opacity: 0,
            complete: function (anim) {
                okInteractSelection(document.querySelector(".optionsFl"));
            }
        });

    });
});







//Se repite el mismo proceso que en el primero pero con el de precio mínimo y precio máximo
priceMinSelected.addEventListener("click", function () {
    var basicTimeline = anime.timeline();

    basicTimeline
        .add({
            targets: optionsPMin[0],
            translateX: "100vw",
            duration: 40
        })
        .add({
            targets: optionsPMin[1],
            translateX: "100vw",
            duration: 40
        })
        .add({
            targets: optionsPMin[2],
            translateX: "100vw",
            duration: 40,

        })
        .add({
            targets: optionsPMin[3],
            translateX: "100vw",
            duration: 40,

        })
        .add({
            targets: optionsPMin[4],
            translateX: "100vw",
            duration: 40,
            complete: function (anim) {
                next2();
            }
        });


});

function next2() {
    listPMin.style.display = "block"
    //alert("hi")
    var basic2Timeline = anime.timeline({
        duration: 800
    });
    basic2Timeline
        .add({
            targets: optionsPMin[4],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMin[3],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMin[2],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMin[1],
            translateX: "0vw",
            offset: '-=600',
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMin[0],
            translateX: "0vw",
            offset: '-=800',
            easing: 'easeOutExpo',
        });
}

var oneSelected = false;

optionsPMin.forEach(function (e) {
    e.addEventListener("click", function () {

        var optionUping = anime({
            targets: e,
            translateY: -100
        });
        var dissapearing = anime({
            targets: optionsPMin,
            opacity: 0,
            complete: function (anim) {
                okInteractSelection(document.querySelector(".optionsPMin"));
            }
        });

    });
});







priceMaxSelected.addEventListener("click", function () {
    var basicTimeline = anime.timeline();

    basicTimeline
        .add({
            targets: optionsPMax[0],
            translateX: "100vw",
            duration: 40
        })
        .add({
            targets: optionsPMax[1],
            translateX: "100vw",
            duration: 40
        })
        .add({
            targets: optionsPMax[2],
            translateX: "100vw",
            duration: 40,

        })
        .add({
            targets: optionsPMax[3],
            translateX: "100vw",
            duration: 40,

        })
        .add({
            targets: optionsPMax[4],
            translateX: "100vw",
            duration: 40,
            complete: function (anim) {
                next3();
            }
        });


});

function next3() {
    listPMax.style.display = "block"
    //alert("hi")
    var basic2Timeline = anime.timeline({
        duration: 800
    });
    basic2Timeline
        .add({
            targets: optionsPMax[4],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMax[3],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMax[2],
            translateX: "0vw",
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMax[1],
            translateX: "0vw",
            offset: '-=600',
            easing: 'easeOutExpo',
        })
        .add({
            targets: optionsPMax[0],
            translateX: "0vw",
            offset: '-=800',
            easing: 'easeOutExpo',
        });
}

var oneSelected = false;

optionsPMax.forEach(function (e) {
    e.addEventListener("click", function () {

        var optionUping = anime({
            targets: e,
            translateY: -100
        });
        var dissapearing = anime({
            targets: optionsPMax,
            opacity: 0,
            complete: function (anim) {
                okInteractSelection(document.querySelector(".optionsPMax"));
            }
        });

    });
});






function okInteractSelection(elementTo) {
    elementTo.style.display = "none";
}