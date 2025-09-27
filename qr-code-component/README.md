# 🚀 QR Code Component

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A modern, responsive solution to the Frontend Mentor challenge. Built with modern practices and cutting-edge technologies.

![Desktop preview](./design/preview.jpg)

## 📋 Table of contents

- [Overview](#-overview)
- [Features](#-features)
- [Built with](#-built-with)
- [Links](#-links)
- [What I Learned](#-what-i-learned)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## 📖 Overview

This project is my solution to the "QR Code Component" from Frontend Mentor. The goal was to build the optimal layout for the site depending on their device's screen size that closely matches the provided design.

Original Challenge: [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## ✨ Features

- **Responsive Layout:** The component adapts to different screen sizes, providing an optimal viewing experience on both desktop and mobile devices.
- **Perfect Centering:** The QR code card centered both horizontally and vertically on the page using modern Flexbox techniques.
- **Clean and Accesible Code:** The project uses semantic HTML and includes a screen reader-only heading to improve accessibility and provide proper context for assistive technologies.

## 🛠 Built with

- Semantic HTML5 markup
- CSS Custom Properties
- BEM methodology
- Flexbox
- Mobile-first workflow

## 🔗 Links

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://qr-card-solution.netlify.app)

## 📚 What I Learned

This project was an excellent exercise in building a semantically correct and accessible component. Here are the key takeaways:

- **HTML Semantics:** I used an `<article>` element to wrap the card component, as it represents a self-contained composition that makes sense on its own.
- **Accessibility:** Included a `sr-only` (screen reader only) class to provide a hidden heading for screen reader users, improving the experience for those relying on assistive technologies.
- **Methodology:** Implemented the BEM (Block, Element, Modifier) naming convention for my CSS classes to create a clear, maintainable, and scalable structure.
- **CSS Custom Properties:** Defined global CSS custom properties (variables) for the base colors according to the style guide. I also used specific variables for elements like the card and footer, as well as for typography (font family, sizes, and weights) to ensure consistency and easy theming.
- **Layout & Centering:** Centered the card perfectly by applying Flexbox to both the `body` and `main` elements. This technique also naturally pushes the footer to the bottom of the viewport.
- **Component Layout:** Used Flexbox inside the card to align its elements (image, title, text) neatly, utilizing the `gap` property for precise spacing without margins.
- **Text Control:** Achieved optimal line length readability by setting `max-width` on the text content using the `ch` unit (character width).
- **Responsive Design:** Built the component with a **mobile-first** approach, ensuring it looks great and functions perfectly on all devices, starting from a viewport width of 320px.

## 👩‍💻 Author

- Frontend Mentor - [@amansgz](https://www.frontendmentor.io/profile/amansgz)
- Github - [@amansgz](https://www.github.com/amansgz)

## 🙌 Acknowledgments

[Frontend Mentor](https://www.frontendmentor.io) for providing this challenge and helping developers improve their skills through realistic projects.
