import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import './TaskForm.css'

function TaskForm() {
    const [description, setDescription] = useState("");
    const [taskName, setTaskName] = useState("");
    const userId = useSelector(store => store.user.id);

    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);

    const handleSubmit = () => {
        swal({
            title: "You added a task!",
            text: "Make sure to finish it!",
            icon: "success",
            button: "OK!",
          });
        let bundledObject = {
            description: description,
            name: taskName,
            user_id: userId
        }
        dispatch({ type: 'ADD_TASK', payload: bundledObject });

        setDescription("");
        setTaskName("");

    }

    return (
        <div className='formContainer'>
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Task Name" variant="outlined" 
                type="text"
                placeholder="Enter Task Name"
                onChange={(event) => setTaskName(event.target.value)}
            />

            <TextField id="filled-basic" label="Task Description" variant="filled"
                type="text"
                placeholder="Enter Task Description"
                onChange={(event) => setDescription(event.target.value)}
            />
            <br />


            <button className='taskList' type="submit">Add to Task List!</button>
        </form>
        </div>
    )



}

export default TaskForm;