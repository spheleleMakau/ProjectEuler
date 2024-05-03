

// problem1

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav_toggle');
    const navButtons = document.querySelector('.buttons');

    navToggle.addEventListener('change', function () {
        if (this.checked) {
            navButtons.style.display = 'flex';
        } else {
            navButtons.style.display = 'none';
        }
    });
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




// Problem2
function problem2(event) {
    event.preventDefault();
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







