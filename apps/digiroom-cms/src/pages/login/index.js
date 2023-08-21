import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import { Button, Input } from 'ui';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';
import Login from '@/components/Login';

const LoginPage = ({ onLogin }) => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    login({ username: 'example_user' });
    onLogin();
    router.push('/promo');
  };

  return (
    <React.Fragment>
      <Login onLogin={handleLogin} />
    </React.Fragment>
  );
};

export default LoginPage;
