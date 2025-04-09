// themeManager.js

let currentTheme = 'dreamy';

export function initThemeSelector() {
  const selector = document.getElementById('theme');

  selector.addEventListener('change', (e) => {
    currentTheme = e.target.value;
    applyTheme(currentTheme);
  });

  // Apply initial theme on load
  applyTheme(currentTheme);
}

export function applyTheme(theme) {
  document.body.className = ''; // clear previous theme
  document.body.classList.add(`theme-${theme}`);
}

export function getCurrentTheme() {
  return currentTheme;
}