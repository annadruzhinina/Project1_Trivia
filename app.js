//https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

//Get access to elements
const view = {
  //🍄 quiz top
  counterCorrectAnswer: document.getElementById("counterCorrectAnswer"),
  totalQuestion: document.getElementById("total-question"),
  titleQuestion: document.getElementById("question"),
  maxQuestions: document.getSelection(".total-question"),
  starScore: document.querySelector(".stars-score"),

  //🍄 buttons
  checkAnswer: document.getElementById("check_answer"),
  playAgain: document.querySelector("#play-again"),
  startNewGameBtn: document.querySelector(".startNewGameBtn"),

  catoryAbutton: document.querySelector("#catoryAbtn"),
  catoryBbutton: document.querySelector("#catoryBbtn"),
  catoryCbutton: document.querySelector("#catoryCbtn"),
  catoryDbutton: document.querySelector("#catoryDbtn"),

  //🍄 Answers
  answer1: document.getElementById("answer1"),
  answer2: document.getElementById("answer2"),
  answer3: document.getElementById("answer3"),
  answer4: document.getElementById("answer4"),

  //screens
  complete: document.querySelector("#complete"),
  quiz: document.querySelector("#quiz"),
  chooseCategory: document.querySelector("#chooseCategory"),

  //final score
  finishScore: document.querySelector(".finishScore"),
};

//List of questions
const gameQuestionsSet = [
  {
    titleQuestion:
      "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    answers: [
      "Active Directory",
      "Alternative Drive",
      "Automated Database",
      "Active Department",
    ],
  },
  {
    titleQuestion:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    answers: ["Four Years", "Two Years", "Eight Years", "Year"],
  },
  {
    titleQuestion:
      "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Motherboard",
      "Graphics Processing Unit",
    ],
  },
  {
    titleQuestion:
      "NewOn which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Motherboard",
      "Graphics Processing Unit",
    ],
  },
];
const gameQuestionsSet2 = [
  {
    titleQuestion:
      "2What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "2Active Directory",
    answers: [
      "2Active Directory",
      "2Alternative Drive",
      "2Automated Database",
      "2Active Department",
    ],
  },
  {
    titleQuestion:
      "2Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "2Year",
    answers: ["2Four Years", "2Two Years", "2Eight Years", "2Year"],
  },
  {
    titleQuestion:
      "2On which computer hardware device is the BIOS chip located?",
    correct_answer: "2Motherboard",
    answers: [
      "2ard Disk Drive",
      "2Central Processing Unit",
      "2Motherboard",
      "2Graphics Processing Unit",
    ],
  },
  {
    titleQuestion:
      "2_On which computer hardware device is the BIOS chip located?",
    correct_answer: "2Motherboard",
    answers: [
      "2Hard Disk Drive",
      "2Central Processing Unit",
      "2Motherboard",
      "2Graphics Processing Unit",
    ],
  },
];

const categories = {
  catoryAbtn: {
    title: "History",
    gameQuestionsSet: gameQuestionsSet,
  },
  catoryBbtn: {
    title: "2History",
    gameQuestionsSet: gameQuestionsSet2,
  },
  catoryCbtn: {
    title: "3History",
    gameQuestionsSet: gameQuestionsSet,
  },
  catoryDbtn: {
    title: "4History",
    gameQuestionsSet: gameQuestionsSet,
  },
};

const gamePickCategory = "pick_category";
const gameFinished = "finished";
const gameInProgress = "in_progress";

//Start game
function randomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  //console.log(questions[index]);
  return questions[index];
}

randomQuestion(gameQuestionsSet);

const gameState = {
  //infdex of question
  index: 0,
  currentCategory: categories.catoryAbtn,
  currentAnswer: "",
  starScore: 0,
  counterCorrectAnswer: 0,
  status: gameInProgress,
  maxQuestions: 4,
};

