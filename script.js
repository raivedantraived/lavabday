// Get references to DOM elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show a slide
function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = n;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    }
    slides[currentSlide].style.display = 'block';
}


// Function to advance to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-advance the slideshow every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(currentSlide);
