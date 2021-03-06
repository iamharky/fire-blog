import React, {useEffect, useState} from 'react';
import Toggle from 'react-toggle';
import ToggleIcon from '../../atoms/ToggleIcon';
import './index.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const colors = {
      light: {color: '#222', bgColor: '#fff'},
      dark: {color: '#fff', bgColor: '#222'},
    }[theme];
    // Change theme variables
    document.documentElement.style.setProperty('--theme-bg', colors.bgColor);
    document.documentElement.style.setProperty('--theme-txt', colors.color);
    // Change app theme meta
    document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.bgColor);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Toggle
      defaultChecked={theme === 'light'}
      className="right"
      icons={{
        checked: <ToggleIcon name="sun" color="yellow" />,
        unchecked: <ToggleIcon name="moon" color="lightgrey" />,
      }}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeToggle;
