const quiz_box = document.getElementById("quiz_box");
let time = 15;

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

const answer_list = document.querySelector(".answer_list");
 answer_list.addEventListener("click", function(event) {
  const element = event.target;
  console.log("kachow")
  if (element.matches(".answer")) {
    console.log("button worked")
  }
}); 

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");

  let que_tag = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
  let answer_tag ='<button class="answer ans1">' + questions[index].options[0] + "<span></span></button>" 
                + '<button class="answer ans2">' + questions[index].options[1] + "<span></span></button>" 
                + '<button class="answer ans3">' + questions[index].options[2] + "<span></span></button>"
                + '<button class="answer ans4">' + questions[index].options[3] + "<span></span></button>";
              //  let answerBtns = document.querySelectorAll(".answer")
              //  for (let i = 0; i < answerBtns.length; i++) {
              //   answerBtns[i].addEventListener("click", console.log(this))
                
              //  }
  que_text.innerHTML = que_tag;
  answer_list.innerHTML = answer_tag;
  const answer = document.querySelectorAll(".answer");
  // for (let index = 0; index < answer.length; index++) {
  //   answer[index].setAttribute("onclick", "answerSelected(this)");
  // }
}

function answerSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  console.log(answer);

  if(userAns == correctAns){
    answer.classList.add("correct")
    console.log("correct")

  }

  else{
    time-=2
    answer.classList.add("wrong")
  }
}

function queCounter(que_count) {
  const bottom_ques_count = quiz_box.querySelector(".total_que");
  let totalQuestionCountTag = '<span><p>' + que_count + '</p>of<p>' + questions.length + '</p>Questions</span>';
  bottom_ques_count.innerHTML = totalQuestionCountTag;
}




