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
  nextQuestion: document.querySelector("#next_question"),
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
      "Moore`s law originally stated that the number of transistors on a microprocessor chip would double every...",
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
      "What five letter word is the motto of the IBM Computer company?",
    correct_answer: "Think",
    answers: ["Click", "Think", "Logic", "Pixel"],
  },
  {
    titleQuestion:
      "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    correct_answer: "JavaScript",
    answers: ["C#", "Python", "PHP", "JavaScript"],
  },
  {
    titleQuestion:
      "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    answers: ["center", "static", "absolute", "relative"],
  },
  {
    titleQuestion: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    answers: [
      "Common Language Interface",
      "Control Line Interface",
      "Common Language Input",
      "Command Line Interface",
    ],
  },
  {
    titleQuestion: "Which operating system was released first",
    correct_answer: "Mac OS",
    answers: ["Mac OS", "Windows", "Linux", "OS/2"],
  },
  {
    titleQuestion: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    answers: ["2400", "1024", "1000", "1240"],
  },
  {
    titleQuestion:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    answers: [
      "Customer collaboration",
      "Individuals and interactions",
      "Comprehensive documentation",
      "Responding to change",
    ],
  },
];
const gameQuestionsSet2 = [
  {
    titleQuestion: "Who wrote Harry Potter? ",
    correct_answer: "J.K. Rowlingy",
    answers: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "Terry Pratchett",
      "Daniel Radcliffe",
    ],
  },
  {
    titleQuestion: "Which famous book is sub-titled the Modern Prometheus? ",
    correct_answer: "Frankenstein",
    answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "Frankenstei",
      "The Legend of Sleepy Hollow",
    ],
  },
  {
    titleQuestion:
      "What was the name of Captain Nemo`s submarine in `20,000 Leagues Under the Sea&quot`? ",
    correct_answer: "The Nautilus",
    answers: ["The Nautilus", "The Neptune", "The Poseidon  ", "The Atlantis"],
  },
  {
    titleQuestion: "What`s Harry Potter`s dad`s name? ",
    correct_answer: "James Potter",
    answers: [
      "Joey Potter",
      "Frank Potter",
      "James Potter",
      "Hairy Potter Sr.",
    ],
  },
  {
    titleQuestion:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer`s Stone?",
    correct_answer: "Fluffy",
    answers: ["Fluffy", "J.K. Rowling", "Terry Pratchett", "Daniel Radcliffe"],
  },
  {
    titleQuestion: "Who wrote Harry Potter? ",
    correct_answer: "J.K. Rowlingy",
    answers: ["J.R.R. Tolkien", "Spike", "Poofy", "Spot"],
  },
  {
    titleQuestion: "Which is NOT a book in the Harry Potter Series? ",
    correct_answer: "J.K. Rowlingy",
    answers: [
      "The Chamber of Secrets",
      "The Prisoner of Azkaban",
      "The Deathly Hallows",
      "The House Elf",
    ],
  },
  {
    titleQuestion: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    answers: [
      "Arthur C Clarke",
      "Arthur Conan Doyle",
      "Graham Greene",
      "H G Wells",
    ],
  },
  {
    titleQuestion: "Who wrote Harry Potter? ",
    correct_answer: "J.K. Rowlingy",
    answers: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "Terry Pratchett",
      "Daniel Radcliffe",
    ],
  },
  {
    titleQuestion:
      "In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)? ",
    correct_answer: "549 Days",
    answers: ["765 Days", "401 Days", "324 Days", "549 Days"],
  },
];
const gameQuestionsSet3 = [
  {
    titleQuestion:
      "3. What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "3 Active Directory",
    answers: [
      "3 Active Directory",
      "3 Alternative Drive",
      "3 Automated Database",
      "3 Active Department",
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
      "What five letter word is the motto of the IBM Computer company?",
    correct_answer: "Think",
    answers: ["Click", "Think", "Logic", "Pixel"],
  },
  {
    titleQuestion:
      "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    correct_answer: "JavaScript",
    answers: ["C#", "Python", "PHP", "JavaScript"],
  },
  {
    titleQuestion:
      "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    answers: ["center", "static", "absolute", "relative"],
  },
  {
    titleQuestion: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    answers: [
      "Common Language Interface",
      "Control Line Interface",
      "Common Language Input",
      "Command Line Interface",
    ],
  },
  {
    titleQuestion: "Which operating system was released first",
    correct_answer: "Mac OS",
    answers: ["Mac OS", "Windows", "Linux", "OS/2"],
  },
  {
    titleQuestion: "How many bytes are in a single Kibibyte?",
    correct_answer: "1024",
    answers: ["2400", "1024", "1000", "1240"],
  },
  {
    titleQuestion:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    answers: [
      "Customer collaboration",
      "Individuals and interactions",
      "Comprehensive documentation",
      "Responding to change",
    ],
  },
];
const gameQuestionsSet4 = [
  {
    titleQuestion: "4 Who wrote Harry Potter? ",
    correct_answer: "4 J.K. Rowlingy",
    answers: [
      "4 J.R.R. Tolkien",
      "4 J.K. Rowling",
      "4 Terry Pratchett",
      "4 Daniel Radcliffe",
    ],
  },
  {
    titleQuestion: "Which famous book is sub-titled the Modern Prometheus? ",
    correct_answer: "Frankenstein",
    answers: [
      "Dracula",
      "The Strange Case of Dr. Jekyll and Mr. Hyde ",
      "Frankenstei",
      "The Legend of Sleepy Hollow",
    ],
  },
  {
    titleQuestion:
      "What was the name of Captain Nemo`s submarine in `20,000 Leagues Under the Sea&quot`? ",
    correct_answer: "The Nautilus",
    answers: ["The Nautilus", "The Neptune", "The Poseidon  ", "The Atlantis"],
  },
  {
    titleQuestion: "What`s Harry Potter`s dad`s name? ",
    correct_answer: "James Potter",
    answers: [
      "Joey Potter",
      "Frank Potter",
      "James Potter",
      "Hairy Potter Sr.",
    ],
  },
  {
    titleQuestion:
      "What is the name of the three headed dog in Harry Potter and the Sorcerer`s Stone?",
    correct_answer: "Fluffy",
    answers: ["Fluffy", "J.K. Rowling", "Terry Pratchett", "Daniel Radcliffe"],
  },
  {
    titleQuestion: "Who wrote Harry Potter? ",
    correct_answer: "J.K. Rowlingy",
    answers: ["J.R.R. Tolkien", "Spike", "Poofy", "Spot"],
  },
  {
    titleQuestion: "Which is NOT a book in the Harry Potter Series? ",
    correct_answer: "J.K. Rowlingy",
    answers: [
      "The Chamber of Secrets",
      "The Prisoner of Azkaban",
      "The Deathly Hallows",
      "The House Elf",
    ],
  },
  {
    titleQuestion: "Which of the following authors was not born in England? ",
    correct_answer: "Arthur Conan Doyle",
    answers: [
      "Arthur C Clarke",
      "Arthur Conan Doyle",
      "Graham Greene",
      "H G Wells",
    ],
  },
  {
    titleQuestion: "Who wrote Harry Potter? ",
    correct_answer: "J.K. Rowlingy",
    answers: [
      "J.R.R. Tolkien",
      "J.K. Rowling",
      "Terry Pratchett",
      "Daniel Radcliffe",
    ],
  },
  {
    titleQuestion:
      "In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)? ",
    correct_answer: "549 Days",
    answers: ["765 Days", "401 Days", "324 Days", "549 Days"],
  },
];

