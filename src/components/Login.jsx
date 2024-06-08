import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  Cookies.set('email', email, { expires: 7 });
  Cookies.set('password', password, { expires: 7 });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://tu-api-backend.com/login', {
        email,
        password,
      });
      toast.success('Inicio de sesión exitoso')
      // Puedes redirigir al usuario a otra página, por ejemplo:
      // window.location.href = '/dashboard';
    } catch (err) {
      // Manejo de errores
      toast.error('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Contraseña</label>
            <input
              min={8}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <Link
              to="/register"
              className="w-full text-center bg-gray-300 text-black py-2 rounded hover:bg-gray-400 ml-2"
            >
              Registrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

