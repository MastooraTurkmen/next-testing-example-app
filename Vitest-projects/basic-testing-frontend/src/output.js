export function generateResultText(calculateResult) {
    let resultText = '';

    if (resultText === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculateResult !== 'no-calc') {
        resultText = 'Result: ' + calculateResult;
    }

    return resultText
}

export function outputResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText
}