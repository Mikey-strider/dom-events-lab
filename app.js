



// operation is +
function add(a, b){
  return a + b;
}
// operation is -
function subtract(a, b){
  return a - b;
}
// operation is *
function multiply(a, b){
  return a * b;
}
// operation is /
function divide(a, b){
  return a / b;
}

const calculate = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
}



const calculatorEle = document.querySelector('.calculator')
const displayEle = document.querySelector('.display');
const clearEle = document.querySelector('.clear');
console.log(clearEle)

// at some point the user would update this
let selectedOperation = ''; // '+', '-', '*', '/'
let firstNumber = '';
let secondNumber = '';

document.addEventListener('keypress', (event) => {
  if('/*-+'.includes(event.key)){
    console.log('operand press')
    selectedOperation = event.key;
    renderCalculatorDisplay()
  } else if ('=Enter'.includes(event.key)){
    console.log('equal press')
    renderAnswer()
   
  } else if ('0123456789'.includes(event.key)){
    console.log('number press')
    if(firstNumber === ''){
      firstNumber = parseInt(event.key)
    } else {
      secondNumber = parseInt(event.key)
    }
    renderCalculatorDisplay()
  } else if ('c'.includes(event.key)){
    console.log("clear press")
    firstNumber = '';
    secondNumber = '';
    selectedOperation = '';
    renderCalculatorDisplay();
  }
})




// Mini problem in calculator
// lets just make sure we can listen for a click and update the selectedOperation with either + - * /



console.log(calculatorEle, "<---- calculatorEle")
calculatorEle.addEventListener('click', (event) => {
  if(checkButtonClassType(event.target, 'operand')){
    // then update our selectedOperation
    // with whatever the user chose
    selectedOperation = event.target.innerText;
    renderCalculatorDisplay()

  } else if (checkButtonClassType(event.target, 'number')){

    if(firstNumber === ''){
      firstNumber = parseInt(event.target.innerText)
    } else {
      secondNumber = parseInt(event.target.innerText)
    }
    
    renderCalculatorDisplay()
     
  } else if (checkButtonClassType(event.target, 'equal')){

    renderAnswer()

  } else if (checkButtonClassType(event.target, 'clear')){

    firstNumber = '';
    secondNumber = '';
    selectedOperation = '';
    renderCalculatorDisplay();
  }
})

// typically when we have a function that updates the document aka Change something on the screen
// name with the word render

function checkButtonClassType(btn, className){
  return btn.classList.contains(className)
}
 function renderCalculatorDisplay(){
  displayEle.innerText = `${firstNumber} ${selectedOperation} ${secondNumber}`
 }
 function renderAnswer(){
  displayEle.innerText = calculate[selectedOperation](firstNumber, secondNumber)
 }


// select operand

// thenk click the =
// run the function that is represented by the operand
// calculate[operand](3, 3)


// We want to gra 12 number and add it to our function call

// when we click on an operand we want it to show on the little calc screen


// 1. try to implement the logic to incorporate the second number
// you'll have to update the secondNumber Variables
// and you'll have to update tjhe renderCalculatorDisplay
// and update  the renderAnswer

// 2. implment the clear button
// set the display to zero
// reset your variables to the inital values

// extra challenge would be having firstNumber and secondNumber be multipl digits

























// The old code below=====================

// /*-------------------------------- Constants --------------------------------*/
// const numberEles = document.querySelectorAll('.number');
// const operandEles = document.querySelectorAll('.operand');
// const clearEles = document.querySelectorAll('.clear');

// console.log(clearEles);
// /*-------------------------------- Variables --------------------------------*/
// let firstNumber;
// let operation;
// let secondNumber;
// /*------------------------ Cached Element References ------------------------*/

// /*----------------------------- Event Listeners -----------------------------*/
// function calculate (num1, num2, op){
//    if(op === '+'){
//     return `The answer is ${num1} ${op} ${num2} = ${num1 + num2}`; 
//    } else if (op === '-'){
//     return `The answer is ${num1} ${op} ${num2} = ${num1 - num2}`;
//    }else if (op === '*'){
//     return `The answer is ${num1} ${op} ${num2} = ${num1 * num2}`;
//    } else {
//     return `The answer is ${num1} ${op} ${num2} = ${num1 / num2}`;
//    }
// }



// clearEles.forEach(clearBtn => {
//   clearBtn.addEventListener('click', (event) => {
//     console.log(event.target.innerText)
//   })
// })

// operandEles.forEach(operandBtn => {
//   operandBtn.addEventListener('click', (event) => {
//     console.log(event.target.innerText)

//     /*
//     We want to know if the user is clicking on 
//     /, *, -, +
//     and we want to know if they click the equals sign
//     So we know if we need to run the operation
//     */
//    if(event.target.innerText === '='){
//     const answer = calculate(firstNumber, secondNumber, operation);
//     console.log(answer)
//    } else {
//     operation = event.target.innerText;
//    }
//    console.log(operation)
//   })
// })

// numberEles.forEach(numberBtn => {
//   numberBtn.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // console.log(event.target.innerText);
//     // // Future logic to capture the button's value goes here...
//     // firstNumber = event.target.innerText;

//     const number = event.target.innerText;
//     if(firstNumber === undefined){
//       firstNumber = parseInt(number);
//     } else {
//       secondNumber = parseInt(number);
//     }
// // console.log('================')
// // console.log('================')
// console.log(firstNumber)
// console.log(secondNumber)
// // console.log('================')
// // console.log('================')

//   });
// });

// /*-------------------------------- Functions --------------------------------*/



// // 1 + 1 = 2
// // What is the first number?
// // It needs to know operation (whether it is +, -, *, /, etc)
// // Wht is the second number?
// // It needs to know when we poress equal in order to run the operation and output the data.