# 🚀 3-column Preview Card Component

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logoColor=white)
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

This project is my solution to the "3-column preview card component" from Frontend Mentor. The goal was to build the optimal layout for the site depending on their device's screen size that closely matches the provided design, and see hover states for interactive elements

Original Challenge: [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

## 🛠 Built with

- Semantic HTML5 markup
- CSS Custom Properties
- BEM methodology
- Flexbox
- Mobile-first workflow

## 🔗 Links

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://3column-cards-css.netlify.app)


## 📚 What I Learned

- **BEM (Block, Element, Modifier):** This is a naming methodology for CSS classes that helps developers write more maintainable and scalable code. It organizes styles intro three distinct parts:

  - **Block:** A standalone component (e.g. `card`, `button`).
  - **Element:** A part of the block (e.g. `card__title`, `card__icon`).
  - **Modifier:** A flag on a block or element that changes its appearance or behavior (e.g. `card--sedans`, `button--active`).

  This approach makes class names clear, modular, and less prone to conflicts.

- **CSS Variables:** I implemented custom CSS properties, also known as CSS variables, to store reusable values. By defining variables in the `:root` pseudo-class (e.g., `--color-primary-cyan`), I can use these values throughout the stylesheet (`var(--color-primary-cyan)`). This approach makes it easy to manage a project's color palette, typography, and spacing, drastically simplifying future updates and ensuring design consistency.

- **Accesibility (A11y):** I focused on creating an accesible user interface to ensure the component is usable for everyone. My key accesibility practices included:
  - **Semantic HTML:** Using meaningful tags like `<main>`, `<article>`, and `<section>` to provide a clear document structure for screen readers and other assistive technologies.
  - **ARIA Labels:** implementing the `aria-label` attribute on the `<main>` tag to provide a descriptive name for the main content area. This is particularly useful for screen reader users, as it gives context to a landmark element that might not have a visible heading.
  - **Descriptive `alt` attribute:** For the decorative icons, I used an empty `alt=""` attribute. This is crucial practice that tells screen readers to ignore the image, preventing redundant or unnecesary annoucements that could clutter the user's experience. This ensures the focus remains on the main content and not on visual elements that don't convey essential information.

## 👩‍💻 Author

- Frontend Mentor - [@amansgz](https://www.frontendmentor.io/profile/amansgz)
- Github - [@amansgz](https://www.github.com/amansgz)

## 🙌 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for providing this challenge and helping developers improve their skills through realistic projects.

- Google Gemini for its invaluable help with the English-language descriptions, which allowed me to articulate my learning process and showcase the project's features more effectively.
