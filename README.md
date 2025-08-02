# CSS Button Generator

[![Deploy Status](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://rudrasenareddy87.github.io/CSS-Button-Generator/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rudrasenareddy/)
![GitHub repo size](https://img.shields.io/github/repo-size/RudrasenaReddy87/CSS-Button-Generator?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/RudrasenaReddy87/CSS-Button-Generator?style=social)
![License](https://img.shields.io/github/license/RudrasenaReddy87/CSS-Button-Generator?style=flat-square)



## Project Description

**CSS Button Generator** is a modern, fully responsive web application built with **React**, **Vite**, and **Tailwind CSS**, designed to showcase a curated collection of beautiful and interactive CSS buttons. Each button is implemented as a reusable React component and styled independently, allowing for modular updates and easy contributions.

This project is ideal for frontend developers, designers, and enthusiasts looking for inspiration or ready-to-use button styles for their web projects. It features a gallery layout, live previews, copy-to-clipboard functionality, and is optimized for both desktop and mobile experiences.

Users can also submit their own button designs, making it a collaborative space for UI creativity.

---
## 🚀 Tech Stack

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white)](https://postcss.org/)
[![Autoprefixer](https://img.shields.io/badge/Autoprefixer-563D7C?style=flat-square&logo=autoprefixer&logoColor=white)](https://github.com/postcss/autoprefixer)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

# CSS Button Generator

A modern, responsive, and customizable web application for exploring and generating animated CSS buttons using React and Tailwind CSS. The platform showcases a collection of interactive buttons, with live previews, JSX + CSS code, and copy functionality for developers and designers.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Installation & Setup](#installation--setup)
4. [Used Packages](#used-packages)
5. [Deployment Guide](#deployment-guide)
6. [Upcoming Features](#upcoming-features)
7. [Contribution Guidelines](#contribution-guidelines)
8. [Feedback & Pull Requests](#feedback--pull-requests)

---

## Tech Stack

* **Frontend Framework:** React + Vite
* **Styling:** Tailwind CSS, PostCSS, Autoprefixer
* **Build Tool:** Vite
* **Deployment:** GitHub Pages

---

## Project Structure

```
CSS-Button-Generator/
├── dist/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/
│   │   └── buttons/
│   │       ├── Button1.jsx
│   │       ├── Button1style.css
│   │       ├── Button2.jsx
│   │       ├── Button2style.css
│   │       ├── Button3.jsx
│   │       ├── Button3style.css
│   │       ├── Button4.jsx
│   │       ├── Button4style.css
│   │       ├── Button5.jsx
│   │       ├── Button5style.css
│   │       ├── Button6.jsx
│   │       ├── Button6style.css
│   │       ├── Button7.jsx
│   │       ├── Button8.jsx
│   │       ├── Button8style.css
│   │       ├── Button9.jsx
│   │       ├── Button9style.css
│   │       ├── Button10.jsx
│   │       ├── Button10style.css
│   │       ├── Button11.jsx
│   │       ├── Button11style.css
│   │       ├── Button12.jsx
│   │       ├── Button12style.css
│   │       ├── Button13.jsx
│   │       ├── Button13link.jsx
│   │       ├── Button13linkstyle.css
│   │       ├── Button13style.css
│   │       ├── ButtonCollection.jsx
│   │       ├── CopyButton1.jsx
│   │       ├── index.jsx
│   │       ├── last.jsx
│   │       ├── laststyle.css
│   │       ├── mail.css
│   │       └── mail.html
│   ├── BackToTop.css
│   ├── BackToTop.jsx
│   ├── ParticleBackground.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Gallery.jsx
│   ├── index.css
│   ├── Intro.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## Installation & Setup

### Prerequisites

* Node.js (v16+)
* npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/RudrasenaReddy87/CSS-Button-Generator.git

# 2. Navigate to the project directory
cd CSS-Button-Generator

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Used Packages

* `react`
* `react-dom`
* `vite`
* `tailwindcss`
* `postcss`
* `autoprefixer`

---

## Deployment Guide

Follow these steps to deploy the project on GitHub Pages:

### Uploading Project to GitHub

1. Initialize Git:

```bash
git init
git remote add origin https://github.com/your-username/CSS-Button-Generator.git
```

2. Push Code:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Deploy Using GitHub Pages

1. Install `gh-pages`:

```bash
npm install gh-pages --save-dev
```

2. Add scripts in `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

---

## Upcoming Features

* Dark mode toggle
* Button filter by tags
* Download ZIP of selected buttons
* User submission and approval system
* Live CSS playground

---

## Contribution Guidelines

* Fork the repository
* Create a new branch: `git checkout -b feature/button-name`
* Add your component to the `components/buttons/` directory
* Commit and push
* Submit a Pull Request with a clear description

---

## Feedback & Pull Requests

Pull requests and feedback are welcome!

If you want to submit your own custom button style, create a new `.jsx` and `.css` file in the appropriate directory and submit a PR.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
