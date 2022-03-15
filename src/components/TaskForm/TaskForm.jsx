import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TaskForm() {
    const [description, setDescription] = useState('');
    const [taskName, setTaskName] = useState('');
    const userId = useSelector(store => store.user.id);

    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);

    const handleSubmit = () => {
        let bundledObject = {
            description: description,
            name: taskName,
            user_id: userId
        }
        dispatch({ type: 'ADD_TASK', payload: bundledObject });

        setDescription('');
        setTaskName('');

    }

    return (
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
            <br />


            <button type="submit">Add to Task List!</button>
        </form>
    )



}

export default TaskForm;