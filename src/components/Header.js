import React from 'react';
import SunIcon from '../assets/icon-sun.svg';
import MoonIcon from '../assets/icon-moon.svg';


function Header({ theme, setTheme }) {
    const themeIcon = theme === 'dark' ? `${MoonIcon}` : `${SunIcon}`;

    const toggleTheme = () => {
        const themeText = document.getElementById('theme-text');

        if (themeText.innerHTML === 'light') {
            setTheme('dark');
            themeText.innerHTML = 'dark';
        } else {
            setTheme('light');
            themeText.innerHTML = 'light';
        }
    }

    return (
        <div className={`header header-${theme}`}>
            <div className="header__name">
                <h1>devfinder</h1>
            </div>

            <div className="header__theme">
                <span id="theme-text" onClick={toggleTheme}>light</span><img id="theme-icon" src={themeIcon} alt="color-theme" />
            </div>
        </div>
    )
}

export default Header; 