var chargingCosito = document.querySelector(".charging");
var contentApp = document.querySelector(".contentApp");

var completeCharguedTime = false;

function postChargueCompleted() {


  //MAS ADELANTE SE DICE QUE SE CAMBIARAN LAS VARIABLES; ESTO ES DESPUES DE QUE TERMINA LA ENTRADA
  function changeVariables(position) {

    qLetters.innerHTML = questions[position].questionTitle;
    $(document).ready(function () {
      $(".letters").lettering('words');
    });


    var answerArray = questions[position].answers;

    for (var e in answerArray) {
      var newAnswer = document.createElement('div');
      newAnswer.className = "answer";
      newAnswer.id = "answer" + [answerArray.indexOf(answerArray[e]) + 1];
      cqAnswers.appendChild(newAnswer);
      newAnswer.style.opacity = "0";
      var cardView = document.createElement('div');
      cardView.className = "answerCard";
      newAnswer.appendChild(cardView);
      var cardTitle = document.createElement('span');
      cardTitle.innerHTML = answerArray[e];
      newAnswer.appendChild(cardTitle);
      cardTitle.style.opacity = "0";

    }
    document.querySelectorAll('.letter').forEach(function (e) {
      e.style.opacity = "0";
    })

    var titleTimeline = anime.timeline();
    titleTimeline
      .add({
        targets: '.letter',
        opacity: 0,
        duration: 100
      })
      .add({
        targets: '.titleName .letter,.letters',
        translateY: ["1.1em", 0],
        opacity: 1,
        translateZ: 0,
        duration: 750,
        delay: function (el, i) {
          return 50 * i;
        },
        complete: function (animate) {
          answersEnter();
          //console.log("i");
        }
      });

    function answersEnter() {
      var answersTimeline = anime.timeline();

      answersTimeline
        .add({
          targets: '.answer',
          translateX: "-200vw",
          opacity: 0,
          duration: 50

        })
        .add({
          targets: '.answer span',
          opacity: 0,
          duration: 50
        })
        .add({
          targets: '.answer',
          opacity: 1,
          translateX: 0
        }).add({
          targets: '.answer span',
          opacity: 1,
          duration: 400
        })

    };

  }





  contentApp.innerHTML = "";

  var cqTest = document.createElement('div');
  cqTest.className = "test"
  contentApp.appendChild(cqTest);

  var qTitle = document.createElement('div');
  qTitle.className = "titleTest";
  cqTest.appendChild(qTitle);

  var qTitleName = document.createElement('h1');
  qTitleName.className = "titleName";
  qTitle.appendChild(qTitleName);

  var qTitleNameSpan = document.createElement('span');
  qTitleNameSpan.className = "text-wrapper";
  qTitleName.appendChild(qTitleNameSpan);

  var qLetters = document.createElement('span');
  qLetters.className = "letters";
  qTitleNameSpan.appendChild(qLetters);

  var cAnswers = document.createElement('div');
  cAnswers.className = "answersContainer";
  cqTest.appendChild(cAnswers);

  var cqAnswers = document.createElement('div');
  cqAnswers.className = "answers";
  cAnswers.appendChild(cqAnswers);;


  var questionCount = 0;

  var question1Result;
  var question2Result;
  var question3Result;
  var question4Result;

  var helados = ["blueberry", "mint", "bubblegum", "vainilla", "chocolate", "pistachio", "orange"];
  var blueberry = 0,
    mint = 0,
    bubblegum = 0,
    vainilla = 0,
    chocolate = 0,
    pistachio = 0,
    orange = 0;



  function startAnotherQuestion() {
    questionCount++;


    if (questionCount == 1) {
      while (cqAnswers.hasChildNodes()) {
        cqAnswers.removeChild(cqAnswers.lastChild);
      }
      changeVariables(1)

      
      var answer1 = document.getElementById("answer1");
      document.querySelector("#answer1 .answerCard")
      .innerHTML = icon1;
      var answer2 = document.getElementById("answer2");
      document.querySelector("#answer2 .answerCard")
      .innerHTML = icon2;
      var answer3 = document.getElementById("answer3");
      document.querySelector("#answer3 .answerCard")
      .innerHTML = icon3;

      answer1.addEventListener("click", function () {
        var answersNotSelectedArray = [answer2, answer3];
        var titleTimeline = anime.timeline();
      titleTimeline
        .add({
          targets: answersNotSelectedArray,
          translateX: "-130vw",
        })
        .add({
          targets: answer1,
          translateX: "130vw",
          complete: function (anim) {
            question2Result = 1;
            startTitleEnd();
          }
        });
      });
      answer2.addEventListener("click", function () {
        var answersNotSelectedArray = [answer1, answer3];
        var titleTimeline = anime.timeline();
      titleTimeline
        .add({
          targets: answersNotSelectedArray,
          translateX: "-130vw",
        })
        .add({
          targets: answer2,
          translateX: "130vw",
          complete: function (anim) {
            question2Result = 2;
            startTitleEnd();
          }
        });
      });

      answer3.addEventListener("click", function () {
        var answersNotSelectedArray = [answer2, answer1];
        var titleTimeline = anime.timeline();
      titleTimeline
        .add({
          targets: answersNotSelectedArray,
          translateX: "-130vw",
        })
        .add({
          targets: answer3,
          translateX: "130vw",
          complete: function (anim) {
            question2Result = 3;
            startTitleEnd();
          }
        });
      });
    }
    if (questionCount == 2) {
      while (cqAnswers.hasChildNodes()) {
        cqAnswers.removeChild(cqAnswers.lastChild);
      }
      changeVariables(2)
      var answer1 = document.getElementById("answer1");
      document.querySelector("#answer1 .answerCard")
      .innerHTML = icon1;
      var answer2 = document.getElementById("answer2");
      document.querySelector("#answer2 .answerCard")
      .innerHTML = icon2;

      answer1.addEventListener("click", function () {
        var answersNotSelectedArray = [answer2];
        var titleTimeline = anime.timeline();
        titleTimeline
          .add({
            targets: answersNotSelectedArray,
            translateX: "-130vw",
          })
          .add({
            targets: answer1,
            translateX: "130vw",
            complete: function (anim) {
              question3Result = 1;
              startTitleEnd();
            }
          });
      });
      answer2.addEventListener("click", function () {
        var answersNotSelectedArray = [answer1];
        var titleTimeline = anime.timeline();
        titleTimeline
          .add({
            targets: answersNotSelectedArray,
            translateX: "-130vw",
          })
          .add({
            targets: answer2,
            translateX: "130vw",
            complete: function (anim) {
              question3Result = 2;
              startTitleEnd();
            }
          });
      });

    }

    if (questionCount == 3) {
      while (cqAnswers.hasChildNodes()) {
        cqAnswers.removeChild(cqAnswers.lastChild);
      }
      changeVariables(3);
      var answer1 = document.getElementById("answer1");
      document.querySelector("#answer1 .answerCard")
      .innerHTML = icon1;
      var answer2 = document.getElementById("answer2");
      document.querySelector("#answer2 .answerCard")
      .innerHTML = icon2;
      var answer3 = document.getElementById("answer3");
      document.querySelector("#answer3 .answerCard")
      .innerHTML = icon3;

        answer1.addEventListener("click", function () {
          var answersNotSelectedArray = [answer2, answer3];
          var titleTimeline = anime.timeline();
        titleTimeline
          .add({
            targets: answersNotSelectedArray,
            translateX: "-130vw",
          })
          .add({
            targets: answer1,
            translateX: "130vw",
            complete: function (anim) {
              question4Result = 4;

              finishTest();
            }
          });
        });
        answer2.addEventListener("click", function () {
          var answersNotSelectedArray = [answer1, answer3];
          var titleTimeline = anime.timeline();
        titleTimeline
          .add({
            targets: answersNotSelectedArray,
            translateX: "-130vw",
          })
          .add({
            targets: answer2,
            translateX: "130vw",
            complete: function (anim) {
              question4Result = 2;
              //alert("terminado");
              finishTest();
            }
          });
        });
  
        answer3.addEventListener("click", function () {
          var answersNotSelectedArray = [answer2, answer1];
          var titleTimeline = anime.timeline();
        titleTimeline
          .add({
            targets: answersNotSelectedArray,
            translateX: "-130vw",
          })
          .add({
            targets: answer3,
            translateX: "130vw",
            complete: function (anim) {
              question4Result = 3;
              //alert("terminado");
              finishTest();
            }
          });
        });



    }
  }

  function startTitleEnd() {
    var titleTimeline = anime.timeline();
    titleTimeline
      .add({
        targets: '.titleName .letter,.letters',
        translateY: ["1.1em", 0],
        opacity: 0,
        translateZ: 0,
        duration: 750,

        delay: function (el, i) {
          return 50 * i;
        },

        complete: function (animate) {
          startAnotherQuestion();
          console.log("i");
        }
      });
  }

  function finishEndTest() {



    if (question1Result == 1) {
      blueberry++;
      mint++;
      orange++;
    } else if (question1Result == 2) {
      bubblegum++;
      vainilla++;
      pistachio++;
      chocolate++;
    }

    if (question2Result == 1) {
      vainilla++;
      pistachio++;
      orange++;
      mint++;
    } else if (question2Result == 2) {
      blueberry++;
      chocolate++;
      bubblegum++;
    } else if (question2Result == 3) {
      vainilla++;
      orange++;
      pistachio++;
      blueberry++;
      mint++;
    }

    if (question3Result == 1) {
      vainilla++;
      pistachio++;
      mint++;
      blueberry++;
    } else if (question3Result == 2) {
      bubblegum++;
      chocolate++;
      orange++;
    }
    if (question4Result == 1) {
      pistachio++;
    } else if (question4Result == 2) {
      chocolate++;
      bubblegum++;
      blueberry++;
    } else if (question4Result == 3) {
      mint++;
      vainilla++;
      orange++;
    }

    var blueberryClass = document.querySelector('.blueberry');
    var mintClass = document.querySelector('.mint');
    var blubblegumClass = document.querySelector('.bubblegum');
    var vainillaClass = document.querySelector('.vainilla');
    var chocolateClass = document.querySelector('.chocolate');
    var pistachioClass = document.querySelector('.pistachio');
    var orangeClass = document.querySelector('.orange');

    blueberryClass.setAttribute("valor", blueberry);
    mintClass.setAttribute("valor", mint);
    blubblegumClass.setAttribute("valor", bubblegum);
    vainillaClass.setAttribute("valor", vainilla);
    chocolateClass.setAttribute("valor", chocolate);
    pistachioClass.setAttribute("valor", pistachio);
    orangeClass.setAttribute("valor", orange);

    maxNumberIceCreams = Math.max(blueberry, chocolate, mint, pistachio, bubblegum, orange, vainilla);

    var arrayIceCreamsSelected = document.querySelectorAll('[valor="' + maxNumberIceCreams + '"]');



    var iceCreamSelected = arrayIceCreamsSelected[0].getAttribute("class");

    if (iceCreamSelected == "blueberry") window.location.href = "/tu_helado/blueberry";
    if (iceCreamSelected == "mint") window.location.href = "/tu_helado/mint";
    if (iceCreamSelected == "bubblegum") window.location.href = "/tu_helado/bubblegum";
    if (iceCreamSelected == "vainilla") window.location.href = "/tu_helado/vainilla";
    if (iceCreamSelected == "chocolate") window.location.href = "/tu_helado/chocolate";
    if (iceCreamSelected == "pistachio") window.location.href = "/tu_helado/pistachio";
    if (iceCreamSelected == "orange") window.location.href = "/tu_helado/orange";

  };
  
  function finishTest() {
    var titleTimeline = anime.timeline();
    titleTimeline
      .add({
        targets: '.titleName .letter,.letters',
        translateY: ["1.1em", 0],
        opacity: 0,
        translateZ: 0,
        duration: 750,

        delay: function (el, i) {
          return 50 * i;
        },

        complete: function (animate) {
          finishEndTest();
          console.log("i");
        }
      });
  }



  if (questionCount == 0) {
    changeVariables(0);
    
    var answer1 = document.getElementById("answer1");
    document.querySelector("#answer1 .answerCard")
    .innerHTML = icon1;
    var answer2 = document.getElementById("answer2");
    document.querySelector("#answer2 .answerCard")
    .innerHTML = icon2;

    answer1.addEventListener("click", function () {
      var answersNotSelectedArray = [answer2];
      var titleTimeline = anime.timeline();
      titleTimeline
        .add({
          targets: answersNotSelectedArray,
          translateX: "-130vw",
        })
        .add({
          targets: answer1,
          translateX: "130vw",
          complete: function (anim) {
            question1Result = 1;
            startTitleEnd();
          }
        });
    });

    answer2.addEventListener("click", function () {

      var answersNotSelectedArray = [answer1];
      var titleTimeline = anime.timeline();
      titleTimeline
        .add({
          targets: answersNotSelectedArray,
          translateX: "-130vw",
        })
        .add({
          targets: answer2,
          translateX: "130vw",
          complete: function (anim) {
            question1Result = 2;
            startTitleEnd();
          }
        });
    });
  }



  cqAnswers.addEventListener("click", function () {


  });


}


