const calculatorScreen = document.getElementById('calculator-screen');
let resultDisplay = false

function display(input) {
    if (resultDisplay) { /* resets the screen after one calculation to start another if the key pressed is a number */
        if (!isNaN(input)) {
            calculatorScreen.textContent = ''
            calculatorScreen.textContent += input
        } else {
            calculatorScreen.textContent += input
        }
        resultDisplay = false
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
