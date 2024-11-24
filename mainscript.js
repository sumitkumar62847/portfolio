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

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(bgchange, 100);
});
function bgchange() {
  if (window.scrollY < 10) {
    document.getElementById("header01").style.backgroundColor = 'rgb(76, 76, 255)';  
    document.getElementById("header01").style.opacity = '1';
  
    document.querySelector(".logoimage").style.borderColor = 'white'; 
    document.querySelector(".mainlogo").style.color = 'white';
    document.getElementsByClassName("checkbtn")[0].style.color = 'white'; 
    document.getElementsByClassName("ulcontainer")[0].style.backgroundColor = 'rgb(76, 76, 255)';  

    let elements = document.getElementsByClassName('nav-a');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'white';
    }


  } 
  else {
    document.getElementById("header01").style.backgroundColor = 'white';
    document.getElementById("header01").style.opacity = '0.8';

    document.querySelector(".mainlogo").style.color = 'rgb(2,2, 255)';
    document.getElementsByClassName("checkbtn")[0].style.color = 'rgb(2,2, 255)'; 
    document.getElementsByClassName("ulcontainer")[0].style.backgroundColor = 'white'; 

    document.querySelector(".logoimage").style.borderColor = 'rgb(2,2, 255)'; 
    let elements = document.getElementsByClassName('nav-a');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = 'rgb(2,2, 255)';
    }

  }
  setTimeout(bgchange, 100);
}



  
  
  
