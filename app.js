$(document).ready(function(event){

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
      solution: "a) Satoshi"
    },
    { question: "4. What is the bitcoin blockchain?",
      answers: ["a) A rectangular chain", "b) A public ledger", "c) A private ledger", "d) A marketplace"],
      solution: "b) A public ledger"
    },
    { question: "5. What is the process that creates new bitcoin called?",
      answers: ["a) Finding", "b) Developing", "c) Digging", "d) Mining"],
      solution: "d) Mining"
    }
  ];

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
              '</ul>' +
              '<h6>'+ (currentQuestion + 1) + '/' + quiz.length + '</h6>';

    $('.question-box').empty();
    $('.question-box').append(innerHTML);
  };

  //check if radio button selected is correct answer and update progress bar
  var score = 0;
  function currentScore(buttonSelected){
    if (quiz[currentQuestion].solution == buttonSelected){
      score += 1;
      var img = '<img class="correct score" src="images/bitcoin-correct.png" alt="correct-img"/>'
      $('.score').append(img);
    }
    else{
      var img = '<img class="wrong score" src="images/bitcoin-wrong.svg" alt="correct-img"/>'
      var wrong = '<h5 class="text">Wrong! the Correct answer is ' + quiz[currentQuestion].solution + '<h5>';
      $('.score').append(img);
      $('.score').append(wrong);
      $('h5').delay(2000).hide('.text');
    };
  };

  //begin quiz
  $('.start-quiz').on('click', '.start-button', function(){
    $('.question-box').hide(10);
    $('.question-box').show(1500);
    $('.start-quiz').remove();
    renderQuestion(currentQuestion);
  });
  //on submit, show next question
  $(document).on('click', '.submit-answer', function(event){
    event.preventDefault();
    $('.question-box').css({'margin-top': '0px'});
    var buttonSelected = $(this).text();
    currentScore(buttonSelected);
    $('.question-box').hide(10);
      $('.question-list').remove();
      if (currentQuestion < quiz.length - 1){
        currentQuestion += 1;
        renderQuestion(currentQuestion);
      $('.question-box').show(1500);
    }else {
      //render results page
      $('.question-box').empty();
      var results = '<h1>Results</h1>' + score + '/' + quiz.length + ' correct.'
      $('.question-box').append(results);
      // display youtube video
      var embedYoutube = '<br><iframe width="560" height="315" src="https://www.youtube.com/embed/Gc2en3nHxA4" frameborder="0" allowfullscreen></iframe>'
      $('.container').append(embedYoutube);
      $('form').show(1500);
    };
  });

  //handle answers page
  $(document).on('click', '.answers', function(){
    $('.question-box').empty();
    var answers = '<br>' +
      quiz[0].question + '<br>' + quiz[0].solution + '<br><br>' +
      quiz[1].question + '<br>' + quiz[1].solution + '<br><br>' + quiz[2].question + '<br>' + quiz[2].solution + '<br><br>' + quiz[3].question + '<br>' + quiz[3].solution + '<br><br>' + quiz[4].question + '<br>' + quiz[4].solution + '<br><br>';
    $('.question-box').append(answers);
  });
});
