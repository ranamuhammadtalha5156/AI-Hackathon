// This file contains custom JavaScript code for additional functionality specific to the Barista Cafe website.

// Change the theme of the entire Barista Cafe website
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');

            // Change styles based on the theme
            if (document.body.classList.contains('dark-theme')) {
                document.querySelectorAll('.text-white').forEach(element => {
                    element.classList.remove('text-white');
                    element.classList.add('text-light');
                });
                document.querySelectorAll('.section-bg').forEach(element => {
                    element.classList.remove('section-bg');
                    element.classList.add('section-bg-dark');
                });
            } else {
                document.querySelectorAll('.text-light').forEach(element => {
                    element.classList.remove('text-light');
                    element.classList.add('text-white');
                });
                document.querySelectorAll('.section-bg-dark').forEach(element => {
                    element.classList.remove('section-bg-dark');
                    element.classList.add('section-bg');
                });
            }
        });
    }
});