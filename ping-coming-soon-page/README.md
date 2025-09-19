# Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Links](#links)
  - [Screenshots](#screenshots)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

<div style="display: flex; gap: 1rem; padding-bottom: 1.5rem;">
  <div>
    <img style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);" src="./design/mobile-design.jpg" alt=" Preview Card desktop design" width="320">
  </div>
  <div>
    <img style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);" src="./design/desktop-design.jpg" alt=" Preview Card desktop design" width="768">
  </div>
</div>

- See hover states for all interactive elements on the page

 <div>
    <img style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);" src="./design/desktop-hover-error-states.jpg" alt="error and hover states" width="768">
  </div>

- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

## My Process

### Built with

- Semantic HTML5 markup
- BEM methodology
- CSS Custom Properties
- Flexbox
- Mobile-first workflow
- JavaScript

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: []()

### Screenshots

<div style="display: flex; gap: 1rem; padding-bottom: 1.5rem;">
  <div>
    <img style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);" src="./design/screenshots/mobile-screenshot.png" alt="Mobile screenshot" width="320">
  </div>
  <div>
    <img style="box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);" src="./design/screenshots/desktop-screenshot.png" alt="Desktop screenshot" width="768">
  </div>
</div>

### What I learned

- **Accesibility & Semantic HTML**

  - **Visually hidden labbels:** Used `sr-only` class to hide label from sighted users while keeping them accessible for screen readers.
  - **SVG accessibility:** Added `role="img"` and `<title>` elements to social icons for proper screen reader announcement.
  - **Form validation:** Implemented accesible error messages that are announced to screen readers.

- **CSS Techniques**

  - **Social media hover effects:** Created rounded background effects using `background-color` + `border-radius` on social links instead of modifying the SVG itself.
  - **Custom form validation:** Styled validation states with custom error messages and visual feedback.
  - **Responsive design:** Used mobile-first approach and CSS Flexbox for layout adaptability.

- **JavaScript Insights**
  - **Form validation logic:** Built custom email validation with regex instead of relying solely on HTML5 validation.
  - **Event handling:** Learned to use `submit` event on forms instead of `click` on buttons for better accessibility.
  - **User experience:** Implemented timed success messages and button state management for better feedback.

## Author

- Frontend Mentor - [@amansgz](https://www.frontendmentor.io/profile/amansgz)
- Github - [@amansgz](https://www.github.com/amansgz)

## Acknowledgements

- Thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing this challenging and educational project.

- Thanks to [DeepSeek-V3](https://www.deepseek.com/) for the guidance and code reviews that helped me improve my accesibility practices and JavaScript validation.
