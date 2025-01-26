let display = document.getElementById('display');
let currentInput = '';
let operator = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator && operator !== '+') {
        calculate();
    }
    operator = op;
    currentInput += ' ' + op + ' ';
}

function calculate() {
    if (!operator) return;
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    operator = null;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    display.value = '';
}
