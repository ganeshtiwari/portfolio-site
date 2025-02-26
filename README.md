# Portfolio Website

A responsive portfolio website built with HTML, CSS, and JavaScript. This project includes automated tests and GitHub Actions for deployment to GitHub Pages.

## Features

- Responsive design that works on all devices
- Interactive navigation menu with smooth scrolling
- Project filtering functionality
- Skills visualization
- Contact form
- Animated elements
- Unit tests for JavaScript functions
- Automated deployment to GitHub Pages

## Setup and Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Open the project in your code editor.

3. For local development, you can use a live server extension in your editor, or use a simple HTTP server:
   ```
   # Using Python
   python -m http.server
   
   # Or using Node.js
   npx serve
   ```

4. View the website at `http://localhost:8000` or whatever port your server uses.

## Running Tests

The project uses Jest for testing JavaScript functionality. To run tests:

1. Install dependencies:
   ```
   npm install
   ```

2. Run tests:
   ```
   npm test
   ```

## Customization

### Personal Information

To customize the portfolio with your information:

1. Edit the personal details in `index.html` (name, job title, about me text, etc.)
2. Update contact information and social media links
3. Replace project details with your own work
4. Update the skills section to reflect your skillset

### Styling

The website uses CSS custom properties (variables) for easy customization:

1. Open `static/css/styles.css`
2. Modify the variables in the `:root` selector at the top of the file:
   ```css
   :root {
       --primary-color: #4a89dc;
       --secondary-color: #5d9cec;
       /* ... other variables ... */
   }
   ```

## Deployment

The project is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow will:

1. Check out the repository
2. Set up Node.js
3. Install dependencies
4. Run tests
5. Deploy to the `gh-pages` branch

To set up deployment:

1. Make sure your repository is public or you have GitHub Pro
2. Go to your repository settings → Pages
3. Set the source to the `gh-pages` branch
4. Your portfolio will be available at `https://yourusername.github.io/portfolio-website/`

## License

This project is available under the MIT License. See the LICENSE file for more information.