//List of categories
const categories = {
  catoryAbtn: {
    title: "Computers",
    gameQuestionsSet: gameQuestionsSet,
  },
  catoryBbtn: {
    title: "Books",
    gameQuestionsSet: gameQuestionsSet2,
  },
  catoryCbtn: {
    title: "History",
    gameQuestionsSet: gameQuestionsSet3,
  },
  catoryDbtn: {
    title: "Histore_2",
    gameQuestionsSet: gameQuestionsSet4,
  },
};

//display categories name
view.catoryAbutton.innerText = categories.catoryAbtn.title;
view.catoryBbutton.innerText = categories.catoryBbtn.title;
view.catoryCbutton.innerText = categories.catoryCbtn.title;
view.catoryDbutton.innerText = categories.catoryDbtn.title;

//⭐️start game⭐️

//randomQuestion
function randomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  //console.log(questions[index]);
  return questions[index];
}
randomQuestion(gameQuestionsSet);

//initial conditions
const gameState = {
  //question's index
  index: 0,
  currentCategory: "undefined",
  currentAnswer: "",
  currentAnswerElement: undefined,
  currentAnswerCorrect: false,
  starScore: 0,
  counterAnswer: 0,
  maxQuestions: 10,
};
//category selection page
function chooseCategoriesClick(event) {
  console.log(event);
  let targetElement = event.srcElement || event.target;
  console.log(targetElement.id);
  console.log(categories[targetElement.id]);
  gameState.currentCategory = categories[targetElement.id];
  console.log(gameState.currentCategory);
  view.chooseCategory.classList.add("hidden");
  view.quiz.classList.remove("hidden");

  //hidden chooseCategory page
  view.chooseCategory.classList.add("hidden");
  //display quiz page
  view.quiz.classList.remove("hidden");
  view.nextQuestion.classList.add("hidden");
  // -------Reset game--------------------------------------------------------
  gameState.index = 0;
  gameState.currentAnswer = "";
  gameState.starScore = 0;
  gameState.counterAnswer = 1;
  gameState.maxQuestions = 10;

  view.checkAnswer.classList.remove("hidden");
  view.checkAnswer.classList.remove("wrongAnswer");
  view.checkAnswer.classList.remove("rightAnswer");
  view.nextQuestion.classList.add("hidden");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");
  displayQuiz();
}

