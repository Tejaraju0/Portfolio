function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const titles = ["Frontend Developer", "Software Engineer"];
let currentTitleIndex = 0;
let charIndex = 0;
let isErasing = false;
const typingSpeed = 100; 
const erasingSpeed = 60;  
const delayBetweenTitles = 1000; 

function typeEffect() {
  const titleElement = document.querySelector(".dynamic-text");
  
  
  if (isErasing) {
    titleElement.textContent = titles[currentTitleIndex].substring(0, charIndex--);
  } 
  
  else {
    titleElement.textContent = titles[currentTitleIndex].substring(0, charIndex++);
  }

  
  if (!isErasing && charIndex === titles[currentTitleIndex].length) {
    setTimeout(() => isErasing = true, delayBetweenTitles);
  }

  
  if (isErasing && charIndex === -1) {
    isErasing = false;
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    charIndex = 0; 
  }

  
  const speed = isErasing ? erasingSpeed : typingSpeed;
  setTimeout(typeEffect, speed);
}


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, delayBetweenTitles);
});

AOS.init({
  duration: 1000,
  once: false,
  
});

const colors = ['#e34f26', '#264de4', '#ff568c', '#61dafb', '#68a063', '#483d8b'];
const techStacks = document.querySelectorAll('.tech-stack');

techStacks.forEach((stack) => {
    const tags = stack.querySelectorAll('.hashtag');
    tags.forEach((tag, index) => {
        tag.style.color = colors[index % colors.length];
    });
});


(function() {
  emailjs.init({
    publicKey: "hgO78m0P8lYixEGab",
  });
})();

function sendMail(event){
  event.preventDefault();

  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  };

  emailjs.send('service_f24ounj', 'template_r5qlza7', params).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset(); 
  },
  (error) => {
    console.log('FAILED...', error);
    alert("Failed to send message. Please try again.");
  },
);
}
   
  