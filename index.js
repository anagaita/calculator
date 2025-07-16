
const calculatorScreen = document.getElementById('calculator-screen');
const number = document.querySelector('.number')
let resultDisplay = false

function display(input) {
    if (resultDisplay === true && input === number) { /* resets the screen after one calculation to start another if the key pressed is a number */
        calculatorScreen.textContent = ''
        resultDisplay = false
        calculatorScreen.textContent += input
    } else {
        calculatorScreen.textContent += input
    }
}

function reset() {
    calculatorScreen.textContent = ''
}

function result() {
    try{
        calculatorScreen.textContent = eval(calculatorScreen.textContent)
    }
    catch(error) {
        calculatorScreen.textContent = 'Error'
    }
    resultDisplay = true
}
