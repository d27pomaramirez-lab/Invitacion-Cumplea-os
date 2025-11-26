function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#fa709a'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.querySelector('.invitation-card').appendChild(confetti);
    }
}

function confirmYes() {
    alert('¡Sabía que dirias que SI!! 🎉');
}

function confirmNo() {
    alert('¡Ni lo intentes! 😄');
}

function moveButton(event) {
    const button = event.target;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxX = viewportWidth - button.offsetWidth - 20;
    const maxY = viewportHeight - button.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

createConfetti();