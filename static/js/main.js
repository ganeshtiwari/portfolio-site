
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const contactForm = document.getElementById('contact-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const resumeButton = document.getElementById('download-resume');

function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function closeMobileNav() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

function handleScroll() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('.nav-links a.active')?.classList.remove('active');
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
}

function filterProjects(category) {
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    console.log('Form Submission:', { name, email, subject, message });
    
    contactForm.reset();
    
    alert('Thank you for your message! I will get back to you soon.');
}

function handleResumeDownload(e) {
    e.preventDefault();
    alert('Resume coming soon !!');
}

function initEventListeners() {

    hamburger.addEventListener('click', toggleMobileNav);
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', closeMobileNav);
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');
            
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (resumeButton) {
        resumeButton.addEventListener('click', handleResumeDownload);
    }
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
}

document.addEventListener('DOMContentLoaded', initEventListeners);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileNav,
        closeMobileNav,
        handleScroll,
        filterProjects,
        handleFormSubmit,
        handleResumeDownload,
        initEventListeners
    };
}