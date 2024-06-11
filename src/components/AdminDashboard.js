import React, { useState, useEffect } from 'react';
import '../styles/admin.css';

const roles = ['admin', 'technician', 'customer']; // Lista de roles disponibles

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const handleChangeRole = (username, newRole) => {
        const updatedUsers = users.map(user =>
            user.username === username ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleRoleChangeButtonClick = (username, newRole) => {
        handleChangeRole(username, newRole);
        setSuccessMessage(`Rol de ${username} cambiado a ${newRole} exitosamente.`);
        // Limpiar el mensaje después de unos segundos
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const handleDeleteUser = (username) => {
        const updatedUsers = users.filter(user => user.username !== username);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setSuccessMessage(`Usuario ${username} eliminado exitosamente.`);
        // Limpiar el mensaje después de unos segundos
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="admin-container">
            <h2>Panel de Administración</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleChangeRole(user.username, e.target.value)}
                                >
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                {/* Botón para cambiar el rol */}
                                <button
                                    onClick={() => handleRoleChangeButtonClick(user.username, user.role)}
                                    disabled={user.role === 'admin'} // Evita cambiar el rol del administrador
                                >
                                    Cambiar Rol
                                </button>
                                <span>&nbsp;&nbsp;</span>
                                {/* Botón para eliminar usuario */}
                                <button onClick={() => handleDeleteUser(user.username)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
