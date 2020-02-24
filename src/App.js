import React, { useEffect } from 'react';
import './App.scss';

import LoginForm from './components/LoginForm';

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      document.querySelector('#login').style.height = '100%';
      document.querySelector('#login').style.display = 'block';
    } else {
      document.querySelector('#login').style.height = '0';
      document.querySelector('#login').style.display = 'none';
      if (window.location.pathname === '/login') {
        window.history.pushState(null, null, '/app1');
      }
    }
  });

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

export default App;
