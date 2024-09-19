import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/authSlice';

const Home: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
