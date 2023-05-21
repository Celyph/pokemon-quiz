const quiz_box = document.getElementById("quiz_box");
const result_box = document.querySelector(".result_box");
const next_btn = quiz_box.querySelector(".next_btn");
let time = 15;

function StartBox() {
  const start_box = document.getElementById("start_box");
  start_box.style.opacity = 1;
  document.querySelector(".start_btn").style = "display: none";
  document.querySelector(".info").style = "display: block";
  document.querySelector(".continue_btn").style = "display: block";
}

function Continue() {
  const start_box = document.getElementById("start_box");
  document.querySelector(".start_btn").style = "display: none";
  document.querySelector(".start_box").style = "display: none";
  document.querySelector(".continue_btn").style = "display: none";
  document.querySelector(".next_btn").style = "display: none";

  let timer = setInterval(myTimer, 1000);
  function myTimer() {
    const d = document.querySelector(".timer_time");
    d.innerHTML = time
    time--
    if (time < 0){
      clearInterval(timer)
    }
  }
}

function QuizBox() {
  document.querySelector(".quiz_box").style = "display: block";
  quiz_box.style.display = "block";
}

function HideBox() {
  const start_box = document.getElementById("start_box");
  start_box.style.opacity = 0;
  document.querySelector(".start_btn").style = "display: flex";
  document.querySelector(".start_box").style = "display: block";
  document.querySelector(".quiz_box").style = "display: none";
  document.querySelector(".next_btn").style = "display: none";
}

function showResultBox() {
  result_box.style.opacity = 1;
  document.querySelector(".start_btn").style = "display: none";
  document.querySelector(".start_box").style = "display: none";
  document.querySelector(".quiz_box").style = "display: none";
  document.querySelector(".next_btn").style = "display: none";
  const scoreText = result_box.querySelector(".score");
  if(userScore > 3){
      let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> questions correct. Good job!</span>';
      scoreText.innerHTML = scoreTag;
      }

else if(userScore > 1){
    let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> questions correct. Nice!</span>';
    scoreText.innerHTML = scoreTag;
    }

else{
    let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> questions correct. DO BETTER! I BELIEVED IN YOU!</span>';
    scoreText.innerHTML = scoreTag;
    }
}
  
let que_count = 0;
let que_numb = 1;
let userScore = 0;



function nextQuestion() {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
  } else {
    console.log("Quiz finished!");
    showResultBox();
    localStorage.setItem("scores", userScore)

  }
  next_btn.style.display = "none"
}

const answer_list = document.querySelector(".answer_list");


function showQuestions(index) {
  const que_text = document.querySelector(".que_text");

  let que_tag = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
  let answer_tag ='<button class="answer ans1">' + questions[index].options[0] + "<span></span></button>" 
                + '<button class="answer ans2">' + questions[index].options[1] + "<span></span></button>" 
                + '<button class="answer ans3">' + questions[index].options[2] + "<span></span></button>"
                + '<button class="answer ans4">' + questions[index].options[3] + "<span></span></button>";
  que_text.innerHTML = que_tag;
  answer_list.innerHTML = answer_tag;
  const answer = document.querySelectorAll(".answer");
  for (let i = 0; i < answer.length; i++) {
    answer[i].setAttribute("onclick", "answerSelected(this)");
  }
}

let tickIcon = '<div class="correct"><i class="fa-solid fa-check" style="color: #007D11; font-size: 17px;"></i></div>';
let crossIcon = '<div class="wrong"><i class="fa-solid fa-xmark" style="color: #c70000"></i></div>';

function answerSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allAnswers = answer_list.children.length;

  if(userAns == correctAns){
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  }
  else{
    time-=2
    answer.classList.add("wrong");
    console.log("wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon)

    for (let i = 0; i < allAnswers; i++) {
      if(answer_list.children[i].textContent == correctAns){
        answer_list.children[i].setAttribute("class", "answer correct");
        answer_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }
  next_btn.style.display = "block";
}

function queCounter(que_count) {
  const bottom_ques_count = quiz_box.querySelector(".total_que");
  let totalQuestionCountTag = '<span><p>' + que_count + '</p>of<p>' + questions.length + '</p>Questions</span>';
  bottom_ques_count.innerHTML = totalQuestionCountTag;
}
