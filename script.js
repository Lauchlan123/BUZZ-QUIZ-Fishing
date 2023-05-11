let startQuiz = document.querySelector(".startQuiz");
let titlePage = document.querySelector(".titlePage");
let questions = document.querySelector(".questions");
let quest1 = document.querySelector(".quest1");
let quest2 = document.querySelector(".quest2");
let confirm = document.querySelector(".confirm");
let confirm2 = document.querySelector(".confirm2");
let pageResponse = document.querySelector(".pageResponse");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");

startQuiz.onclick = function() {
    titlePage.style.display = "none";
    questions.style.display = "block";
};

confirm.onclick = function() {

};

confirm2.onclick = function() {
    let input = document.querySelector(".input1").value;
    console.log(input);
    let inputNumber = Number(input);
    console.log(inputNumber);
    let input2 = document.querySelector(".input2").value;
    console.log(input2);
    if (inputNumber < 0) {
        pageResponse.style.display = "block";
        pageResponse.innerHTML = "Positive values only";
    } else if (inputNumber < 10 && input2 === "try many things") {
        pageResponse.style.display = "none";
        questions.style.display = "none";
        result2.style.display = "block";
    } else if (inputNumber < 10 && input2 === "one thing and stick to it") {
        pageResponse.style.display = "none";
        questions.style.display = "none";
        result1.style.display = "block";
    } else if (inputNumber >= 10 && input2 === "try many things") {
        pageResponse.style.display = "none";
        questions.style.display = "none";
        result3.style.display = "block";
    } else if (inputNumber >= 10 && input2 === "one thing and stick to it") {
        pageResponse.style.display = "none";
        questions.style.display = "none";
        result4.style.display = "block";
    } else {
        pageResponse.style.display = "block";
        pageResponse.innerHTML = "Retry";
    }
};