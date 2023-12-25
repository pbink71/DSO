const carousel = document.querySelector('.carousel');
const panels = document.querySelectorAll('.panel');
let currentIndex = 0;

function showPanel(index) {
    const newPosition = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + newPosition + ')';
}
function nextPanel() {
    currentIndex = (currentIndex + 1) % panels.length;
    showPanel(currentIndex);
}
setInterval(nextPanel, 5000); // Change panel every 5000 milliseconds (5 seconds)

// Example: Change panel when clicking a link
const link1 = document.getElementById('link1');
link1.addEventListener('click', function() {
    currentIndex = 0;
    showPanel(currentIndex);
});