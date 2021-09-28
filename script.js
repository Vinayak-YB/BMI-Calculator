var Height = document.getElementsByClassName("inp1");
const Weight = document.querySelector("#weight");
const calculateBtn = document.getElementById("calc-btn");
const output = document.getElementById("result");

function checkBMI(){
    console.log(Height.value);
    console.log(Weight.value);
    var Bmi = getBMI(Height.value,Weight.value)
    output.innerText="Your BMI is "+ Bmi;
}
function getBMI(h,w){
    var bmi = (w / (h*h));
    return bmi;
}
calculateBtn.addEventListener("click",printval());

function printval(){
    console.log(Height.value);
    console.log(Weight.value);
    output.innerText= Height.value;
    output.innerText= Weight.value;
}