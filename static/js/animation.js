const animatedElements = document.querySelectorAll('.animate-on-scroll');

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset value in pixels
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element, offset = 150) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight - offset &&
        rect.bottom >= 0
    );
}

/**
 * Handle scroll animations
 */
function handleScrollAnimations() {
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

/**
 * Initialize animations
 */
function initAnimations() {
    handleScrollAnimations();
    

    window.addEventListener('scroll', handleScrollAnimations);
}

document.addEventListener('DOMContentLoaded', initAnimations);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isInViewport,
        handleScrollAnimations,
        initAnimations
    };
}