import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import './TaskForm.css'
import Portal from '@mui/material/Portal';

function TaskForm() {
    const [show, setShow] = React.useState(false);

    const [description, setDescription] = useState("");
    const [taskName, setTaskName] = useState("");
    const userId = useSelector(store => store.user.id);

    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);
    const container = React.useRef(null);

    const handleClick = () => {
        setShow(!show);
    };


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
            <button className='plusbutton' onClick={handleClick}>
                {show ? '-' : '+'}
            </button>
            {show ? (
                <Portal container={container.current}>
                    <form onSubmit={handleSubmit}>
                        <TextField required id="outlined-basic" label="Task Name" variant="outlined"
                            type="text"
                            placeholder="Enter Task Name"
                            onChange={(event) => setTaskName(event.target.value)}
                        />

                        <TextField required id="filled-basic" label="Task Description" variant="filled"
                            type="text"
                            placeholder="Enter Task Description"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <br />


                        <button className='taskList' type="submit">Add to Task List!</button>


                    </form>

                </Portal>
            ) : null}
        </div>
    )



}

export default TaskForm;