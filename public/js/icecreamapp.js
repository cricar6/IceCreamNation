var chargingCosito = document.querySelector(".charging");
var contentApp = document.querySelector(".contentApp");

var completeCharguedTime = false;

function postChargueCompleted() {

  function changeVariables(position) {
    question.innerHTML = questions[position].questionTitle;

    var answerArray = questions[position].answers;
    for (var e in answerArray) {
      var newAnswer = document.createElement('div');
      newAnswer.className = "answer";
      newAnswer.id = "answer" + [answerArray.indexOf(answerArray[e]) + 1];
      newAnswer.innerHTML = answerArray[e];
      answerContainer.appendChild(newAnswer);
    }
  }

  contentApp.innerHTML = "";

  var cqContainer = document.createElement('div');
  cqContainer.className = "questionContainer"
  contentApp.appendChild(cqContainer);

  var qTitle = document.createElement('h1');
  qTitle.className = "question";
  cqContainer.appendChild(qTitle);

  var qAnswers = document.createElement('div');
  qAnswers.className = "answers";
  cqContainer.appendChild(qAnswers);

  ;

  var question = document.querySelector(".question");
  var answerContainer = document.querySelector(".answers");

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

  if (questionCount == 0) {
    changeVariables(0);
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");

    answer1.addEventListener("click", function () {
      question1Result = 1;
      questionCount++;
    });
    answer2.addEventListener("click", function () {
      question1Result = 2;
      questionCount++;

    });
  }

  answerContainer.addEventListener("click", function () {


    if (questionCount == 1) {
      while (answerContainer.hasChildNodes()) {
        answerContainer.removeChild(answerContainer.lastChild);
      }
      changeVariables(1)

      var answer1 = document.getElementById("answer1");
      var answer2 = document.getElementById("answer2");
      var answer3 = document.getElementById("answer3");

      answer1.addEventListener("click", function () {
        question2Result = 1;
        questionCount++;
      });
      answer2.addEventListener("click", function () {
        question2Result = 2;
        questionCount++;

      });
      answer3.addEventListener("click", function () {
        question2Result = 3;
        questionCount++;

      });
    }
    if (questionCount == 2) {
      while (answerContainer.hasChildNodes()) {
        answerContainer.removeChild(answerContainer.lastChild);
      }
      changeVariables(2)
      var answer1 = document.getElementById("answer1");
      var answer2 = document.getElementById("answer2");

      answer1.addEventListener("click", function () {
        question3Result = 1;
        questionCount++;
      });
      answer2.addEventListener("click", function () {
        question3Result = 2;
        questionCount++;

      });

    }

    if (questionCount == 3) {
      while (answerContainer.hasChildNodes()) {
        answerContainer.removeChild(answerContainer.lastChild);
      }
      changeVariables(3)
      var answer1 = document.getElementById("answer1");
      var answer2 = document.getElementById("answer2");
      var answer3 = document.getElementById("answer3");

      answer1.addEventListener("click", function () {
        question4Result = 1;
        questionCount++;
      });
      answer2.addEventListener("click", function () {
        question4Result = 2;
        questionCount++;

      });
      answer3.addEventListener("click", function () {
        question4Result = 3;
        questionCount++;

      });

    }


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

    alert(Math.max(blueberry, chocolate, mint, pistachio, bubblegum, orange, vainilla));
    var arrayIceCreams = [blueberry, chocolate, mint, pistachio, bubblegum, orange, vainilla ]
    
    /**
     * 
     * 
     * 
     * 
     * 
     * VOY
     * AQUI
     * 
     * 
     * 
     * 
     * 
     * 
     */
  });


}

function chargueCompleted() {
  //alert("gi");
  var completeTimeline = anime.timeline();
  completeTimeline
    .add({
      targets: chargingCosito,
      zoom: -1,
      opacity: 0,
      easing: 'easeOutQuad',
      duration: 500,
      complete: function (anim) {
        postChargueCompleted();
      }
    });

}
setTimeout(chargueCompleted, 3000);


var questions = [{
    questionTitle: "Describirías tu personalidad como:",
    answers: ["Relajado", "Alégre"]
  },

  {
    questionTitle: "En tu tiempo libre prefieres:",
    answers: ["Leer un libro", "Salir com amigos", "Ver series"]
  },

  {
    questionTitle: "¿Como describirias tu estilo de vida?",
    answers: ["Tranquilo", "Energético"]
  },

  {
    questionTitle: "Tu vida social es:",
    answers: ["De pocos amigos", "Soy el más popular", "Conozco a muchos pero tengo pocos amigos"]
  },
];