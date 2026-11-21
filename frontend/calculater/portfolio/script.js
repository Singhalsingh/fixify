Frontend Developer",
  "AI Enthusiast",
  "BCA Student",
  "Future AI Engineer"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typing = document.querySelector('.typing');

function typeEffect(){

  if(charIndex < text[textIndex].length){

    typing.textContent += text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,speed);

  }
  else{

    setTimeout(eraseEffect,1500);
  }
}

function eraseEffect(){

  if(typing.textContent.length > 0){

    typing.textContent = text[textIndex].substring(0,typing.textContent.length - 1);

    setTimeout(eraseEffect,50);
  }
  else{

    textIndex++;

    if(textIndex >= text.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect,500);
  }
}

window.onload = typeEffect;