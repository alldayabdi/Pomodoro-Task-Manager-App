import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);
  useEffect(() => {
    dispatch({ type: 'FETCH_TASKS' });
  }, []);
  return (
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2> */}
      {/* <p>Your ID is: {user.id}</p> */}
      <LogOutButton className="btn" />
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
