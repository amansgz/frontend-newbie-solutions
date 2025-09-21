# 🚀 Ping Coming Soon Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A modern, responsive solution to the Frontend Mentor challenge. Built with modern practices and cutting-edge technologies.

![Desktop preview](./design/preview.jpg)

## 📋 Table of contents

- [Overview](#-overview)
- [Built with](#-built-with)
- [Links](#-links)
- [What I Learned](#-what-i-learned)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## 📖 Overview

This project is my solution to the "Ping Coming Soon Page" from Frontend Mentor.

The challenge:

- Build the optimal layout for the site depending on their device's screen size that closely matches the provided design.
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

Original Challenge: [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).

## 🛠 Built with

- Semantic HTML5 markup
- BEM methodology
- CSS Custom Properties
- Flexbox
- Mobile-first workflow
- JavaScript

## 🔗 Links

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://ping-coming-solution.netlify.app)
[![Solution](https://img.shields.io/badge/Frontend_Mentor-solution-blue?style=for-the-badge)](https://www.frontendmentor.io/solutions/)

## 📚 What I Learned

### Accesibility & Semantic HTML

- **Visually hidden labbels:** Used `sr-only` class to hide label from sighted users while keeping them accessible for screen readers.
- **SVG accessibility:** Added `role="img"` and `<title>` elements to social icons for proper screen reader announcement.
- **Form validation:** Implemented accesible error messages that are announced to screen readers.

### CSS Techniques

- **Social media hover effects:** Created rounded background effects using `background-color` + `border-radius` on social links instead of modifying the SVG itself.
- **Custom form validation:** Styled validation states with custom error messages and visual feedback.
- **Responsive design:** Used mobile-first approach and CSS Flexbox for layout adaptability.

### JavaScript Insights

- **Form validation logic:** Built custom email validation with regex instead of relying solely on HTML5 validation.
- **Event handling:** Learned to use `submit` event on forms instead of `click` on buttons for better accessibility.
- **User experience:** Implemented timed success messages and button state management for better feedback.

## 👩‍💻 Author

- Frontend Mentor - [@amansgz](https://www.frontendmentor.io/profile/amansgz)
- Github - [@amansgz](https://www.github.com/amansgz)

## 🙌 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for providing this challenging and educational project.
- [DeepSeek-V3](https://www.deepseek.com/) for the guidance and code reviews that helped me improve my accesibility practices and JavaScript validation.
