// script.js
const carouselImages = document.querySelectorAll('.carousel-image');
const heroContent = document.querySelector('.hero-content');
let currentIndex = 0;
let intervalId;

const randomTexts = [
    "Discover the Future of Transportation",
    "Elevate Your Journey with DreamWeave EVs",
    "Unlock New Possibilities with DreamWeave",
    "Where Innovation Meets Sustainability"
];

function showImage(index) {
    carouselImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function updateHeroContent() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    heroContent.querySelector('h1').textContent = randomTexts[randomIndex];
    // You can add more random content updates here if needed
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
    updateHeroContent(); // Update content when changing images
}

// Initially, show the first image and update hero content
showImage(currentIndex);
updateHeroContent();

// Automatically advance to the next image every 6 seconds
intervalId = setInterval(nextImage, 6000);