function start() {
  contentApp.innerHTML = "";

  var composition = document.createElement('div');
  composition.className = "titleComposition"
  contentApp.appendChild(composition);

  var titlsContainer = document.createElement('div');
  titlsContainer.className = "titles"
  composition.appendChild(titlsContainer);

  var sbTitle1 = document.createElement('h3');
  sbTitle1.className = "subTitleIce"
  sbTitle1.setAttribute('id', 'firstTitle');
  sbTitle1.innerHTML = "¿Que sabor de";
  titlsContainer.appendChild(sbTitle1);

  var titleStart = document.createElement('h1');
  titleStart.className = "titleIce";
  titleStart.innerHTML = "Helado"
  titlsContainer.appendChild(titleStart);

  var sbTitle2 = document.createElement('h3');
  sbTitle2.className = "subTitleIce"
  sbTitle2.setAttribute('id', 'thirdTitle');
  sbTitle2.innerHTML = "eres";
  titlsContainer.appendChild(sbTitle2);

  var imgTtl = document.createElement('div');
  imgTtl.className = "imageTitle";
  imgTtl.innerHTML = svgIceCream;
  composition.appendChild(imgTtl);

  var upper = document.querySelector('.uppest');
  var up = document.querySelector('.up');
  var cone = document.querySelector('.cone');
  var down = document.querySelector('.down');

  //var  = document.querySelector('.uppest,.up,.cone,.down');

  upper.style.opacity = 0;
  up.style.opacity = 0;
  cone.style.opacity = 0;
  down.style.opacity = 0;
  sbTitle1.style.opacity = 0;
  titleStart.style.opacity = 0;
  sbTitle2.style.opacity = 0;


  var startTimeline = anime.timeline();

  startTimeline
    .add({
      targets: down,
      opacity: 0,
      translateY: -500,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: down,
      opacity: .2,
      translateY: 0,
      easing: 'easeOutQuad',
      duration: 400
    })
    .add({
      targets: cone,
      opacity: 0,
      translateY: -100,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: cone,
      opacity: 1,
      translateY: 0,
      easing: 'easeOutQuad',
      duration: 400
    })
    .add({
      targets: up,
      opacity: 0,
      translateY: -100,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: up,
      opacity: 1,
      translateY: 0,
      easing: 'easeOutQuad',
      duration: 400
    })
    .add({
      targets: upper,
      opacity: 0,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: upper,
      opacity: 1,
      translateY: 0,
      easing: 'easeOutQuad',
      duration: 400,
      complete: function (anim) {
        floating();

      }
    })
    .add({
      targets: sbTitle1,
      opacity: 0,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: sbTitle1,
      opacity: 1,
      easing: 'easeOutQuad',
      duration: 400
    })
    .add({
      targets: titleStart,
      translateX: "-120vw",
      opacity: 1,
      easing: 'easeOutQuad',
      duration: 50,
      elasticity: 400
    })
    .add({
      targets: titleStart,
      translateX: 10,
      easing: 'easeOutQuad',
      duration: 400
    })
    .add({
      targets: titleStart,
      translateX: -10,
      easing: 'easeInQuad',
      duration: 200
    })
    .add({
      targets: titleStart,
      translateX: 0,
      easing: 'easeOutQuad',
      duration: 200
    })
    .add({
      targets: sbTitle2,
      opacity: 0,
      easing: 'easeOutQuad',
      duration: 50
    })
    .add({
      targets: sbTitle2,
      opacity: 1,
      easing: 'easeOutQuad',
      duration: 400,
      complete: function (anim) {
        postAnimationStart();
      }
    });

  var eye1 = document.getElementsByClassName("stT13")[2];
  var eye2 = document.getElementsByClassName("stT13")[3];

  var arrayEyes = [eye1, eye2];

  function postAnimationStart() {
    imgTtl.addEventListener("click", function () {
      var startTimeline = anime.timeline();

      startTimeline
        .add({
          targets: sbTitle1,
          opacity: 0,
          easing: 'easeOutQuad',
          duration: 400
        })

        .add({
          targets: titleStart,
          translateX: "20",
          easing: 'easeOutQuad',
          duration: 200

        })
        .add({
          targets: titleStart,
          translateX: "-120vw",
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 400

        })
        .add({
          targets: sbTitle2,
          opacity: 0,
          easing: 'easeOutQuad',
          duration: 400
        })

        .add({
          targets: arrayEyes,
          translateX: -20,
          easing: 'easeOutQuad',
          duration: 400
        })
        .add({
          targets: arrayEyes,
          translateX: 20,
          easing: 'easeOutQuad',
          duration: 400
        })
        .add({
          targets: arrayEyes,
          translateX: 0,
          easing: 'easeOutQuad',
          duration: 400
        })
        .add({
          targets: imgTtl,
          translateX: "70vw",
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 400
        })
        .add({
          targets: imgTtl,
          translateX: "30vw",
          opacity: 1,
          easing: 'easeOutQuad',
          delay: 1000,
          duration: 400
        })
        .add({
          targets: imgTtl,
          translateX: "-70vw",
          opacity: 1,
          easing: 'easeOutQuad',
          delay: 250,
          duration: 400,
          complete: function (anim) {
            postChargueCompleted();
          }
        })

    });
  };

  function floating() {

    var alternate = anime({
      targets: cone,
      translateY: -15,
      direction: 'alternate',
      duration: 1000,
      loop: true
    });
    anime({
      targets: up,
      translateY: -15,
      direction: 'alternate',
      duration: 1000,
      delay: 500,
      loop: true
    });



  }
}

