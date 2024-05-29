import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.username === username && parsedUser.password === password) {
                alert('Inicio de sesión exitoso!');
                // Aquí podrías redirigir al usuario a otra página o realizar otras acciones necesarias
            } else {
                alert('Credenciales incorrectas');
            }
        } else {
            alert('Usuario no encontrado');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="register-link">
                ¿No tienes una cuenta? <a href="/register">Regístrate Aquí</a>
            </p>
        </div>
    );
};

export default Login;

