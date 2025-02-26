const {
  isInViewport,
  handleScrollAnimations,
  initAnimations
} = require('../static/js/animation.js');

// Mock DOM elements and functions
document.body.innerHTML = `
  <div class="animate-on-scroll" id="element1"></div>
  <div class="animate-on-scroll" id="element2"></div>
  <div class="animate-on-scroll" id="element3"></div>
`;

// Mock window properties
window.innerHeight = 800;
window.addEventListener = jest.fn();

describe('Viewport Detection', () => {
  test('isInViewport should return true for element in viewport', () => {
      const element = document.getElementById('element1');
      
      element.getBoundingClientRect = jest.fn().mockReturnValue({
          top: 200,
          bottom: 400
      });
      
      expect(isInViewport(element)).toBe(true);
  });
  
  test('isInViewport should return false for element above viewport', () => {
      const element = document.getElementById('element2');
      
      element.getBoundingClientRect = jest.fn().mockReturnValue({
          top: -200,
          bottom: -50
      });
      
      expect(isInViewport(element)).toBe(false);
  });
  
  test('isInViewport should return false for element below viewport', () => {

      const element = document.getElementById('element3');
      
      element.getBoundingClientRect = jest.fn().mockReturnValue({
          top: 900,
          bottom: 1100
      });
      
      expect(isInViewport(element)).toBe(false);
  });
  
  test('isInViewport should handle custom offset', () => {
      const element = document.getElementById('element1');
      
      element.getBoundingClientRect = jest.fn().mockReturnValue({
          top: 700,
          bottom: 800
      });
      
      expect(isInViewport(element, 200)).toBe(false);
  });
});

describe('Scroll Animations', () => {
  beforeEach(() => {

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
          el.classList.remove('show');
      });
      
      document.getElementById('element1').getBoundingClientRect = jest.fn().mockReturnValue({
          top: 200,
          bottom: 400
      });
      
      document.getElementById('element2').getBoundingClientRect = jest.fn().mockReturnValue({
          top: 900,
          bottom: 1100
      });
      
      document.getElementById('element3').getBoundingClientRect = jest.fn().mockReturnValue({
          top: 300,
          bottom: 500
      });
  });
  
  test('handleScrollAnimations should add show class to elements in viewport', () => {
      const element1 = document.getElementById('element1');
      const element2 = document.getElementById('element2');
      const element3 = document.getElementById('element3');
      
      handleScrollAnimations();
      
      expect(element2.classList.contains('show')).toBe(false);
  });
});

describe('Animation Initialization', () => {
  test('initAnimations should set up event listeners', () => {
      window.addEventListener.mockClear();
      
      initAnimations();
      
      expect(window.addEventListener).toHaveBeenCalledWith('scroll', handleScrollAnimations);
  });
});