function chargueCompleted() {

  var completeTimeline = anime.timeline();
  completeTimeline
    .add({
      targets: chargingCosito,
      zoom: -1,
      opacity: 0,
      easing: 'easeOutQuad',
      duration: 500,
      complete: function (anim) {
        start();
      }
    });

}

//postChargueCompleted();

setTimeout(chargueCompleted, 3000);


var questions = [{
    questionTitle: "Describirías&nbsp;tu&nbsp;personalidad&nbsp;como:",
    answers: ["Relajado", "Alegre"]
  },

  {
    questionTitle: "En&nbsp;tu&nbsp;tiempo&nbsp;libre&nbsp;prefieres:",
    answers: ["Leer un libro", "Salir con amigos", "Ver series"]
  },

  {
    questionTitle: "¿Cómo&nbsp;describirias&nbsp;tu&nbsp;estilo&nbsp;de&nbsp;vida?",
    answers: ["Tranquilo", "Enérgico"]
  },

  {
    questionTitle: "Tu&nbsp;vida&nbsp;&nbsp;social&nbsp;es:",
    answers: ["De pocos amigos", "Soy el más popular que conozco", "Conozco a muchos pero tengo pocos amigos"]
  },
];
var icon1 = `
<svg version="1.1" id="icecreamIcon2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 170 206" style="enable-background:new 0 0 170 206;" xml:space="preserve">

                        <polygon class="st20" id="baseIcon2" points="143.3,197.3 38.7,197.3 31.7,150.9 150.3,150.9 " />
                        <path class="st21" id="creamIcon2" d="M130.1,101c0,0,16.6-25.2-8.4-42.3c0,0,2.8-27.6-21.3-31.9C76.2,22.4,80.9,10,80.9,10s-25.8,6.8-17.4,35
	c0,0-29.7,17.1-10.9,50.3c0,0-34.7,14.7-14.7,55.7h14.7h0.6v22.9c0,4,3.3,7.3,7.3,7.3c4,0,7.3-3.3,7.3-7.3V151h77.7
	C145.5,151,163.4,121.4,130.1,101z" />
                        <path class="st22" d="M103,59.9c6.3,0.2,12.5-0.3,18.7-1.3" />
                        <path class="st22" d="M63.5,45c6.8,8.6,17.8,11.6,28.4,13.9" />
                        <path class="st22" d="M83.6,108.3c15.9,3.4,32.6,1.5,46.4-7.4" />
                        <path class="st22" d="M52.6,95.2c6.1,4.2,13,7.4,19.9,9.9" />
                        <polygon class="st23" points="132.5,157.2 125.2,195 139.7,195 145.5,157.2 " />
                        <g>
                        </g>
                    </svg>
`
var icon2 = `                    <svg version="1.1" id="icecreamIcon3" x="0px" y="0px" viewBox="0 0 170 206" style="enable-background:new 0 0 170 206;" xml:space="preserve">

<path class="st30" id="iceStickIcon3" d="M97.8,144.6H75.7v47.7c0,6.1,5,11.1,11.1,11.1h0c6.1,0,11.1-5,11.1-11.1V144.6z" />
<path class="st31" d="M90.8,155.5v34.1c0,0,0,5.4-5.1,7.5c0,0,9.6,1.4,8.6-7.3v-34.3H90.8z" />
<path class="st32" id="iceCoverIcon3" d="M89.5,5.1h-7c-23.8,0-43.1,19.3-43.1,43.1v107.1h93.2V48.2C132.6,24.4,113.3,5.1,89.5,5.1z"
/>
<path class="st33" d="M60.6,52.2c0,0-2.8,11.4,7.9,11.4s7.9-11.4,7.9-11.4" />
<path class="st33" d="M95.6,85.2c0,0-2.8,11.4,7.9,11.4s7.9-11.4,7.9-11.4" />
<path class="st33" d="M62.6,111.2c0,0-2.8,11.4,7.9,11.4s7.9-11.4,7.9-11.4" />
<path class="st31" d="M90.7,8.6c0,0,33.4,13.8,31.5,46.9v97.7h8.9V43.6c0,0-3.1-26.1-27.3-35.8L90.7,8.6z" />
</svg>

`

