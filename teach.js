

// operation is +
function add(x, y){
	return x + y
}

// operation is -
function subtract(x, y){
	return x - y
}

// operation is *
function multiply(x, y){
	return x * y
}

// operation /
function divide(x, y){
	return x / y
}



// the user wants to add 5 + 7
// console.log(calculate[selectedOperation](5, 7))

// the user want to multiply 6 * 6
// change selected operation
// selectedOperation = '*'
// // console.log(calculate[selectedOperation](6, 6))

// // the user wants to divide 81 by 9
// selectedOperation = '/'

// // console.log(calculate[selectedOperation](81, 9))

// // the user wants to subtract 10 from 5:
// selectedOperation = '-'

// console.log(calculate[selectedOperation](5, 10))


// Mini problem in calculator 

// lets just make sure we can listen for a click 
// and update the selectedOperation with either '+', '-', '*', '/'

const calculate = {
	'+': add,
	'-': subtract,
	'*': multiply,
	'/': divide
}

const calculatorEl = document.querySelector('.calculator');
const displayEl = document.querySelector('.display')

// at some point the user would this
let selectedOperation = ''; // '+',  '-', '*', '/', ''

// we want to grab 1 number and add it to our function call

let firstNumber = ''
let secondNumber = ''

// when we click on the an operand we want to show it inside the display div

calculatorEl.addEventListener('click', function(e){
	// console.log(e.target.className, " <-- e.target.className")
	// console.log(e.target)
	if(e.target.className === 'operand'){
		// then update our selectedOperation 
		// with whatever the user chose
		selectedOperation = e.target.innerText;

		renderCalculatorDisplay()
		// displayEl.innerText += selectedOperation;
		// console.log(selectedOperation, " selected operation was updated")
	} else if(e.target.classList.contains('equal')){
		// const answer = calculate[selectedOperation](firstNumber, 3)
		// displayEl.innerText = answer
		// console.log(`The answer is: ${answer}`)
		// the above was refactored to 
		renderAnswer()

		// 
	} else if(e.target.classList.contains('number')){
		firstNumber = parseInt(e.target.innerText)

		// displayEl.innerText += firstNumber;
		renderCalculatorDisplay()

		console.log(firstNumber, ' <- this is firstN Number')
	}
})

// typically when we have function that updates the DOM
// AKA change something on the screen we start the function 
// name with the word render

function renderCalculatorDisplay(){
	// 3 is the hard coded value we are using in the calculate function
	// in the equal if block above
	displayEl.innerText = `${firstNumber} ${selectedOperation} 3`
}

function renderAnswer(){
	displayEl.innerText = calculate[selectedOperation](firstNumber, 3)
}


// ================= IDEAS TO ADD ON ========================
// ===========================================================
// ===========================================================


// 1. Try to implement the logic to update the second number,  
//  You'll have to update secondNumber variable, 
// and you'll have to update the renderCalculatorDisplay to use that variable
// and you'll have to update the renderAnswer to use that variable

// 2. Implement the clear button
// set the display to zero
// reset your variables to the initial values

// Extra challenge would, be trying having firstNumber or SecondNumber be multiple digits

// Extra challenge maybe you want to make your function perform multiple operations at once
// 3 + 3 + 3 + n........  maybe just try that with add.
// for your functions the arguments ...args  
// https://stackoverflow.com/questions/42184674/what-is-the-meaning-of-args-three-dots-in-a-function-definition
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// ===========================================================
// ===========================================================
// ===========================================================

// select operand
// then click the = 
// run the function that is represented by the operand
// calculate[operand](3, 3)




// / THE OLD CODE BELOW ===============================

// const numbersEls = document.querySelectorAll(".number")
// const operandEls = document.querySelectorAll('.operand')
// console.log(numbersEls)


// // calculator 

// // 1 + 1 = 2

// // what the first number is
// // it needs to know operation (whether it is +, - , etc)
// // What the second number is 
// // it needs to know when we press equal in order to sum up everything

// let firstNumber;
// let operation; 
// let secondNumber;




// operandEls.forEach(operandBtn => {
// 	operandBtn.addEventListener('click', function(e){
// 		console.log(e.target.innerText)

// 		// we want to know if the user is clicking on 
// 		// +, -, /, *
// 		// and we want to know if they click equal because
// 		// then we need to run operation
// 		if(e.target.innerText === '='){
// 			// run the operation in our calculator
// 			console.log("The user is clicking =")
// 			const answer = calculate(firstNumber, secondNumber, operation)
// 			console.log(answer)
// 		} else {
// 			operation = e.target.innerText;
// 		}

// 		console.log('==================')
// 		console.log(operation, ' <---- operation')
// 		console.log('==================')
// 	})
// })


// numbersEls.forEach(numberBtn => {
// 	numberBtn.addEventListener("click", (event) => {
// 	  // This log is for testing purposes to verify we're getting the correct value
// 	//   console.log(event.target, " <--- event.target")
// 	//   console.dir(event.target)
// 	//   console.log(event.target.innerText, " <-- event.target.innerText");
// 	  // Future logic to capture the button's value goes here...
// 	  const number = event.target.innerText;
// 	  // How do we know if we should store in the firstNumber or the secondNumber?
// 	  if(firstNumber === undefined){
// 		firstNumber = parseInt(number);
// 	  } else {
// 		secondNumber = parseInt(number);
// 	  }

// 	  console.log('============================')
// 	  console.log('============================')
// 	  console.log(firstNumber, " <--- firstNumber")
// 	  console.log(secondNumber, " <--- secondNumber")
// 	  console.log('============================')
// 	  console.log('============================')

// 	});
//   });

//   function calculate(num1, num2, op) {
// 	// if the op is *, then multiply
// 	// if the op is +, then add,
// 	// if the op is -, then subtract
// 	// if the op is /, then divide

// 	if(op === '*'){
// 		return `The answer of ${num1} ${op} ${num2} = ${num1 * num2}`
// 	} else if(op === "+"){

// 		return `The answer of ${num1} ${op} ${num2} = ${num1 + num2}`
// 	} else if(op === "/"){

// 		return `The answer of ${num1} ${op} ${num2} = ${num1 / num2}`
// 	} else if(op === "-"){

// 		return `The answer of ${num1} ${op} ${num2} = ${num1 - num2}`
// 	}

// 	// returns a message that gives the answer
// }