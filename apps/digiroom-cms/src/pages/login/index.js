import React from 'react';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';
import Login from '@/components/Login';
import { logInAuth } from '../../service/auth/login';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const temporaryUser = { username: 'agustian.isrul', password: 'agustian.isrul' };
      const response = await logInAuth(temporaryUser);
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
