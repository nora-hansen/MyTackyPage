let res = document.getElementById('result');

function add() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let result = a + b;
    res.textContent = result;
}

function subtract() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let result = a - b;
    res.textContent = result;
}

function multiply() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let result = a * b;
    res.textContent = result;
}

function divide() {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let result = a / b;
    res.textContent = result;
}