function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('article').classList.toggle('dark-mode');
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.article-box').forEach(box => {
        box.classList.toggle('dark-mode');
    });

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

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
        document.querySelectorAll('.article-box').forEach(box => {
            box.classList.add('dark-mode');
        });
        document.getElementById('darkModeSwitch').checked = true;
    }

    document.getElementById('darkModeSwitch').addEventListener('change', toggleDarkMode);
});

