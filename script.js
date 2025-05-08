// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Fade in efecto al hacer scroll
    const secciones = document.querySelectorAll('main, .proyecto, .logos img');
    const mostrarElemento = (elemento) => {
      const top = elemento.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        elemento.style.opacity = 1;
        elemento.style.transform = 'translateY(0)';
      }
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mostrarElemento(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    secciones.forEach(sec => {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(30px)';
      sec.style.transition = 'all 0.8s ease';
      observer.observe(sec);
    });
  });
  