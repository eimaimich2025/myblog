function toggleBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = banner.style.width === '250px' ? '0' : '250px';
}

function closeBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = '0';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('article').classList.toggle('dark-mode');
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.toggle('dark-mode');
    });

    // Save the preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load the preference from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelector('article').classList.add('dark-mode');
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.add('dark-mode');
        });
        document.getElementById('darkModeSwitch').checked = true; // Set the checkbox to checked state
    }


// Attach the toggleDarkMode function to the dark mode switch
document.getElementById('darkModeSwitch').addEventListener('change', toggleDarkMode);

