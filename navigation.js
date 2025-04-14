// Navigation functionality for slides
document.addEventListener('DOMContentLoaded', function() {
    // Slide URLs - update this array with all slide filenames
    const slides = [
        'slide-introduction.html',
        'slide-shopify-case.html',
        'slide-industry-leaders.html',
        'slide-competitive-advantage.html',
        'slide-building-foundation.html',
        'slide-market-trends.html',
        'slide-implementation-framework.html',
        'slide-conclusion.html'
    ];
    
    // Get current slide index
    const currentPath = window.location.pathname;
    const currentSlide = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    let currentIndex = slides.indexOf(currentSlide);
    
    if (currentIndex === -1) {
        currentIndex = 0; // Default to first slide if not found
    }
    
    // Add event listeners for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            goToNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            goToPrevious();
        } else if (e.key === 'Home') {
            window.location.href = 'index.html';
        }
    });
    
    // Add navigation buttons if they exist
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const homeButton = document.querySelector('.home-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', goToPrevious);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', goToNext);
    }
    
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Navigation functions
    function goToNext() {
        if (currentIndex < slides.length - 1) {
            window.location.href = slides[currentIndex + 1];
        }
    }
    
    function goToPrevious() {
        if (currentIndex > 0) {
            window.location.href = slides[currentIndex - 1];
        }
    }
}); 