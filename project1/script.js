document.addEventListener('DOMContentLoaded', function () {
    const logoPlaceholder = document.getElementById('logo-placeholder');

    // Load the logo from index.html
    fetch('../index.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, '/html');
            const logoImgSrc = doc.querySelector('#logo img').getAttribute('src');

            // Create an image element and set its source
           
            // Append the image to the logo placeholder
            logoPlaceholder.appendChild(logoImgSrc);
        })
        .catch(error => console.error('Error fetching logo:', error));
});



function sumOfMultiples(limit, num1, num2) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('total-input').value);
    const limit = parseInt(document.getElementById('limit-input').value);
    const num1 = parseInt(document.getElementById('num1-input').value);
    const num2 = parseInt(document.getElementById('num2-input').value);
    const correctAnswer = sumOfMultiples(limit, num1, num2);
    var resultImage = document.getElementById('resultImage');
   

    if (userAnswer === correctAnswer) { // Check if the answer is correct
        resultImage.style.display = 'block'; // Display the picture
        alert(`Correct! The answer is ${correctAnswer}.`);
    } else {
        alert('Sorry, that is incorrect. Please try again.'); // Notify the user if the answer is incorrect
    }
}

// Update placeholders with calculated values
const limit = 1000;
const num1 = 3;
const num2 = 5;
const multiplesSum = sumOfMultiples(limit, num1, num2);
document.getElementById('list-placeholder').innerText = `list of multiples`;
document.getElementById('sum-placeholder').innerText = `sum of multiples`;


// script.js


