const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false }
      ]
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Africa", correct: false },
        { text: "Arctic", correct: false },
        { text: "Australia", correct: true }
      ]
    },
    {
      question: "Which is the largest desert in the world?",
      answers: [
        { text: "Antarctica", correct: true },
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: false }
      ]
    },
    {
      question: "Which is the capital of Pakistan?",
      answers: [
        { text: "Karachi", correct: false },
        { text: "Moscow", correct: false },
        { text: "Islamabad", correct: true },
        { text: "Peshawar", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => {
        selectAnswer(answer.correct);
      });
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(correct) {
    if (correct) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      // Quiz has ended, show the score or take any other desired action
      alert("Quiz ended! Your score: " + score);
    } else {
      showQuestion();
    }
  }
  
  nextButton.addEventListener("click", nextQuestion);
  
  startQuiz();
  