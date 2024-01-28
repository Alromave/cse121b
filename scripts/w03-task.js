/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    
return number1 + number2;
} 
function addNumbers(){
    let add1 = parseFloat(document.getElementById("add1").value);
    let add2 = parseFloat(document.getElementById("add2").value);
    let sum = add (add1, add2);
    document.getElementById("sum").value = sum;
    
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);







/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;

}
const subtractNumbers = function() {
    let subtract1 = parseFloat(document.getElementById("subtract1").value);
    let subtract2 = parseFloat(document.getElementById("subtract2").value);
    let difference = subtract (subtract1, subtract2);
    document.getElementById("difference").value = difference;   

    

}  
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply  = (number1, number2) => number1 * number2;
const multiplyNumbers = () =>{
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = multiply (factor1, factor2);
    document.getElementById("product").value = product;
    }

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2
}
const divideNumbers = () =>{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide (dividend, divisor);
    document.getElementById("quotient").value = quotient;
    

}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
function getTotal(){

let subtotal = parseFloat(document. getElementById("subtotal").value);
if (document.getElementById("member").checked) {
    subtotal = subtotal - subtotal * 0.15;
         
    }

    document.getElementById("total").textContent = subtotal.toFixed(2);
}
document.getElementById("getTotal").addEventListener("click",getTotal);




/* ARRAY METHODS - Functional Programming */

/* 1. 2 Output Source Array */
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
let arrayElement = document.getElementById("array");
arrayElement.innerHTML = numbersArray.join(", ");


/* 3. Output Odds Only Array */
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
let oddsElement = document.getElementById("odds");
oddsElement.innerHTML = oddNumbers.join(", ");

/* 4. Output Evens Only Array */
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
let evensElement = document.getElementById("evens");
evensElement.innerHTML = evenNumbers.join(", ");

/* 5. Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sum;

/* 6. Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(element => element * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(", ");

/*7.  Output Sum of Multiplied by 2 Array */
const multiplArray = numbersArray.map(element => element * 2);
const sumOfMultiplied = multiplArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
