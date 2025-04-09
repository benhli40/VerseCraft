// app.js

import { initThemeSelector, getCurrentTheme } from './themeManager.js';
import { initEditor, getCurrentText } from './editor.js';
import { saveVerse, renderSongbook } from './songbook.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSelector();
  initEditor();
  renderSongbook();

  const saveBtn = document.getElementById('save-btn');
  saveBtn.addEventListener('click', () => {
    const text = getCurrentText();
    const theme = getCurrentTheme();
    saveVerse(text, theme);
    renderSongbook();

    // Optional: clear textarea after saving
    document.getElementById('verse-input').value = '';
    document.getElementById('feedback').textContent = '';
  });
});