var icon3 = `<svg version="1.1" id="iceCreamIcon4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px" viewBox="0 0 170 206" style="enable-background:new 0 0 170 206;" xml:space="preserve">

<circle class="st40" cx="58.9" cy="37.5" r="1" />
<circle class="st40" cx="58.9" cy="84.3" r="1" />
<circle class="st41" cx="46.9" cy="84.3" r="1.8" />
<circle class="st42" cx="49.6" cy="55.4" r="1.7" />
<polygon class="st43" id="coneIceCream4" points="87.8,201.6 130,93.5 44.9,93.5 " />
<line class="st44" x1="76.7" y1="166.9" x2="119.4" y2="120.5" />
<line class="st44" x1="65" y1="137.1" x2="108.5" y2="93.9" />
<line class="st44" x1="55" y1="111.9" x2="71.2" y2="95" />
<line class="st44" x1="98" y1="168.2" x2="59.3" y2="125.6" />
<line class="st44" x1="109.7" y1="138.8" x2="65" y2="93.9" />
<polygon class="st45" points="112.4,103.9 85.8,187.1 87.4,191.2 121.5,106.1 " />
<line class="st44" x1="119.6" y1="113.3" x2="98.8" y2="93.4" />
<path class="st46" id="coverIceCream4" d="M36.8,66c0,0-3.9-14.6,8.9-24.9c0,0,5.4-30.6,42.2-29.8c36.8,0.8,38.5,30.1,38.5,30.1s16.4,3.9,11.8,26.4
c0,0,11.6,17.8-6.8,32.6c-10.7,8.3-24.8-3.5-24.8-3.5s-7,12-20.7,11.8s-18-11.8-18-11.8S48.7,109,36.2,93.5C25.9,77,36.8,66,36.8,66
z" />
<path class="st44" d="M83.6,28.9c0,0-14.9-1.1-22.1,20.9" />
<path class="st44" d="M106.6,55.9c0,0,10.9,2.4,10,14.1" />
</svg>

`
var svgIceCream = `<svg version="1.1" id="iceCreamTitle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 306.7 791.3" style="enable-background:new 0 0 306.7 751.3;" xml:space="preserve">


     <ellipse class="down stT0" cx="145" cy="738.3" rx="108.1" ry="16.5" />
     <g class="cone">
         <g>
             <path class="stT1" d="M146.3,693.6c-9.4,0-17.5-5.7-20.6-14.6L20.9,378.1c-2.4-6.7-1.3-14,2.8-19.8c4.1-5.8,10.6-9.2,17.8-9.2
       h209.7c7.1,0,13.6,3.3,17.8,9.2c4.1,5.8,5.2,13,2.8,19.8L166.9,679C163.8,687.9,155.7,693.6,146.3,693.6z" />
             <path class="stT2" d="M251.2,352.7c12.6,0,21.4,12.4,17.3,24.3L163.6,677.9c-2.8,8.2-10.1,12.3-17.3,12.3s-14.4-4.1-17.3-12.3
             L24.2,377c-4.1-11.9,4.7-24.3,17.3-24.3H251.2 M251.2,345.7H41.5c-8.2,0-15.9,4-20.6,10.6s-6,15.2-3.3,23l104.8,300.9
             c3.6,10.3,13,17,23.9,17s20.3-6.7,23.9-17L275,379.3c2.7-7.7,1.5-16.3-3.3-23S259.3,345.7,251.2,345.7L251.2,345.7z" />
         </g>
         <path class="stT3" d="M266,383.5l-97.6,277.4c-5,14.1-20.1,18.6-31.7,13.6c5.5-2.4,10.2-6.9,12.5-13.6l97.6-277.4
     c5.3-15.1-6-30.8-22.1-30.8H244C260.1,352.7,271.3,368.4,266,383.5z" />
         <g>
             <g class="stT4">
                 <path class="stT5" d="M128.3,649c-1,0-2-0.6-2.4-1.7c-8.1-22.1-15.6-44.7-22.9-66.6c-4.6-13.8-9.3-28-14.1-41.9l-5.7-16.6
                 c-0.5-1.3,0.2-2.8,1.6-3.3c1.3-0.5,2.8,0.2,3.3,1.6l5.7,16.6c4.8,14,9.6,28.2,14.1,42c7.3,21.9,14.8,44.5,22.9,66.5
                 c0.5,1.3-0.2,2.8-1.5,3.3C128.9,649,128.6,649,128.3,649z" />
             </g>
             <circle class="stT6" cx="83" cy="513.9" r="2.5" />
         </g>
         <g>
             <defs>
                 <path id="SVGID_1_" d="M163.6,677.9L268.4,377c4.1-11.9-4.7-24.3-17.3-24.3H41.5c-12.6,0-21.4,12.4-17.3,24.3l104.8,300.9
         C134.8,694.2,157.9,694.2,163.6,677.9z" />
             </defs>
             <clipPath id="SVGID_2_">
                 <use xlink:href="#SVGID_1_" style="overflow:visible;" />
             </clipPath>
             <g class="stT7">
                 <line class="stT8" x1="39.7" y1="302.5" x2="261" y2="409.1" />
                 <line class="stT8" x1="38.1" y1="410.6" x2="259.4" y2="517.2" />
                 <line class="stT8" x1="42.1" y1="518.8" x2="263.4" y2="625.4" />
                 <line class="stT8" x1="40.4" y1="626.9" x2="261.7" y2="733.5" />
                 <line class="stT8" x1="259.3" y1="300.2" x2="38" y2="406.8" />
                 <line class="stT8" x1="260.9" y1="408.3" x2="39.6" y2="515" />
                 <line class="stT8" x1="257" y1="516.5" x2="35.7" y2="623.1" />
                 <line class="stT8" x1="258.6" y1="624.6" x2="37.3" y2="731.2" />
             </g>
         </g>
     </g>
     <g class="up">
         <g>
             <path class="stT9" d="M169.6,466.5c-14.5,0-26.3-11.8-26.3-26.3v-30.1c-4.8,5.2-11.7,8.5-19.3,8.5s-14.5-3.3-19.3-8.5v24.2
             c0,14.5-11.8,26.3-26.3,26.3s-26.3-11.8-26.3-26.3v-49.8c-5,5.3-12.1,8.5-19.3,8.5c-6.9,0-12.8-2.4-17.3-7.1
             C1.9,372,3.1,341.4,4,319c0.2-5.3,0.4-10,0.3-13.4c-0.8-35.5,1.3-76.2,23.3-109.9c26-39.9,71.6-64.7,119.2-64.7c0,0,0,0,0,0
             c48.9,0,95.2,25.9,121,67.5c12.5,20.2,19.2,43.9,21.1,74.4c1.2,19.3,0.3,39.1-0.5,58.2c-0.5,11.8-1,24-1,35.6
             c0,14.5-11.8,26.3-26.3,26.3c-7.6,0-14.5-3.3-19.3-8.5v13.6c0,14.5-11.8,26.3-26.3,26.3c-7.6,0-14.5-3.3-19.3-8.5v24.2
             C195.9,454.7,184.1,466.5,169.6,466.5z" />
             <path class="stT2" d="M146.8,134.5c47.7,0,92.9,25.3,118,65.8c13.8,22.3,19,47.1,20.6,72.8c1.9,31.1-1.5,63.4-1.5,93.6
             c0,12.6-10.3,22.8-22.8,22.8c-12.6,0-22.8-10.3-22.8-22.8v31.5c0,12.6-10.3,22.8-22.8,22.8s-22.8-10.3-22.8-22.8v42
             c0,12.6-10.3,22.8-22.8,22.8c-12.6,0-22.8-10.3-22.8-22.8v-47.9c0,12.6-10.3,22.8-22.8,22.8s-22.8-10.3-22.8-22.8v42
             c0,12.6-10.3,22.8-22.8,22.8c-12.6,0-22.8-10.3-22.8-22.8v-67.6c0,5.3-1.9,10.6-5.3,14.6c-4.3,5.1-10.8,8.2-17.5,8.2c0,0,0,0,0,0
             c-33.4,0-24.2-62.7-24.7-84C7,268.4,9.7,229.6,30.5,197.6C55.9,158.6,100.2,134.5,146.8,134.5 M146.8,127.5l0,7L146.8,127.5
             c-24,0-48,6.1-69.4,17.8c-21.4,11.6-39.6,28.4-52.7,48.5C2.2,228.2,0,269.7,0.8,305.7c0.1,3.3-0.1,7.9-0.3,13.2
             c-0.9,23-2.2,54.5,12.2,69.5c5.2,5.4,11.9,8.2,19.8,8.2c5.6,0,11.1-1.7,15.8-4.6v42.4c0,16.5,13.4,29.8,29.8,29.8
             c16.5,0,29.8-13.4,29.8-29.8v-16.7c4.6,2.9,10,4.6,15.8,4.6c5.8,0,11.2-1.7,15.8-4.6v22.7c0,16.5,13.4,29.8,29.8,29.8
             c16.5,0,29.8-13.4,29.8-29.8v-16.8c4.6,2.9,10,4.6,15.8,4.6c16.5,0,29.8-13.4,29.8-29.8V392c4.6,2.9,10,4.6,15.8,4.6
             c16.5,0,29.8-13.4,29.8-29.8c0-11.5,0.5-23.2,1-35.5c0.8-19.2,1.7-39.1,0.5-58.5c-1.9-31.1-8.8-55.3-21.6-76
             C244.4,154,196.9,127.5,146.8,127.5L146.8,127.5z" />
         </g>
         <g class="stT10">
             <path class="stT2" d="M283.8,366.7c0,12.6-10.3,22.8-22.8,22.8c-1.1,0-2.1-0.1-3.1-0.2c6.9-3.9,11.6-11.4,11.6-19.9
             c0-30.2,3.4-62.5,1.5-93.6c-1.6-25.6-6.8-50.5-20.6-72.8c-25.1-40.6-70.3-65.8-118-65.8c-6.2,0-12.3,0.4-18.4,1.2
             c10.6-2.6,21.6-4,32.7-4c47.7,0,92.9,25.3,118,65.8c13.8,22.3,19,47.1,20.6,72.8C287.3,304.2,283.8,336.5,283.8,366.7z" />
         </g>
         <path class="stT11" d="M19.3,357.9c0,0-0.1,0-0.1,0c-1.5-0.1-2.7-1.4-2.6-2.9c0.6-12.4,0.3-25.4,0.1-38c-0.6-30.6-1.2-62.3,9.4-91
         c15.3-41.6,54.5-73.3,100-80.7c1.5-0.2,2.9,0.8,3.1,2.3c0.2,1.5-0.8,2.9-2.3,3.1c-43.5,7.1-81.1,37.4-95.7,77.2
         c-10.2,27.8-9.6,58.9-9,89c0.2,12.7,0.5,25.8-0.1,38.4C22,356.8,20.7,357.9,19.3,357.9z" />
         <g>
             <ellipse transform="matrix(0.1602 -0.9871 0.9871 0.1602 -88.1179 420.4697)" class="stT12" cx="203" cy="262" rx="57" ry="57"
             />
             <path class="stT13" d="M203,208.6c29.5,0,53.5,23.9,53.5,53.5c0,29.5-23.9,53.5-53.5,53.5s-53.5-23.9-53.5-53.5
             C149.6,232.5,173.5,208.6,203,208.6 M203,201.6c-33.3,0-60.5,27.1-60.5,60.5s27.1,60.5,60.5,60.5c33.3,0,60.5-27.1,60.5-60.5
             S236.4,201.6,203,201.6L203,201.6z" />
         </g>
         <g>
             <line class="stT12" x1="249" y1="302.2" x2="301.7" y2="354.9" />
             <g>
                 <path class="stT13" d="M245.5,305.7c17.6,17.6,35.1,35.1,52.7,52.7c4.6,4.6,11.6-2.5,7.1-7.1c-17.6-17.6-35.1-35.1-52.7-52.7
         C248,294.1,240.9,301.2,245.5,305.7L245.5,305.7z" />
             </g>
         </g>
         <circle class="stT13" cx="206.4" cy="263.7" r="16.9" />
         <path class="stT14" d="M237.8,221.4c0,0-61.4,86.6-61.6,86.9c-0.2,0.2,8.5,4,9,4.2c7.7,2.7,16,3.5,24.1,2.4
     c24.1-3.2,42.6-20.6,45.9-44.8C257.7,251.8,251,233.9,237.8,221.4z" />
         <circle class="stT13" cx="105.5" cy="265.8" r="11" />
     </g>
     <g class="uppest">
         <path class="stT9" d="M152,103.5c-5.3,0-9.8-1.9-13.3-5.6c-3.4-3.6-5.1-8.1-5.1-13.3c0-5.3,1.7-9.7,5.2-13.3c1.4-1.5,3-2.6,4.7-3.5
         h-3.1c-1.9,0-3.5-1.6-3.5-3.5c0-4.6,1-8.6,2.8-11.8c1.7-2.9,4.1-6,7.2-9.4c1.7-1.9,3-3.4,3.8-4.6c0.5-0.7,0.7-1.4,0.7-2.1
         c0-0.9-0.3-1.3-0.7-1.6c-0.8-0.6-1.9-0.9-3.3-0.9c-1.6,0-3.2,0.5-4.6,1.7c-1.6,1.2-2.9,2.9-3.9,5c-0.4,0.9-1.2,1.6-2.1,1.9
         c-0.4,0.1-0.7,0.2-1.1,0.2c-0.6,0-1.2-0.2-1.7-0.5l-20-11.4c-1.6-0.9-2.2-2.9-1.4-4.5c3.3-7.1,8.2-12.7,14.7-16.7
         c6.4-4,14.4-6,23.6-6c9.9,0,18.1,2.4,24.4,7.1c6.6,4.9,10,12,10,20.9c0,4-0.6,7.6-1.9,10.7c-1.2,3-2.7,5.6-4.4,7.7
         c-1.6,1.9-3.6,4.1-6,6.4c-2.2,2.2-3.8,4-4.8,5.3c-0.6,0.9-0.9,1.8-0.9,2.8c0,1.9-1.6,3.5-3.5,3.5h-3.1c1.7,0.9,3.3,2,4.7,3.5
         c3.4,3.5,5.2,8,5.2,13.3c0,5.2-1.7,9.6-5.1,13.3C161.8,101.6,157.3,103.5,152,103.5z" />
         <path class="stT2" d="M150.7,7c9.1,0,16.6,2.1,22.3,6.4c5.7,4.3,8.6,10.3,8.6,18.1c0,3.6-0.5,6.7-1.6,9.4c-1.1,2.7-2.4,5-3.9,6.8
         c-1.5,1.8-3.4,3.9-5.7,6.1c-2.4,2.4-4.1,4.3-5.2,5.8c-1.1,1.5-1.6,3.1-1.6,4.9h-23.2c0-4,0.8-7.4,2.4-10.1c1.6-2.7,3.8-5.6,6.7-8.8
         c1.9-2,3.2-3.7,4.1-5c0.9-1.3,1.3-2.6,1.3-4.1c0-1.9-0.7-3.4-2.1-4.4c-1.4-1.1-3.2-1.6-5.4-1.6c-2.4,0-4.7,0.8-6.7,2.4
         c-2.1,1.6-3.8,3.7-4.9,6.3l-20-11.4c3-6.5,7.4-11.6,13.3-15.2C134.8,8.8,142.1,7,150.7,7 M152,69.5c4.3,0,7.9,1.4,10.7,4.3
         c2.8,2.9,4.2,6.5,4.2,10.8c0,4.3-1.4,7.9-4.2,10.9c-2.8,3-6.3,4.5-10.7,4.5c-4.4,0-7.9-1.5-10.7-4.5c-2.8-3-4.2-6.6-4.2-10.9
         c0-4.4,1.4-8,4.2-10.8C144,70.9,147.6,69.5,152,69.5 M150.7,0c-9.9,0-18.5,2.2-25.5,6.6c-7,4.4-12.4,10.5-16,18.2
         c-1.5,3.3-0.3,7.2,2.9,9l20,11.4c1.1,0.6,2.3,0.9,3.5,0.9c0.7,0,1.5-0.1,2.2-0.3c1.9-0.6,3.4-2,4.2-3.8c0.7-1.6,1.6-2.8,2.8-3.6
         c1-0.8,1.8-0.9,2.4-1c-0.6,0.7-1.5,1.8-2.9,3.4c-3.3,3.5-5.8,6.8-7.6,10c-2.2,3.8-3.3,8.3-3.3,13.6c0,2,0.9,3.9,2.3,5.2
         c-3.7,4.1-5.5,9.2-5.5,15.1c0,6.1,2,11.3,6,15.7c4.1,4.4,9.5,6.7,15.8,6.7c6.3,0,11.7-2.3,15.8-6.7c4-4.3,6-9.6,6-15.6
         c0-5.9-1.9-11-5.5-15.1c1.4-1.3,2.3-3.1,2.3-5.2c0-0.3,0.1-0.5,0.2-0.8c0.6-0.8,1.8-2.3,4.4-4.9c2.5-2.4,4.6-4.6,6.3-6.7
         c1.9-2.4,3.6-5.3,5-8.6c1.4-3.5,2.1-7.6,2.1-12c0-9.9-3.9-18.1-11.4-23.7C170.3,2.6,161.4,0,150.7,0L150.7,0z" />
     </g>
 </svg>`