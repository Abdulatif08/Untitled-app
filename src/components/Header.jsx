import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <header>
      <div className="container">
       <div className="header-section">
         <img src="/src/assets/logo.png" alt="Lucid Logistics Academy" className="logo" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div
            className={`theme-toggle ${darkMode ? 'dark' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>☀️</span>
            <span>🌙</span>
            <div className="circle"></div>
          </div>
          <span className="phone">+998 (55) 500-37-77</span>
        </div>
       </div>
      </div>
    </header>
  );
}