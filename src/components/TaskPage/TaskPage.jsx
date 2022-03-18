import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
// import './TaskPage.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';


function TaskPage() {

  
  const dispatch = useDispatch();
  const tasks = useSelector(store => store.taskReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_TASKS' });
  }, []);

  return (
    <>
    <div className="app-container">
    <TaskForm />
    
      <TaskList />
      </div>
     
     

    </>

  );
}

// this allows us to use <App /> in index.js
export default TaskPage;