//I can see currentsquiz and answers on webpage
function displayQuiz() {
  // view.nextQuestion.classList.remove("hidden");
  // view.checkAnswer.classList.remove("hidden");

  let index = gameState.index;
  console.log("NEXT index " + index);
  console.log(`display quiz ${index}`);
  //console.log(gameQuestionsSet[index]);
  console.log(gameState.counterAnswer);
  //gameState.index = index;
  let question = gameState.currentCategory.gameQuestionsSet[index];
  view.titleQuestion.innerText = question.titleQuestion;
  view.answer1.innerText = question.answers[0];
  view.answer2.innerText = question.answers[1];
  view.answer3.innerText = question.answers[2];
  view.answer4.innerText = question.answers[3];

  view.counterCorrectAnswer.innerText = gameState.counterAnswer;
  view.starScore.innerText = gameState.starScore;

  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");
}

function checkAnswer(event) {
  //let targetElement = event.srcElement || event.target;

  console.log(
    `CheckAnswer ${gameState.currentAnswer} <-> ${
      gameState.currentCategory.gameQuestionsSet[gameState.index].correct_answer
    } `
  );
  if (gameState.currentAnswerElement === undefined) {
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "You must select at list one answer!",
    //   footer: '<a href="">Why do I have this issue?</a>',
    // });
    var audio = new Audio("audio_file.mp3");
    audio.play();

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Could you please select one answer",
      width: 600,
      height: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
    return;
  }
  view.nextQuestion.classList.remove("hidden");
  gameState.currentAnswerElement.classList.remove("wrongAnswer");
  gameState.currentAnswerElement.classList.remove("rightAnswer");

  if (
    gameState.currentAnswer ===
    gameState.currentCategory.gameQuestionsSet[gameState.index].correct_answer
  ) {
    view.checkAnswer.classList.add("rightAnswer");
    gameState.currentAnswerElement.classList.add("rightAnswer");
    gameState.currentAnswerCorrect = true;
  } else {
    view.checkAnswer.classList.add("wrongAnswer");
    gameState.currentAnswerElement.classList.add("wrongAnswer");
    gameState.currentAnswerCorrect = false;
  }

  view.nextQuestion.classList.remove("hidden");
  view.checkAnswer.classList.add("hidden");

  console.log(gameState.counterAnswer);
}
view.checkAnswer.addEventListener("click", checkAnswer);

