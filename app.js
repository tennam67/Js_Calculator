const button = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = []
let accumulativeCalculation



function calculate(button){

    const value = button.textContent
 
    if (value === "CLEAR") {
 
     calculation = []
 
     screenDisplay.textContent = '.'
 
     console.log(value)
 
    } else if ( value === "="){

     screenDisplay.textContent = eval(accumulativeCalculation)

    } else {
        calculation.push (value) 
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
 
 }


button.forEach(button => button.addEventListener('click',() => calculate(button)))
 