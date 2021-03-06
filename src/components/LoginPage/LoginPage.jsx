import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { width } from '@mui/system';
// import './login.style.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className='login-style'>
      <LoginForm />

      <center>
        <button id='register'
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