//I can see currentsquiz and answers on webpage
function displayQuiz() {
  let index = gameState.index;
  console.log("NEXT index " + index);
  console.log(`display quiz ${index}`);
  //console.log(gameQuestionsSet[index]);
  console.log(gameState.counterCorrectAnswer);
  //gameState.index = index;
  let question = gameState.currentCategory.gameQuestionsSet[index];
  view.titleQuestion.innerText = question.titleQuestion;
  view.answer1.innerText = question.answers[0];
  view.answer2.innerText = question.answers[1];
  view.answer3.innerText = question.answers[2];
  view.answer4.innerText = question.answers[3];

  view.counterCorrectAnswer.innerText = gameState.counterCorrectAnswer;
  view.starScore.innerText = gameState.starScore;

  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");
}

function checkAnswer(event) {
  //let targetElement = event.srcElement || event.target;

  if (
    gameState.currentAnswer ===
    gameState.currentCategory.gameQuestionsSet[gameState.index].correct_answer
  ) {
    console.log("CheckAnswer");
    gameState.counterCorrectAnswer += 1;
    gameState.starScore += 5;
    gameState.index += 1;
    console.log("my new index " + gameState.index);
    gameState.currentQuestion = randomQuestion(
      gameState.currentCategory.gameQuestionsSet
    );

    //console.log(gameState.currentQuestion);
    //displayQuiz();
  } else {
    gameState.counterCorrectAnswer += 1;
    gameState.starScore += 0;
    gameState.index += 1;
    gameState.currentQuestion = randomQuestion(
      gameState.currentCategory.gameQuestionsSet
    );
  }
  if (gameState.counterCorrectAnswer === gameState.maxQuestions) {
    view.complete.classList.remove("hidden");
    view.quiz.classList.add("hidden");
    view.finishScore.innerText = gameState.starScore;
  } else {
    displayQuiz();
  }

  console.log(gameState.counterCorrectAnswer);
}
view.checkAnswer.addEventListener("click", checkAnswer);

// -------Start New Game----------------------------------------------------
view.startNewGameBtn.addEventListener("click", StartNewGame);
function StartNewGame(event) {
  view.complete.classList.add("hidden");
  view.chooseCategory.classList.remove("hidden");
}

// -------Choose Category---------------------------------------------------
view.catoryAbutton.addEventListener("click", chooseCategoriesClick);
view.catoryBbutton.addEventListener("click", chooseCategoriesClick);
view.catoryCbutton.addEventListener("click", chooseCategoriesClick);
view.catoryDbutton.addEventListener("click", chooseCategoriesClick);

function chooseCategoriesClick(event) {
  console.log(event);
  let targetElement = event.srcElement || event.target;
  console.log(targetElement.id);
  console.log(categories[targetElement.id]);
  gameState.currentCategory = categories[targetElement.id];
  console.log(gameState.currentCategory);
  view.chooseCategory.classList.add("hidden");
  view.quiz.classList.remove("hidden");

  // -------Reset game--------------------------------------------------------
  gameState.index = 0;
  gameState.currentAnswer = "";
  gameState.starScore = 0;
  gameState.counterCorrectAnswer = 0;
  gameState.maxQuestions = 4;
  displayQuiz();
}

// -------Add or Remove class 'selected' on answers/change colors-----------

function chooseAnswer1Click(event) {
  console.log("chooseAnswer1Click");
  view.answer1.classList.add("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer1.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer2Click(event) {
  console.log("chooseAnswer2Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.add("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer2.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer3Click(event) {
  console.log("chooseAnswer3Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.add("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswer = view.answer3.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer4Click(event) {
  console.log("chooseAnswer4Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.add("selected");

  gameState.currentAnswer = view.answer4.innerText;
  console.log(gameState.currentAnswer);
}
// -------------------------------------------------------------------

view.answer1.addEventListener("click", chooseAnswer1Click);
view.answer2.addEventListener("click", chooseAnswer2Click);
view.answer3.addEventListener("click", chooseAnswer3Click);
view.answer4.addEventListener("click", chooseAnswer4Click);

displayQuiz();
