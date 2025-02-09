'use strict';

const submissionBtn = document.getElementById('submission-btn');
const remainderElement = document.getElementById('remainder');
const checkIfEvenElement = document.getElementById('check-if-even');
const lostNumbersElement = document.getElementById('lost-numbers');

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(a, b) {
    return a % b;
}

const checkIfEven = (number) => {
    // I could save myself the ELSE statement if I set this and just change it if true.
    let isEven = false;

    if (number % 2 === 0) {
        isEven = true;
    }

    return isEven;
};

const getTheFourthElement = () => {
    return lostNumbers[3];
};

const render = () => {
    remainderElement.innerHTML = returnTheRemainder(5, 4);
    checkIfEvenElement.innerHTML = checkIfEven(47);
    lostNumbersElement.innerHTML = getTheFourthElement();
};

submissionBtn.addEventListener('click', function () {
    render();
});
