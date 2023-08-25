import React from 'react';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';
import Login from '@/components/Login';

const urlApi = 'api/login';
// const urlApi = 'http://192.168.8.224:61084/login/authenticate';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3004',
        },
        body: JSON.stringify({ username: 'agustian.isrul', password: 'agustian.isrul' }),
      });

      if (response.status === 201) {
        const userData = await response.json();
        login(userData);
        router.push('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <React.Fragment>
      <Login onLogin={handleLogin} />
    </React.Fragment>
  );
};

export default LoginPage;
