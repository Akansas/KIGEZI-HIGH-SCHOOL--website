// Get elements
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');

// Add click event to each gallery image
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        // Set the lightbox image source and caption
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        
        // Show the lightbox
        lightbox.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
