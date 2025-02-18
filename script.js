const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.scroll_page');
  const buttons = document.querySelectorAll('.navigation-buttons button');
  
  if (sections[index]) {
    sections[index].scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
   
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll_page');
  const navButtons = document.querySelectorAll('.navigation-buttons button');
  
  const updateActiveButton = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      
      // Check if the section is mostly visible in the viewport
      if (rect.top <= windowHeight/3 && rect.bottom >= windowHeight/3) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        navButtons[index].classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveButton);
  window.addEventListener('resize', updateActiveButton);
  
  updateActiveButton();
  
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const themeToggle = document.getElementById('themeToggle');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'light';
  }

  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});