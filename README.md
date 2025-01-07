![Awards Project Preview](https://drive.google.com/uc?id=14fqNjV7LgaN4AOi3fdC915WPAPJVZ-8c)
**Awards** is a web application built following the [YouTube tutorial](https://www.youtube.com/watch?v=zA9r5zTllx4&t=7300s) by _JavaScript Mastery_. This project demonstrates modern front-end development techniques, including animation with **GSAP** and modular styling with **TailwindCSS**.
---

## Demo

Check out the live demo here: [Awards Project on Vercel](https://awwwards-kohl.vercel.app/)

## Features

- Developed with **React** and powered by **Vite** for rapid development.
- Smooth animations and transitions with **GSAP** and `@gsap/react`.
- Clean and modular architecture using **TailwindCSS**.
- Linting and code quality checks with **ESLint**.

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd awards
Install dependencies:
npm install
Development
To start the development server:


npm run dev
Access the app at http://localhost:3000 in your browser.

Production Build
To build the application for production:


Копіювати код
npm run build
Preview the production build locally:


npm run preview
Project Structure
The project has the following structure:


awards/
├── src/
│   ├── components/    # Reusable React components
│   ├── assets/        # Static assets (images, fonts, etc.)
│   ├── styles/        # Global and component-specific styles
│   └── App.jsx        # Main application entry point
├── public/            # Static files served by the app
├── package.json       # Project metadata and dependencies
└── vite.config.js     # Vite configuration
Dependencies
Core
React: ^18.3.1
GSAP: ^3.12.5 and @gsap/react
TailwindCSS: ^3.4.17
clsx: ^2.1.1 for conditional classnames.
react-icons: ^5.4.0 for lightweight icons.
Development
Vite: ^6.0.5 for fast build tooling.
ESLint: ^9.17.0 for code linting and styling consistency.
PostCSS: ^8.4.49 for CSS processing.
Scripts
The following scripts are available:

npm run dev - Start the development server.
npm run build - Create a production-ready build.
npm run preview - Serve the production build locally.
npm run lint - Run ESLint to check for code issues.
Credits
This project is based on the YouTube tutorial:
Build a Stunning Awards Page Animation | React + GSAP.

Special thanks to the tutorial creator for the detailed guidance.

License
This project is private and not intended for public use. Refer to the tutorial for educational purposes.

Acknowledgements
Special thanks to **[Zentry](https://zentry.com/)** for providing inspiration for creating a visually stunning and highly functional website. Their innovative design and attention to detail served as a great reference for this project.
Vite for the fast development environment.
React for the robust front-end framework.
GSAP for the powerful animation library.
TailwindCSS for utility-first CSS.
