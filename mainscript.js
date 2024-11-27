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

window.addEventListener('scroll', () => {
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

});

window.addEventListener('DOMContentLoaded', () =>{
  setTimeout(scrollhide, 100);});

  function scrollhide(){
    if(window.scrollY < 10) {
      document.querySelector(".scrollup").style.display='none';
    }
    else{
      document.querySelector(".scrollup").style.display='block';
    }
    setTimeout(scrollhide, 100);

  }
  


document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    });
  });

});


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(highlight , 100);
});

function highlight(){

const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-a");

  let currentSection = "";

  
  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
      }
  });

  navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
      }
  });

  setTimeout(highlight, 100);
}

document.getElementById("formid").addEventListener("submit", function (event) {
  event.preventDefault(); 
  setTimeout(()=>{
    this.reset();
  },500); 
  setTimeout(()=>{
    const alertBox = document.querySelector(".hidden");
    // let data = document.querySelectorAll(".removedata");
    alertBox.style.display = "flex";
    

  }, 1000);
 
});


document.getElementById("closealert").addEventListener("click", function () {
  const alertBox = document.querySelector(".hidden");
  alertBox.style.display = "none";
});


  
  
  
