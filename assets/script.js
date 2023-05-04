localStorage.setItem("fido", "pretend this is meaningful text");
console.log(localStorage.getItem("fido"));

for (let i = 0; i < 5; i++) {
  console.log(localStorage.getItem("fido"));
}

function StartBox() {
  const start_box = document.getElementById("start_box");
  start_box.classList.add("activeInfo");
  start_box.style.opacity = 1;
  document.querySelector(".start_btn").style = "display: none";
  document.querySelector(".info").style = "display: block";
  document.querySelector(".continue_btn").style = "display: block";
  document.querySelector(".restart_btn").style = "display: block";
}

function Continue() {
  const start_box = document.getElementById("start_box");
  document.querySelector(".start_btn").style = "display: none";
  document.querySelector(".start_box").style = "display: none";
  document.querySelector(".next_btn").style = "display: block";
}

function QuizBox() {
  const quiz_box = document.getElementById("quiz_box");
  document.querySelector(".quiz_box").style = "display: block";
  quiz_box.style.opacity = 1;
}

function HideBox() {
  const start_box = document.getElementById("start_box");
  start_box.style.opacity = 0;
  document.querySelector(".start_btn").style = "display: flex";
  document.querySelector(".start_box").style = "display: block";
  document.querySelector(".quiz_box").style = "display: none";
  document.querySelector(".next_btn").style = "display: none";
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

function nextQuestion() {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  } else {
    console.log("Quiz finished!");
  }
}

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const answer_list = document.querySelector(".answer_list");
  let que_tag ="<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
  let answer_tag = '<div class="answer">' + questions[index].options[0] + "<span></span></div>" 
                + '<div class="answer">' + questions[index].options[1] + "<span></span></div>" 
                + '<div class="answer">' + questions[index].options[2] + "<span></span></div>"
                + '<div class="answer">' + questions[index].options[3] + "<span></span></div>";
  que_text.innerHTML = que_tag;
  answer_list.innerHTML = answer_tag;
  const answer = answer_list.querySelectorAll(".answer");
  for (let index = 0; index < answer.length; i++) {
    answer[i].setAttribute("onclick", "answerSelected(this");
  }
}

function optionsSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  console.log(userAns);
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuestionCountTag = "<span><p>" + que_count + "</p>of<p>" + questions.length + "</p>Questions</span>";
  bottom_ques_counter.innerHTML = totalQuestionCountTag;
}
