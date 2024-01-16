const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const ques = document.getElementById("question");
ques.innerText = `What is ${num1} multiplied by ${num2}?`;

const input = document.getElementById("input");
const form = document.getElementById("form");
const scoreE = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
scoreE.innerText = `score: ${score}`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
    const userInput = +input.value;
    if(userInput === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}


