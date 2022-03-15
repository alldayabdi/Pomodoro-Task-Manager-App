import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(){
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
      }, []);


    return (
        <>
        <table>
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
                    
                    <TaskItem key={i} task={task} />
                    
                )
                
            })}
            
        

        </tbody>
        </table>
        </>

    )


}

export default TaskList