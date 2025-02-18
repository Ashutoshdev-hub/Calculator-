function result(number){
    let CalResult  = document.getElementById('result');
    CalResult.value += number;
}
function operator(operator){
    let CalOperator  = document.getElementById('result');
    CalOperator.value += ' ' + operator + ' ';
}
function calculateResult() {
    const resultField = document.getElementById('result');
    resultField.value = eval(resultField.value);
}

function clearResult() {
    document.getElementById('result').value = '';
}
