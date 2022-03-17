import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem'; 
// import Table from 'react-bootstrap/Table'
import TaskEdit from '../TaskEdit/TaskEdit';

function TaskList(){
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.taskReducer);
    const [editFormData, setEditFormData] = useState({
      taskName: '',
      taskDescription: '',
      
    });

    const handleEditFormChange = (event =>{
      event.preventDefault();
      const fieldName = event.target.getAttribute("name")
      const fieldValue = event.target.value;
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    })

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
      }, []);

      const [editTaskID, setTaskID] = useState(null)

      const handleEditClick = (event, task) =>{
        event.preventDefault();
        setTaskID(task.id)
        const formValues = {
          taskName: task.name,
          taskDescription: task.description,
          
        };
        setEditFormData(formValues);
      }

      


    return (
        <>
        <form >
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
                  <Fragment key={i}>
                    {editTaskID === task.id ? (
                     <TaskEdit editFormData= {editFormData}
                      handleEditFormChange ={handleEditFormChange} />
                     ): (
                     <TaskItem  task={task} 
                     handleEditClick ={handleEditClick}
                     />
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