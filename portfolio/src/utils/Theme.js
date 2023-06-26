import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Theme() {

    const { lightMode, toggleLightMode } = useContext(ThemeContext);

    return(
        <div className={` toggleThemeMenu flex ${lightMode ? 'light-mode' : ''}`}>
        <label className="switch">
          <input type="checkbox" checked={lightMode} onChange={toggleLightMode} />
          <span className="slider"></span>
        </label>
      </div>
    )
}

export default Theme;