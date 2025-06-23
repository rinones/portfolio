document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion-main-block').forEach(block => {
    block.addEventListener('click', function () {
      const content = this.parentNode.querySelector('.accordion-content');
      if (!content) return;
      const isOpen = content.style.display === 'block';
      // Cierra todos los acordeones
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      // Abre el seleccionado si estaba cerrado
      if (!isOpen) content.style.display = 'block';
    });
  });
});