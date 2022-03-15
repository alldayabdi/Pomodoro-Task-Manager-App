import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  const [description, setDescription] = useState('');
  const [taskName, setTaskName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // let bundledObject = {
    //   description: description,
    //   taskName: taskName,
    //   user_id: userId
    // }
    console.log('Clicked!!');
  }

  const tasks = useSelector(store => store.taskReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_TASKS' });
  }, []);

  return (
    <div className="app-container">
      {/* <h2>Welcome, {user.username}!</h2> */}
      {/* <p>Your ID is: {user.id}</p> */}

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
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter Task Name"
          onChange={(event) => setTaskName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Task Description"
          onChange={(event) => setDescription(event.target.value)}
        />
    
        <button type="submit">Add to Task List!</button>
      </form>
      {/* <LogOutButton className="btn" /> */}
    </div>

  );
}

// this allows us to use <App /> in index.js
export default UserPage;
