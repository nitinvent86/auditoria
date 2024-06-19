

    function redirect(sistema) {
        // Encriptar y almacenar el nombre de usuario en sessionStorage
        sessionStorage.setItem('constSistema', btoa(sistema));
        window.location.href="Login/login.html"; 
    }  


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedSystem = sessionStorage.getItem('constSistema');
            
            // Validar usuario y contraseña (Simulación)
            if (username && password) {
                // Encriptar y almacenar el nombre de usuario en sessionStorage
                sessionStorage.setItem('username', btoa(username));

                if (atob(storedSystem) === "valoracionriesgo") {

                    // Redirigir a la página home
                    window.location.href = '../VRAI/VRAI.html';
                } else if (atob(storedSystem) === "legalizacion") {
                    // Redirigir a la página home
                    window.location.href = '../Legalizacion/legalizacion.html';
                }

            } else {
                alert('Por favor, ingrese un usuario y contraseña válidos.');
            }
        });
    }
    
    const userSpan = document.getElementById('user');
    
    if (userSpan) {
        const storedUsername = sessionStorage.getItem('username');
        
        if (storedUsername) {
            // Desencriptar y mostrar el nombre de usuario
            userSpan.textContent = atob(storedUsername);
        } else {
            // Si no hay usuario en sessionStorage, redirigir al login
            window.location.href = '../index.html';
        }
    }
});


function togglePassword() {

    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'eye-slash.png'; // Use the path to your 'eye-slash' icon
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'eye.png'; // Use the path to your 'eye' icon
    }
}



