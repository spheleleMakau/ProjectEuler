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


// script.js

// script.js
// script.js