function nextQuestionClick(event) {
  view.checkAnswer.classList.remove("hidden");
  view.checkAnswer.classList.remove("wrongAnswer");
  view.checkAnswer.classList.remove("rightAnswer");
  view.nextQuestion.classList.add("hidden");

  view.checkAnswer.disabled = false;

  if (gameState.currentAnswerCorrect) {
    gameState.starScore += 5;
  }

  gameState.currentAnswerCorrect = false;
  gameState.currentAnswer = "";
  gameState.currentAnswerElement = undefined;
  gameState.counterAnswer += 1;
  gameState.index += 1;

  console.log("my new index " + gameState.index);
  gameState.currentQuestion =
    gameState.currentCategory.gameQuestionsSet[gameState.index];

  // randomQuestion(
  //   gameState.currentCategory.gameQuestionsSet
  // );

  view.answer1.classList.remove("wrongAnswer");
  view.answer1.classList.remove("rightAnswer");
  view.answer2.classList.remove("wrongAnswer");
  view.answer2.classList.remove("rightAnswer");
  view.answer3.classList.remove("wrongAnswer");
  view.answer3.classList.remove("rightAnswer");
  view.answer4.classList.remove("wrongAnswer");
  view.answer4.classList.remove("rightAnswer");

  // последний ли вопрос?
  if (gameState.counterAnswer === gameState.maxQuestions) {
    view.complete.classList.remove("hidden");
    view.quiz.classList.add("hidden");
    view.finishScore.innerText = gameState.starScore;
  } else {
    // НЕТ
    // view.nextQuestion.classList.remove("hidden");
    displayQuiz();
  }
}
view.nextQuestion.addEventListener("click", nextQuestionClick);

//view.nextQuestion.addEventListener("click", displayQuiz);

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

// -------Add or Remove class 'selected' on answers/change colors-----------

function chooseAnswer1Click(event) {
  console.log("chooseAnswer1Click");
  view.answer1.classList.add("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswerElement = view.answer1;
  gameState.currentAnswer = view.answer1.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer2Click(event) {
  console.log("chooseAnswer2Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.add("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswerElement = view.answer2;
  gameState.currentAnswer = view.answer2.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer3Click(event) {
  console.log("chooseAnswer3Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.add("selected");
  view.answer4.classList.remove("selected");

  gameState.currentAnswerElement = view.answer3;
  gameState.currentAnswer = view.answer3.innerText;
  console.log(gameState.currentAnswer);
}

function chooseAnswer4Click(event) {
  console.log("chooseAnswer4Click");
  view.answer1.classList.remove("selected");
  view.answer2.classList.remove("selected");
  view.answer3.classList.remove("selected");
  view.answer4.classList.add("selected");

  gameState.currentAnswerElement = view.answer4;
  gameState.currentAnswer = view.answer4.innerText;
  console.log(gameState.currentAnswer);
}
// -------------------------------------------------------------------

view.answer1.addEventListener("click", chooseAnswer1Click);
view.answer2.addEventListener("click", chooseAnswer2Click);
view.answer3.addEventListener("click", chooseAnswer3Click);
view.answer4.addEventListener("click", chooseAnswer4Click);

// displayQuiz();
