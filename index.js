let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to move the carousel
function moveSlide(step) {
    currentIndex = (currentIndex + step + totalItems) % totalItems;
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatic sliding
setInterval(() => {
    moveSlide(1);
}, 4000); // Change slide every 4 seconds

// Initialize the carousel
updateCarousel();
