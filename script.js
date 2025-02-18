const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.scroll_page');
  if (sections[index]) {
    sections[index].scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', () => {
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
});