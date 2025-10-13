# 🚀 Product Preview Card Component

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logoColor=white)

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A modern, responsive solution to the Frontend Mentor challenge. Built with modern practices and cutting-edge technologies.

![Desktop preview](./design/desktop-preview.jpg)

## 📋 Table of contents

- [Overview](#-overview)
- [Built with](#-built-with)
- [Links](#-links)
- [What I Learned](#-what-i-learned)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## 📖 Overview

This project is my solution to the "Product Preview Card Component" from Frontend Mentor. The goal was to build the optimal layout for the site depending on their device's screen size that closely matches the provided design, see hover and focus states for interactive elements.

Original Challenge: [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

Part of the [Building Responsive Layouts Learning Path](https://www.frontendmentor.io/learning-paths) on Frontend Mentor.

## 🛠 Built with

- Semantic HTML5 markup
- CSS Custom Properties
- BEM methodology
- Flexbox
- Mobile-first workflow

## 🔗 Links

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://amansgz.github.io/product-preview-card/)

## 📚 What I Learned

This project was an excellent exercise in creating a responsive and accesible component. Two key takeaways from the challenge were:

1. **Mastering Responsive Images with `<picture>` and `<media>`**
   I moved beyond simple CSS-based image scaling and leveraged the HTML `<picture>` element. This allow me to serve completely different images files based on the user's viewport. By using `<source>` tags with `media` attributes, I could specify a larger, desktop-optimized image for wider screens and seamlessly switch to a more appropiate mobile-optimized image on smaller devices. This technique ensures optimal loading performance and the best visual experience across al devices, as the browser downloads only the image that matches the current size.

2. **Structuring CSS with Spacing Variables**
   To ensure visual consistency and make the stylesheet more maintainable, I implemented a system of CSS custom properties (variables) for spacing. I defined a set of variables like `--spacing-lg` to represent consistent values for margins and padding throughout the component. This approach made it incredibly easy to maintain a uniform rhythm and scale, and any future adjustments to the spacing can now made in a single place, propagating the changes globally.

3. **Performance Optimization Journey**
   Through rigorous testing and optimization, achieved near-perfect lighthouse scores. Key strategies included WebP image implementation, critical resource prioritization with 'fecthpriority', and CSS delivery optimization.

## 👩‍💻 Author

- Frontend Mentor - [@amansgz](https://www.frontendmentor.io/profile/amansgz)
- Github - [@amansgz](https://www.github.com/amansgz)

## 🙌 Acknowledgments

[Frontend Mentor](https://www.frontendmentor.io) for providing this challenge and helping developers improve their skills through realistic projects.
