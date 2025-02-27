/**
 * Tests for main.js
 * Using Jest for unit testing
 */

// Import functions from main.js
// Note: In a real project, you would use proper import/export
const {
    toggleMobileNav,
    closeMobileNav,
    handleScroll,
    filterProjects,
    handleFormSubmit,
    handleResumeDownload
} = require('../static/js/main.js');

// Mock DOM elements and functions
document.body.innerHTML = `
  <header>
      <nav>
          <div class="hamburger">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
          <ul class="nav-links">
              <li><a href="#home" class="active">Home</a></li>
              <li><a href="#about">About</a></li>
          </ul>
      </nav>
  </header>
  <section id="home" style="height: 100px; top: 0;"></section>
  <section id="about" style="height: 100px; top: 100px;"></section>
  
  <div class="projects-filter">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="web">Web</button>
  </div>
  <div class="projects-grid">
      <div class="project-card" data-category="web"></div>
      <div class="project-card" data-category="app"></div>
  </div>
  
  <form id="contact-form">
      <input id="name" type="text" />
      <input id="email" type="email" />
      <input id="subject" type="text" />
      <textarea id="message"></textarea>
      <button type="submit">Submit</button>
  </form>
  
  <a href="#" id="download-resume">Download Resume</a>
`;

let header = document.querySelector('header');
let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let navLinksItems = document.querySelectorAll('.nav-links li');
let contactForm = document.getElementById('contact-form');
let filterButtons = document.querySelectorAll('.filter-btn');
let projectCards = document.querySelectorAll('.project-card');
let resumeButton = document.getElementById('download-resume');

// Global mocks
global.alert = jest.fn();
console.log = jest.fn();
window.scrollY = 0;

describe('Form Handling', () => {
    beforeEach(() => {
        global.alert.mockClear();
        console.log.mockClear();
    });

    test('handleFormSubmit should show alert for empty fields', () => {

        const event = { preventDefault: jest.fn() };


        handleFormSubmit(event);

        expect(event.preventDefault).toHaveBeenCalled();
        expect(global.alert).toHaveBeenCalledWith('Please fill in all fields');
    });

});

describe('Resume Download', () => {
    test('handleResumeDownload should show alert', () => {

        const event = { preventDefault: jest.fn() };
        global.alert.mockClear();


        handleResumeDownload(event);


        expect(event.preventDefault).toHaveBeenCalled();
        expect(global.alert).toHaveBeenCalledWith('Resume coming soon !!');
    });
});