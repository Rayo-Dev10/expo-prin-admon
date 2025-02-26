// Redirigir al hacer clic en los botones
document.getElementById('continueBtn')?.addEventListener('click', function () {
    window.location.href = 'fayol.html';
  });
  
  document.getElementById('homeBtn')?.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
  
  // Mostrar contenido de las tarjetas en el panel inferior
  const cards = document.querySelectorAll('.card');
  const infoPanel = document.getElementById('infoPanel');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const text = card.getAttribute('data-text');
      infoPanel.textContent = text;
      infoPanel.classList.remove('empty');
    });
  });
  
  // Limpiar el panel si no hay texto
  if (infoPanel) {
    infoPanel.classList.add('empty');
  }