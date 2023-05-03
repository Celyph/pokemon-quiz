localStorage.setItem("fido", "pretend this is meaningful text")
console.log(localStorage.getItem("fido"))

for (let i = 0; i < 5; i++) {
    console.log(localStorage.getItem("fido"))  
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

function Continue(){
    const start_box = document.getElementById("start_box");
       document.querySelector(".start_btn").style = "display: none"; 
       document.querySelector(".start_box").style = "display: none"; 
       document.querySelector(".next_btn").style = "display: block";
}

function QuizBox(){
    const quiz_box = document.getElementById("quiz_box");
       document.querySelector(".quiz_box").style = "display: block"; 

       quiz_box.style.opacity = 1;
}

function HideBox(){
   const start_box = document.getElementById("start_box");
    start_box.style.opacity = 0;
       document.querySelector(".start_btn").style = "display: flex"; 
       document.querySelector(".start_box").style = "display: block"; 
       document.querySelector(".quiz_box").style = "display: none";
       document.querySelector(".next_btn").style = "display: none";
}
