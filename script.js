document.addEventListener('DOMContentLoaded', () => {
  console.log('Site de lore do Minecraft carregado com sucesso!');

  // Animação suave de entrada para seções principais
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.8s ease';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Suave highlight no menu
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = '#66ffcc');
    link.addEventListener('mouseout', () => link.style.color = '#00ffcc');
  });
});
