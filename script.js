// Redirigir al hacer clic en los botones
document.getElementById('continueBtn')?.addEventListener('click', function () {
  window.location.href = 'evolucion.html';
});

document.getElementById('homeBtn')?.addEventListener('click', function () {
  window.location.href = 'index.html';
});

// Mostrar contenido de las tarjetas en el panel inferior
const cards = document.querySelectorAll('.card');
const infoPanel = document.getElementById('infoPanel');

let activeCard = null; // Variable para rastrear la tarjeta activa

cards.forEach(card => {
  card.addEventListener('click', () => {
    const text = card.getAttribute('data-text');
    infoPanel.textContent = text;
    infoPanel.classList.remove('empty');

    // Remover la clase 'active' de la tarjeta anteriormente activa
    if (activeCard) {
      activeCard.classList.remove('active');
    }

    // Agregar la clase 'active' a la tarjeta actual
    card.classList.add('active');
    activeCard = card; // Actualizar la tarjeta activa
  });
});

// Limpiar el panel si no hay texto
if (infoPanel) {
  infoPanel.classList.add('empty');
}

// Funcionalidad de la tarjeta principal (solo en index.html)
if (document.getElementById('mainCardTitle')) {
  document.addEventListener('DOMContentLoaded', () => {
    const mainCardTitle = document.getElementById('mainCardTitle');
    const mainCardContent = document.getElementById('mainCardContent');
    const toggleBtn = document.getElementById('toggleBtn');

    // Alternar entre abrir y cerrar la tarjeta
    const toggleCard = () => {
      if (mainCardContent.classList.contains('hidden')) {
        // Abrir la tarjeta
        mainCardContent.classList.remove('hidden');
        mainCardTitle.textContent = 'Escenario inicial';
        toggleBtn.textContent = '✕';
      } else {
        // Cerrar la tarjeta
        mainCardContent.classList.add('hidden');
        mainCardTitle.textContent = 'Escenario inicial';
        toggleBtn.textContent = '▼';
      }
    };

    // Evento para el título
    mainCardTitle.addEventListener('click', toggleCard);

    // Evento para el botón
    toggleBtn.addEventListener('click', toggleCard);
  });
}

// Funcionalidad del botón "Resultado" (solo en evolucion.html)
if (document.getElementById('resultBtn')) {
  document.getElementById('resultBtn').addEventListener('click', function () {
    const evolutionGrid = document.getElementById('evolutionGrid');
    const resultGrid = document.getElementById('resultGrid');
    const buttonsContainer = document.querySelector('.buttons-container');

    // Ocultar el contenido actual
    evolutionGrid.classList.add('hidden');
    buttonsContainer.classList.add('hidden');

    // Mostrar el nuevo contenido
    resultGrid.classList.remove('hidden');

    // Simular clic en la primera tarjeta para mostrar su contenido
    setTimeout(() => {
      const firstCard = resultGrid.querySelector('.card');
      if (firstCard) {
        firstCard.click();
      }
    }, 100); // Pequeño retraso para asegurar que el DOM esté actualizado
  });
}
