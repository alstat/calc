window.onload = function () {
    console.log("Welcome to Calculator!")
    document.getElementById("answer").value = 0

    buttons()
}

function buttons() {
    document.getElementById("ac").addEventListener("click", ac)
    document.getElementById("percent").addEventListener("click", percent)
    document.getElementById("plus-minus").addEventListener("click", plus_minus)
    document.getElementById("six").addEventListener("click", six)
    document.getElementById("seven").addEventListener("click", seven)
    document.getElementById("eight").addEventListener("click", eight)
    document.getElementById("nine").addEventListener("click", nine)
    document.getElementById("four").addEventListener("click", four)
    document.getElementById("five").addEventListener("click", five)
    document.getElementById("six").addEventListener("click", six)
    document.getElementById("one").addEventListener("click", one)
    document.getElementById("two").addEventListener("click", two)
    document.getElementById("three").addEventListener("click", three)
    document.getElementById("zero").addEventListener("click", zero)
    document.getElementById("period").addEventListener("click", period)
}

function percent() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value) / 100;
}  

function ac() {
    document.getElementById("answer").value = "0";
}

function plus_minus() {
    var answerObj = document.getElementById("answer");
    var answer = parseFloat(answerObj.value);
    answerObj.value = -answer;
}

function seven() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "7");
}

function eight() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "8");
}

function nine() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "9");
}

// 

function four() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "4");
}

function five() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "5");
}

function six() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "6");
}

// 

function one() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "1");
}

function two() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "2");
}

function three() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "3");
}

//

function zero() {
    var answerObj = document.getElementById("answer");
    answerObj.value = parseFloat(answerObj.value + "0");
}

function period() {
    var answerObj = document.getElementById("answer");
    if (answerObj.value.includes(".")) {
    } else {
        answerObj.value = answerObj.value + ".";
    }
}

// 

function divide() {
    var answerObj = document.getElementById("answer");
    answerObj.value  = answerObj.value
}