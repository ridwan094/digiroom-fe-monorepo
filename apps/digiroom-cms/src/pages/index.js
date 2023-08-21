import React, { useState } from 'react';
import DashboardPromo from './dashboard-promo';
import LoginPage from './login';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      {isLoggedIn ? <DashboardPromo /> : <LoginPage onLogin={handleLogin} />}
    </React.Fragment>
  );
}
