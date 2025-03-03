'use strict';
const hamburger = document.getElementById('hamburger');
const burgerMenu = document.getElementById('burger-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    burgerMenu.classList.toggle('active'); 
});

const closeBtns = document.querySelectorAll("#burger-menu a"); 
closeBtns.forEach(function(link) {
    link.addEventListener("click", function(e) {
        burgerMenu.classList.remove("active"); 
        hamburger.classList.remove("active");  
    });
});

//Get current date and time
const date = document.querySelector('.footer__current__date__box');
const options = {
  year: 'numeric', 
  month: '2-digit',  
  day: '2-digit',  
  hour: '2-digit',  
  minute: '2-digit',  
  second: '2-digit',  
  hour12: true,
  timeZone: 'Europe/Lisbon'
};

function getDate() {
  const currentDate = new Date(); 
  const formattedDate = currentDate.toLocaleString('pt-BR', options);  
  date.textContent = formattedDate; 
}
getDate();
setInterval(getDate, 1000);

/*dark-light-mode */
const themeButton = document.querySelector('.header__dark-light');
const themeIcon = themeButton.querySelector('.header__dark-light__img');
const body = document.body;

// Check the current theme in localStorage or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.src = './assets/icons/dark-mode.svg'; 
} else {
  themeIcon.src = './assets/icons/light-mode.svg'; 
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  themeIcon.src = isDarkMode ? 'assets/icons/dark-mode.svg' : 'assets/icons/light-mode.svg';
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

/*form validation */

