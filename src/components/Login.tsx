import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate, Link} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import './css/Login.css'
import logo from './img/Rectangle 291.png'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(email));
    navigate('/');
  };

  return (
    <div>
      <HeaderComponent auth={undefined} logOut={()=>{}}/>
        <main className='main'>
          <div className='login'>
            <div className="name">Login</div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
                />
              <div className='forgot'>
                <Link to="#">Forgot password?</Link>
              </div>
              
              <button type="submit">Sing In</button>
              <div className='create-acc'>
                <span className='acc'>Don’t have account? </span>
                <Link to="#">Sing Up</Link>
              </div>
            </form>
          </div>
          <div className='bg'>
            <img src={logo} alt="" />
          </div>
        </main>
    </div>
  );
};

export default Login;
