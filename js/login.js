document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Credenciales quemadas (solo para fines educativos)
    const validUsername = 'user';
    const validPassword = 'password';

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === validUsername && password === validPassword) {
            // Redirigir a la página principal si las credenciales son correctas
            window.location.href = 'index.html';
        } else {
            // Mostrar un mensaje de error si las credenciales son incorrectas
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        }
    });
});