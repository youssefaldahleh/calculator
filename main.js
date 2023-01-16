const screen =document.querySelector(".calculator-screen");
const btn = document.querySelector(".calculator-keys")
const number =document.querySelectorAll(".number");
const operator =document.querySelectorAll(".operator")
const allClear =document.querySelector(".all-clear")
const decimal =document.querySelector(".decimal")
const equal =document.querySelector(".equal-sign operator")

let haveDot = false 
const calculator = {
    display : '0',
    number1 :null,
    number2 : false,
    operator : null,
}
function clearCalc(){
    calculator.display = '0'
    calculator.number1 = null
    calculator.number2 = false
    calculator.operator = null
}
function updateDisplay(){
    let display = screen
    display.value = calculator.display
}
updateDisplay()

function inputNumber(num){
    let {display,number2} = calculator;
    // let display = calculator.display;
    // let number2 = calculator.number2;
    

    if (number2 === true) {
        calculator.display = num
        calculator.number2 = false
    }else{
        calculator.display = display ==='0'? num : display + num
    }

}
function inputDecimal(dot){
if (!calculator.display.includes(dot)) {
    calculator.display += dot
}

}
function handelOperator(nextOperator){
let {number1,display,operator}= calculator
let inputValue = parseFloat(display)
if(operator && calculator.number2){
calculator.operator = nextOperator
return
}
if (number1 === null && !isNaN(inputValue)) {
    calculator.number1 = inputValue
}else if(operator){
    let result = math(number1 , inputValue ,operator)
    calculator.display = String(result)
    calculator.number1  =result
}
calculator.number2 = true
calculator.operator  = nextOperator
    calculator.number1 = inputValue
 
}
function math (number1,second,operator){
    if (operator === '+') {
        return number1 + second
    }else if(operator === '-'){
        return number1 - second
    }else if(operator === '*'){
        return number1 * second
    }else if(operator === '/'){
        return number1 / second
    }
    return second
}

btn.addEventListener('click',(e)=>{

if (!e.target.matches('button')) {
    return
}
if (e.target.classList.contains('operator')) {
    handelOperator(e.target.value)
    updateDisplay()
    return
}
if (e.target.classList.contains('decimal')) {
    inputDecimal(e.target.value)
    updateDisplay()
    return
}
if (e.target.classList.contains('all-clear')) {
  
    clearCalc()
    updateDisplay()
    return
}
   inputNumber(e.target.value)
   updateDisplay()

})



