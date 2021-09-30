var Height = document.getElementById("height");
var Weight = document.getElementById("weight");
var calcBtn = document.getElementById("calc-btn");
var output = document.getElementById("result");

calcBtn.addEventListener("click", submitHandler);
function submitHandler()
{
    var a = Number(Height.value)
    var b = Number(Weight.value)
    console.log(Height.value);
    console.log(Weight.value);
    var answer = b / (a*a)
    answer = answer.toFixed(2);
    console.log(answer);
    output.innerText = "Your BMI is " + answer;
};
