document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const mail = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const authService = new AuthService();
            const authResponse = await authService.login(mail, password); // Recebe o objeto AuthResponse
            localStorage.setItem('authToken', JSON.stringify(authResponse.token));
            localStorage.setItem('profile', JSON.stringify(authResponse.profile)); // Armazena o perfil
            window.location.href = 'home.html';
        } catch (error) {
            errorMessage.textContent = error.message;
            errorMessage.classList.remove('d-none');
        }
    });
});


