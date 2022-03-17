import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem'; 
// import Table from 'react-bootstrap/Table'
import TaskEdit from '../TaskEdit/TaskEdit';

function TaskList(){
    const dispatch = useDispatch();
    const [updatedTasks, setUpdatedTasks] = useState([]);
    const tasks = useSelector(store => store.taskReducer);
    const userId = useSelector(store => store.user.id);
    const [editFormData, setEditFormData] = useState({
      taskName: '',
      taskDescription: ''
      
    });

    const handleEditFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_TASKS' });
      }, []);

      const [editTaskID, setTaskID] = useState(null)

      const handleEditClick = (event, task) =>{
        event.preventDefault();
        console.log(task.id);
        setTaskID(task.id)

        const formValues = {
          taskName: task.name,
          taskDescription: task.description,
          
        };
        setEditFormData(formValues);
      }

      const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedTask = {
          id: editTaskID,
          name: editFormData.taskName,
          description: editFormData.taskDescription,
          
        };

        dispatch({ type: 'EDIT_TASK', payload: editedTask });
    
        const newTasks = [...tasks];
    
        const index = updatedTasks.findIndex((task) => task.id === editTaskID)
    
        newTasks[index] = editedTask;
    
        setUpdatedTasks(newTasks)
        console.log(newTasks);
        setTaskID(null);
      };
      const handleCancelClick = () => {
        setTaskID(null);
      };

      


    return (
        <>
        <form onSubmit={handleEditFormSubmit} >
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
                      handleEditFormChange ={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                      />
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