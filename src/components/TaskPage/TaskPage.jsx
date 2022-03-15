import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import './TaskPage.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

function TaskPage() {

  
  const dispatch = useDispatch();
  const tasks = useSelector(store => store.taskReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_TASKS' });
  }, []);

  return (
    <div className="app-container">

      {/* <table >
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description/Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {tasks.map((task, i) => {
            return (
              <tr key={i} >

                <td>{task.name}</td>
                <td>{task.description}</td>
                <td> 
                 <button>Start</button>
                 <button>Delete</button>
                 <button>Edit</button>
        
                 </td>

              </tr>
            )
          })}
        </tbody>
      </table> */}
      <TaskList />
      <TaskForm />

      {/* <LogOutButton className="btn" /> */}
    </div>

  );
}

// this allows us to use <App /> in index.js
export default TaskPage;
