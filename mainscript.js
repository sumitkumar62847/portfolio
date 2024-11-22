const typingText = document.querySelector(".changingtext");
const phrases = ['Developer', 'Designer', 'Engineer', 'Creator'];
let phraseIndex = 0;
let charIndex = 0;
let typingDelay = 90; 
let erasingDelay = 70; 
let nextPhraseDelay = 1200;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typingText.textContent += phrases[phraseIndex][charIndex];
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, nextPhraseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingDelay);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, nextPhraseDelay);
});
