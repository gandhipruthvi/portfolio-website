Here’s a professional and detailed `README.md` file for your GitHub repository. It includes information about the technology used, the purpose of the website, and step-by-step instructions to clone and run the project.

---

# Portfolio Website

Welcome to my **Portfolio Website**! This is a modern, responsive, and interactive portfolio built using React and Vite. The website showcases my skills, projects, and work experience in a visually appealing way. It also includes cool animations like the **Magnet Lines** effect and a dynamic dark/light mode toggle.

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [How to Run Locally](#how-to-run-locally)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Folder Structure](#folder-structure)
  - [Contact](#contact)

---

## Purpose

The purpose of this website is to serve as an online portfolio to showcase my work, skills, and achievements. It is designed to be user-friendly, visually engaging, and responsive across all devices. The website also demonstrates my proficiency in modern web development technologies.

---

## Technologies Used

This project leverages the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and lightweight build tool for modern web development.
- **SASS (SCSS)**: A CSS preprocessor for writing modular and maintainable styles.
- **Context API**: For managing global state (e.g., dark/light mode).
- **React Router**: For handling navigation between pages.
- **Font Awesome**: For icons like the light/dark mode toggle.
- **React Bits**: For adding interactive animations like the **Magnet Lines** effect.
- **Dark/Light Mode Toggle**: Implemented using CSS variables and React Context.

---

## Features

1. **Responsive Design**:
   - Fully responsive layout that adapts to different screen sizes.
2. **Interactive Animations**:
   - Magnet Lines animation in the banner section.
3. **Dark/Light Mode**:
   - Dynamic theme switching with smooth transitions.
4. **Logo Section**:
   - A horizontal row of logos acting as a visual partition.
5. **Clean Codebase**:
   - Modular SCSS files and reusable React components.

---

## How to Run Locally

Follow these steps to clone and run the project on your local machine:

### Prerequisites

- Node.js (v16 or higher) installed on your system.
- npm or yarn package manager.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   Or, if you're using Yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Or, with Yarn:

   ```bash
   yarn dev
   ```

4. **Open the App**:

   - Once the development server starts, open your browser and navigate to:
     ```
     http://localhost:5173
     ```

5. **Build for Production** (Optional):
   To create a production-ready build, run:
   ```bash
   npm run build
   ```

---

## Folder Structure

Here’s an overview of the project structure:

```
portfolio-website/
├── public/               # Static assets like logo images
│   ├── logos/
│   │   ├── logo1.png
│   │   ├── logo2.png
│   │   └── ...
├── src/
│   ├── blocks/           # Reusable components like animations
│   │   ├── Animations/
│   │   │   ├── MagnetLines/
│   │   │   │   ├── MagnetLines.jsx
│   │   │   │   ├── MagnetLines.module.scss
│   ├── components/       # Common components like Header, Footer, etc.
│   │   ├── Header.jsx
│   │   ├── Preloader.jsx
│   ├── context/          # Global state management (e.g., DarkModeContext)
│   │   ├── DarkModeContext.js
│   ├── pages/            # Page components like HomePage, AboutPage, etc.
│   │   ├── HomePage.jsx
│   ├── _variables.scss   # Global SCSS variables
│   ├── index.scss        # Global styles
├── vite.config.js        # Vite configuration file
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

---

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: gandhi.pruthvi@gmail.com
- GitHub: [@gandhipruthvi](https://github.com/gandhipruthvi)
- LinkedIn: [Pruthvi Gandhi](https://www.linkedin.com/in/pruthvi-gandhi/)

---

Thank you for visiting my portfolio website! 🚀
