

function checkNum() {
    var divisor = document.querySelector('#divisor').value,
        number = document.querySelector('#number').value,
        result = document.querySelector('#result');
    divisor = parseInt(divisor);
    number = parseInt(number);
    if(!(isNaN(number)) && !(isNaN(divisor))) {
        var remainder = findRemainder(divisor,number);
        result.textContent = 'The remainder is ' + remainder;
    }
    else {
        result.textContent = 'Invalid Inputs';
    }
}

function findRemainder(divisor,number) {
    var remainder = number % divisor;
    return remainder;
}