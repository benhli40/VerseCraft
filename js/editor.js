// editor.js

import { analyzeText } from './flowCheck.js';

let currentText = '';

export function initEditor() {
  const textarea = document.getElementById('verse-input');
  const feedback = document.getElementById('feedback');

  textarea.addEventListener('input', () => {
    currentText = textarea.value;
    const result = analyzeText(currentText);
    feedback.textContent = result;
  });
}

export function getCurrentText() {
  return currentText;
}