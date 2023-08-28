import React, { useState } from 'react';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';
import Login from '@/components/Login';
import { logInAuth } from '../../service/auth/login';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const temporaryUser = { username, password };
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
      <Login 
        onChangeUsername={(value) => setUsername(value.target.value)}
        onChangePassword={(value) => setPassword(value.target.value)}
        onLogin={handleLogin} 
      />
    </React.Fragment>
  );
};

export default LoginPage;
