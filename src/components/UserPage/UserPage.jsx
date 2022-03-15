import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import './UserPage.css'
import TaskForm from '../TaskForm/TaskForm';

function UserPage() {

  const dispatch = useDispatch();
  const tasks = useSelector(store => store.taskReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_TASKS' });
  }, []);

  return (
    <div className="app-container">

      <table >
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description/Notes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>

          {tasks.map((task, i) => {
            return (
              <tr key={i} >

                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <TaskForm />

      {/* <LogOutButton className="btn" /> */}
    </div>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
