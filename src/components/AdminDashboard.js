import React, { useState, useEffect } from 'react';
import '../styles/admin.css';

const roles = ['admin', 'technician', 'customer']; // Lista de roles disponibles

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);

        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        setAppointments(storedAppointments);
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
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const handleDeleteUser = (username) => {
        const updatedUsers = users.filter(user => user.username !== username);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setSuccessMessage(`Usuario ${username} eliminado exitosamente.`);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const addAppointment = () => {
        const newAppointment = { date, time, reserved: false };
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        setDate('');
        setTime('');
        setSuccessMessage(`Cita agregada para el ${date} a las ${time}.`);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const deleteAppointment = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        setSuccessMessage(`Cita eliminada exitosamente.`);
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    return (
        <div className="admin-container">
            <h2>Panel de Administración</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <h3>Gestión de Usuarios</h3>
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
                                <button
                                    onClick={() => handleRoleChangeButtonClick(user.username, user.role)}
                                    disabled={user.role === 'admin'}
                                >
                                    Cambiar Rol
                                </button>
                                <span>&nbsp;&nbsp;</span>
                                <button onClick={() => handleDeleteUser(user.username)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <h3>Gestión de Citas</h3>
            <div className="form-group">
                <label>Fecha:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Hora:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <button onClick={addAppointment}>Añadir Cita</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <button onClick={() => deleteAppointment(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
