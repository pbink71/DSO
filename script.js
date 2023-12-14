const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showPanel(index) {
    const newPosition = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + newPosition + ')';
}

// Example: Change panel when clicking a link
const link1 = document.getElementById('link1');
link1.addEventListener('click', function() {
    currentIndex = 0;
    showPanel(currentIndex);
});