// songbook.js

const STORAGE_KEY = 'versecraft_songbook';

export function saveVerse(text, theme) {
  if (!text.trim()) return;

  const entries = loadVerses();
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    text,
    theme
  };

  entries.unshift(entry); // newest first
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function loadVerses() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function renderSongbook() {
  const container = document.getElementById('saved-verses');
  container.innerHTML = '';

  const entries = loadVerses();

  if (entries.length === 0) {
    container.innerHTML = '<li>No saved verses yet.</li>';
    return;
  }

  entries.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${entry.date}</strong> <em style="color:#888;">[${entry.theme}]</em><br/>
      <pre>${entry.text}</pre>
    `;
    container.appendChild(li);
  });
}