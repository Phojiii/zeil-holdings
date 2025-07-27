document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.scroll-section');
  const bullets = document.querySelectorAll('.bullets .dot');
  const isMobile = window.innerWidth <= 768;

  let isScrolling = false;
  let currentSectionIndex = 0;

  // Loader logic
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1500);

  // Click on bullets (desktop only)
  if (!isMobile) {
    bullets.forEach((dot, i) => {
      dot.dataset.index = i;
      dot.addEventListener('click', () => {
        currentSectionIndex = i;
        scrollToSection(currentSectionIndex);
      });
    });
  }

  function updateBullets(index) {
    bullets.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      updateBullets(index);
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  }

  // Mouse scroll (desktop only)
  if (!isMobile) {
    window.addEventListener('wheel', function (e) {
      if (isScrolling) return;
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
      }
    });
  }

  // Reveal effect
  const reveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal();
});
