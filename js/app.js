const questions = [
  {
    id: 1,
    title: "سازنده جاوا اسکریپت کیست؟",
    options: ["استیو جابز", "برندان ایچ", "ایلان ماسک"],
    answer: "برندان ایچ",
  },
  {
    id: 2,
    title: "کتاب Clean Code از کیست؟",
    options: ["آنکل باب (رابرت مارتین)", "استیو جابز", "برندان ایچ"],
    answer: "آنکل باب (رابرت مارتین)",
  },
  {
    id: 3,
    title: "جاوا اسکریپت در چه سالی ساخته شد؟",
    options: ["1995", "1997", "2000"],
    answer: "1995",
  },
  {
    id: 4,
    title: "فامیلای مادری خوبن یا پدری؟",
    options: ["پدری", "مادری", "هر دو"],
    answer: "مادری",
  },
  {
    id: 5,
    title: "ری‌اکت کتابخونه کدوم زبان هست؟",
    options: ["پایتون", "جاوا", "جاوا اسکریپت"],
    answer: "جاوا اسکریپت",
  },
];
const questionTitle = document.querySelector(".question");
const questionsOptionsContainer = document.querySelector(".questions");
const currentQuestionElem = document.querySelector(".current");
const totalQuestionsElem = document.querySelector(".total");
const nextQuestionsBtn = document.querySelector(".next");
const resultButton = document.querySelector(".result-button");
const modal = document.querySelector(".modal-screen");
const finalResultText = document.querySelector(".final-result");
const resultStatus = document.querySelector(".result");
const closeModalBtn = document.querySelector('.close')
const resetApp = document.querySelector('.continue')
const closeModalX = document.querySelector('.close-x')
let currentQuestionIndex = 0;
let score = 0;
function showQuestion() {

  const questionsObj = questions[currentQuestionIndex]
  const questionOptions = questionsObj.options
  questionTitle.innerHTML = questionsObj.title
  questionsOptionsContainer.innerHTML = ''


  questionOptions.forEach(function (items) {
    currentQuestionElem.innerHTML = currentQuestionIndex + 1
    const randomId = Math.floor(Math.random() * 100)

    questionsOptionsContainer.insertAdjacentHTML('beforeend',

      ` 
      <article class="quest option">
         <input type="radio" name="questbox" id="quest-${randomId}">
         <label for="quest-${randomId}" class="answer-title"> ${items} </label>
      </article>
      `
    )
  })

  setActiveOnOption()

}
function setActiveOnOption() {
  const options = document.querySelectorAll('.option')


  options.forEach(function (items) {
    items.addEventListener('click', function (event) {

      const selectedOption = document.querySelector('.selected')

      if (selectedOption) {
        selectedOption.classList.remove('selected')
      }

      items.classList.add("selected");
    })
  })
}
function checkAnswer() {
  const checkedAnswer = questions[currentQuestionIndex].answer;
  const selectedItem = document.querySelector('.selected')
  const correctAnswer = selectedItem.querySelector('.answer-title').innerHTML.trim()

  if (correctAnswer == checkedAnswer) {
    score += 1
  }
}
function showResult() {

  const checkedAnswer = questions[4].answer;
  const selectedItem = document.querySelector('.selected')
  const correctAnswer = selectedItem.querySelector('.answer-title').innerHTML.trim()


  if (correctAnswer == checkedAnswer) {
    score += 1
  }




  modal.classList.remove('hidden')
  finalResultText.innerHTML = ` شما تونستید ${score} پاسخ صحیح ${questions.length} از سوال بدید. `

  let scoreResult = document.querySelector('.answered-questions')

  if (score < 3) {
    resultStatus.classList.remove('good')
    resultStatus.classList.add('bad')
    resultStatus.innerHTML = 'بد'
  }
  else {
    resultStatus.classList.remove('bad')
    resultStatus.classList.add('good')
    resultStatus.innerHTML = 'خوب'
  }
}
function closeModal() {
  modal.classList.add('hidden')
}
nextQuestionsBtn.addEventListener("click", function () {
  checkAnswer();
  currentQuestionIndex++;

  if (currentQuestionIndex === 4) {
    nextQuestionsBtn.style.display = "none";
    resultButton.classList.remove("hidden");
  }

  showQuestion();
});
resultButton.addEventListener('click', showResult)
closeModalBtn.addEventListener('click', closeModal)
closeModalX.addEventListener('click', closeModal)
resetApp.addEventListener('click', function () {
  history.go(0)
})
