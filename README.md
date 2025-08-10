# Users Dashboard

A responsive, accessible, and animated dashboard built with **React**, **Framer Motion**, and **ARIA best practices**.  
This project demonstrates **UI accessibility**, **modern animations**, and **real API integration**, making it perfect for portfolios and client demos.

---

## 🚀 Live Demo

[**View Live on Netlify**](https://users-dashboard-react.netlify.app/)

---

## ✨ Features

- **Accessibility First**  
  - ARIA roles, keyboard navigation, proper HTML semantics  
  - Screen reader support for all interactive elements  

- **Modern Animations**  
  - Smooth fade-in & hover effects powered by **Framer Motion**  
  - Staggered animations for stat cards and table rows  

- **Live API Integration**  
  - Fetches real-time placeholder data from `jsonplaceholder.typicode.com`  
  - Modular API fetch logic for scalability and easy updates  

- **Responsive Design**  
  - Fully responsive layout for desktop, tablet, and mobile  

---

## 🛠 Tech Stack

- **React** – UI library  
- **Framer Motion** – Animation library  
- **Material-UI (MUI)** – UI components and styling  
- **ARIA & WAI-ARIA Guidelines** – Accessibility best practices  
- **JSONPlaceholder API** – Data source for demo purposes  

---

## 📂 Project Structure

/public
  index.html                 
  favicon.ico               
  /assets                    

/src
  /api                      
    data.js                 
  /animations               
    animations.js

    
  /components               
    StatCard.jsx
    UserTable.jsx
    QuickActions.jsx

    
  /styles                 
    index.css
    animations.css
  App.jsx                   
  index.js                
  theme.js                  

/.gitignore                
/package.json               
/package-lock.json          
/README.md                 



---

## 📦 Installation & Running Locally

```bash
git clone https://github.com/taha-ml-ai/users-dashboard.git
cd accessible-dashboard
npm install
npm start
