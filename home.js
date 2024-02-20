document.addEventListener('DOMContentLoaded', function() {
    const teamHeading = document.querySelector('h2');
    let isJaya = false;

    teamHeading.addEventListener('click', function() {
        if (isJaya) {
            // Revert to the original text and styling
            teamHeading.style.fontWeight = 'bold';
            teamHeading.style.color = 'initial';
            teamHeading.style.backgroundImage = 'none';
            teamHeading.textContent = '🙏 Amin 🙏 Core Team';
        } else {
            // Change to JAYA JAYA JAYA text with rainbow font styling
            teamHeading.style.fontWeight = 'bold';
            teamHeading.style.color = 'transparent';
            teamHeading.style.backgroundImage = 'linear-gradient(45deg, #f3ec78, #ff0099, #ff7a00)';
            teamHeading.style.webkitBackgroundClip = 'text';
            teamHeading.style.backgroundClip = 'text';
            teamHeading.textContent = 'JAYA JAYA JAYA';
        }
        // Toggle the boolean flag
        isJaya = !isJaya;
    });
});
