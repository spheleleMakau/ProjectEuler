

// problem1

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navbar-toggler');
    const navButtons = document.querySelector('#buttons');

    // Check if navToggle and navButtons exist before adding event listener
    if (navToggle && navButtons) {
        navToggle.addEventListener('change', function () {
            if (this.checked) {
                navButtons.style.display = 'flex';
            } else {
                navButtons.style.display = 'none';
            }
        });
    } else {
        console.error('buttons or elements with class "buttons" not found.');
    }
});



function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('loadedContent').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

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
    
    var resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';
    const userAnswer = parseInt(document.getElementById('total-input').value);
    const limit = parseInt(document.getElementById('limit-input').value);
    const num1 = parseInt(document.getElementById('num1-input').value);
    const num2 = parseInt(document.getElementById('num2-input').value);
    
    
    
    const correctAnswer = sumOfMultiples(limit, num1, num2);

   

    if (userAnswer === correctAnswer) { // Check if the answer is correct
        resultImage.style.display = 'block'; // Display the picture   
        let answerDisplay = (document.getElementById('answerDisplay'));
        answerDisplay.style.display = 'block';
        // Display the correct answer
        answerDisplay.innerHTML = `<h3>Congratulations!</h3>
                                   <p>Your answer (${userAnswer}) is correct!</p>
                                   <p>The correct answer is ${correctAnswer}.</p>`;
        resultImage.scrollIntoView({ behavior: 'smooth' });
        answerDisplay.scrollIntoView({ behavior: 'smooth' });

    
    } else {
        alert('Sorry, that is incorrect. Please try again.'); // Notify the user if the answer is incorrect
    }
}


// Problem2
function problem2(event) {
    event.preventDefault();
    
    var resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';
    const limit = parseInt(document.getElementById('limit-input').value);
    var answer = parseInt(document.getElementById('answer').value);
   
    
   
    const sum = sumOfEvenFibonacci(limit);

    if(answer === sum){

        resultImage.style.display = 'block';
    }

    else{
        alert('Sorry, that is incorrect. Please try again.');
    } 
}


function sumOfEvenFibonacci(limit) {
    let number = limit;
    let sum = 0, a = 1, b = 2,c;
    while (b < number) {
        if (b % 2 == 0) {
            sum = sum + b;
    }
        c = a + b,a = b, b = c;
    }
    return sum;
}


//  problem3

function problem3(event) {
    event.preventDefault();

    const primeNumber = parseInt(document.getElementById('number').value);
    const largestPrimeFactor = findLargestPrimeFactor(primeNumber);
    
    let answer = (document.getElementById('answerDisplay'));
    answer.style.display = 'block';
    answer.innerHTML = `The largest prime factor of ${primeNumber} is: ${largestPrimeFactor}`
    answer.scrollIntoView({ behavior: 'smooth' });

}

function findLargestPrimeFactor(number) {
    let divisor = 2;
    while (number !== 1) {
        if (number % divisor === 0) {
            number /= divisor;
        } else {
            divisor++;
        }
    }
    return divisor;
}


  