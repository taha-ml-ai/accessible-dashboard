Accessible Dashboard
A responsive, accessible, and animated dashboard built with React, Framer Motion, and following ARIA best practices.
This project highlights UI accessibility, modern animations, and live API integration, making it ideal for portfolios, client demos, and learning purposes.

🚀 Live Demo
View Live on Netlify

✨ Features
Accessibility First

Uses ARIA roles and properties, keyboard navigability, and semantic HTML

Full screen reader support on all interactive elements

Modern Animations

Smooth fade-in, hover, and staggered effects using Framer Motion

Engaging UI transitions that improve user experience

Live API Integration

Fetches dynamic placeholder data from JSONPlaceholder

Modular and scalable API logic for easy extension

Responsive Design

Fully responsive layout for desktop, tablet, and mobile devices

🛠 Tech Stack
React – Frontend UI library

Framer Motion – Animation and motion effects

Material-UI (MUI) – UI components and styling

ARIA & WAI-ARIA Guidelines – Accessibility standards

JSONPlaceholder API – Sample data source

📂 Project Structure

/public
  index.html                 # Main HTML file
  favicon.ico                # Site icon
  /assets                    # Static images, icons, fonts

/src
  /api                       # API calls and data fetching logic
    data.js                  # Sample/mock data
  /animations                # Animation variants and helpers
    animations.js
  /components                # Reusable UI components
    StatCard.jsx
    UserTable.jsx
    QuickActions.jsx
  /styles                    # Global and component-specific styles
    index.css
    animations.css
  App.jsx                    # Root React component
  index.js                   # React app entry point
  theme.js                   # MUI theme configuration

/.gitignore                  # Git ignore rules
/package.json                # Project metadata and dependencies
/package-lock.json           # Exact dependency versions
/README.md                   # Project overview and docs


📦 Installation & Running Locally
bash
Copy
Edit
git clone https://github.com/taha-ml-ai/accessible-dashboard.git
cd accessible-dashboard
npm install
npm start
Then open http://localhost:3000 in your browser.

🤝 Contribution
Feel free to fork, improve, or report issues. Pull requests are welcome!
