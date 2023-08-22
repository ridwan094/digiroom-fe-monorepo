import React from 'react';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';
import Login from '@/components/Login';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login({ username: 'example_user' });
    router.push('/');
  };

  return (
    <React.Fragment>
      <Login onLogin={handleLogin} />
    </React.Fragment>
  );
};

export default LoginPage;
