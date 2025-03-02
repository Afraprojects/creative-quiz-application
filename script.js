const quizQuestions = [
    
        {
          "question": "What is the chemical symbol for gold?",
          "options": ["Au", "Ag", "Cu", "Fe"],
          "correctAnswer": "Au"
        },
        {
          "question": "Which planet is known as the Red Planet?",
          "options": ["Earth", "Venus", "Mars", "Jupiter"],
          "correctAnswer": "Mars"
        },
        {
          "question": "What is the capital of France?",
          "options": ["London", "Berlin", "Madrid", "Paris"],
          "correctAnswer": "Paris"
        },
        {
          "question": "Who developed the theory of relativity?",
          "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          "correctAnswer": "Albert Einstein"
        },
        {
          "question": "Which gas do plants absorb from the atmosphere?",
          "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          "correctAnswer": "Carbon Dioxide"
        },
        {
          "question": "What is the hardest natural substance on Earth?",
          "options": ["Gold", "Iron", "Diamond", "Quartz"],
          "correctAnswer": "Diamond"
        },
        {
          "question": "Which is the largest ocean on Earth?",
          "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          "correctAnswer": "Pacific Ocean"
        },
        {
          "question": "Who wrote the play 'Romeo and Juliet'?",
          "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
          "correctAnswer": "William Shakespeare"
        },
        {
          "question": "What is the smallest unit of life?",
          "options": ["Atom", "Molecule", "Cell", "Tissue"],
          "correctAnswer": "Cell"
        },
        {
          "question": "Which metal is liquid at room temperature?",
          "options": ["Gold", "Mercury", "Silver", "Lead"],
          "correctAnswer": "Mercury"
        }
      ];
      
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    
    questionText.innerHTML = currentQuestion.question;
  
    
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  

  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      
      document.getElementById("timer").textContent = timeLeft;
  
      
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  
  function endQuiz() {
    
    clearInterval(timerInterval);
  
    
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>YAHH!YOU ARE COMPLETED SUCCESSFULLY💪</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  
  document.getElementById("start-button").addEventListener("click", startQuiz);