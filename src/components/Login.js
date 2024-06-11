import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = storedUsers.find(user => user.username === username && user.password === password);

        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Inicio de sesión exitoso!');
            navigate('/');
        } else {
            alert('Credenciales incorrectas');
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
