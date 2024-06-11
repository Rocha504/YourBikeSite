// src/components/Register.js
import React, { useState } from 'react';
import '../styles/register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden!");
            return;
        }

        const newUser = {
            name: name,
            phone: phone,
            username: username,
            password: password,
            role: 'customer', // Por defecto, los nuevos usuarios son clientes
        };

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        alert("Usuario creado exitósamente");
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Número Telefónico:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
