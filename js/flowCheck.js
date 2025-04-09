// flowCheck.js

const moodKeywords = {
  hopeful: ['light', 'rise', 'dream', 'open', 'grow', 'shine'],
  dark: ['shadow', 'fall', 'cold', 'night', 'empty', 'lost'],
  dreamy: ['float', 'soft', 'cloud', 'drift', 'mist', 'glow'],
  fire: ['burn', 'wild', 'flame', 'roar', 'spark', 'rage'],
  void: ['echo', 'void', 'fade', 'nothing', 'static', 'glitch']
};

export function analyzeText(text) {
  const lines = text.trim().split('\n').filter(line => line.trim() !== '');
  const words = text.trim().split(/\s+/).filter(Boolean);

  const feedback = [];

  // Word + line metrics
  const wordCount = words.length;
  const lineCount = lines.length;
  const avgLineLength = lineCount > 0 ? Math.round(wordCount / lineCount) : wordCount;

  feedback.push(`📝 ${wordCount} words • ${lineCount} lines • ~${avgLineLength} words/line`);

  // Detect mood words
  const tagMatches = detectMoodKeywords(words);

  if (tagMatches.length > 0) {
    feedback.push(`🎭 Detected tone: ${tagMatches.join(', ')}`);
  }

  // Repetition check
  const repeats = findRepetitions(words);
  if (repeats.length > 0) {
    feedback.push(`🔁 Repeats: ${repeats.join(', ')}`);
  }

  return feedback.join(' • ');
}

// Finds mood tags based on detected keywords
function detectMoodKeywords(words) {
  const wordSet = new Set(words.map(w => w.toLowerCase()));
  const matches = [];

  for (const [tag, keys] of Object.entries(moodKeywords)) {
    if (keys.some(k => wordSet.has(k))) {
      matches.push(tag);
    }
  }

  return matches;
}

// Finds repeated words (simple version)
function findRepetitions(words) {
  const counts = {};
  words.forEach(word => {
    const w = word.toLowerCase();
    counts[w] = (counts[w] || 0) + 1;
  });

  return Object.keys(counts).filter(k => counts[k] > 2);
}