import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem'; 
// import Table from 'react-bootstrap/Table'
import TaskEdit from '../TaskEdit/TaskEdit';

function TaskList(){
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
      }, []);

      const [editTaskID, setTaskID] = useState(17)


    return (
        <>
        <form>
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
                  <Fragment>
                    {editTaskID === task.id ? (
                     <TaskEdit  />
                     ): (
                     <TaskItem key={i} task={task} />
                     )} 
                    
                    </Fragment>
                 
                )
                
            })}
            
        </tbody>
        </table>
        </form>
        </>

    )


}

export default TaskList