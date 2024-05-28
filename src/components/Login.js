import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page">
      <h2>Log In</h2>
      <input type="email" placeholder="Correo" />
      <input type="password" placeholder="Contraseña" />
      <button>Login</button>
      <p>¿No tienes una cuenta? <Link to="#signup">Regístrate Ahora</Link></p>
    </div>
  );
}

export default Login;
