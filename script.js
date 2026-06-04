const quiz = [
{
    question: "HTML ka full form kya hai?",
    options: [
        "Hyper Text Markup Language",
        "High Text Language",
        "Home Tool Markup Language",
        "Hyper Tool Language"
    ],
    answer: 0
},
{
    question: "CSS kisliye use hoti hai?",
    options: [
        "Styling",
        "Database",
        "Programming",
        "Network"
    ],
    answer: 0
},
{
    question: "JavaScript kya hai?",
    options: [
        "Operating System",
        "Programming Language",
        "Database",
        "Browser"
    ],
    answer: 1
}
];

let current = 0;
let score = 0;

function loadQuestion(){

    document.getElementById("question").innerHTML =
    quiz[current].question;

    document.getElementById("op1").innerHTML =
    quiz[current].options[0];

    document.getElementById("op2").innerHTML =
    quiz[current].options[1];

    document.getElementById("op3").innerHTML =
    quiz[current].options[2];

    document.getElementById("op4").innerHTML =
    quiz[current].options[3];
}

function checkAnswer(index){

    if(index === quiz[current].answer){
        score++;
    }

    current++;

    if(current < quiz.length){
        loadQuestion();
    }
    else{
        document.querySelector(".container").innerHTML =
        `<h1>Quiz Completed</h1>
         <h2>Your Score: ${score}/${quiz.length}</h2>`;
    }
}

loadQuestion();