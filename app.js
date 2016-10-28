$(document).ready(function(event){
  // event.preventDefault()

  var currentQuestion = 0;
  var quiz = [
    { question: "1. Who is the creator of Bitcoin?",
      answers: ["a) Matoshi Nakatoto", "b) Satoshi Nakamoto", "c) Al Gore", "d) Sayoshi Takagomi"],
      solution: "b) Satoshi Nakamoto"
    },
    { question: "2. What year was the Bitcoin white paper released?",
      answers: ["a) 1988", "b) 2009", "c) 2008", "d) 1999"],
      solution: "c) 2008"
    },
    { question: "3. What is the smallest unit of bitcoin currency(Ƀ)?",
      answers: ["a) Satoshi", "b) Byte", "c) Bit", "d) Gas"],
      solution: 0
    },
    { question: "4. What is the bitcoin blockchain?",
      answers: ["a) A rectangular chain", "b) A public ledger", "c) A private ledger", "d) A marketplace"],
      solution: 1
    },
    { question: "5. What is the process that creates new bitcoin called?",
      answers: ["a) Finding", "b) Developing", "c) Digging", "d) Mining"],
      solution: "d) Mining"
    }
  ];

  // function questionNumber(value){
  //   return currentQuestion;
  // };
  function renderQuestion(currentQuestion){

    var innerHTML =
              '<ul class="question-list">' +
              '<ol>' +
              '<h3>'+ quiz[currentQuestion].question + '</h3>' +
              '</ol>' +
              '<button class="submit-answer">' + quiz[currentQuestion].answers[0] + '</button>' +
              '<button class="submit-answer">' + quiz[currentQuestion].answers[1] + '</button>' +
              '<button class="submit-answer">' + quiz[currentQuestion].answers[2] + '</button>' +
              '<button class="submit-answer">' + quiz[currentQuestion].answers[3] + '</ol>' +
              '</ul>';

    $('.question-box').empty();
    $('.question-box').append(innerHTML);
  };
  //check if radio button selected is correct answer and update progress bar
  var score = 0;
  function currentScore(buttonSelected){
    console.log(buttonSelected);

    if (quiz[currentQuestion].solution == buttonSelected){
      score += 1;
      var img = '<img class="correct hidden" src="images/bitcoin-correct.png" alt="correct-img"/>'
      $('.score').append(img);
    }
    else{
      var img = '<img class="wrong hidden" src="images/bitcoin-wrong.svg" alt="correct-img"/>'
      $('.score').append(img);
    };
  };

  //on submit, show next question
  $(".question-box").submit(function(event){
    event.preventDefault();
    var buttonSelected = $('.submit-answer').val();
    currentScore(buttonSelected);

    $('.question-box').hide(1000);
      $('.start-quiz').remove();
      $('.question-list').remove();
      if (currentQuestion < quiz.length - 1){
        renderQuestion(currentQuestion);
        currentQuestion += 1;
      $('.question-box').show(1000);
    }else {
      console.log("game over");
    }
  });
});
