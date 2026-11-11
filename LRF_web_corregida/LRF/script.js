document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  if (!form) return;
  const resultado = document.getElementById('resultado');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (resultado) {
      resultado.className = 'alert alert-info mt-3';
      resultado.textContent = 'Formulario de demostración: conectá un sistema de autenticación para habilitar el inicio de sesión real.';
    }
  });
});
