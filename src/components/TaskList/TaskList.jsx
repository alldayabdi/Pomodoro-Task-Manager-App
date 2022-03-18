import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem'; 
// import Table from 'react-bootstrap/Table'
import TaskEdit from '../TaskEdit/TaskEdit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import swal from 'sweetalert';


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
        console.log('In the edit save');
    
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
      const handleDeleteClick = (taskId) => {
        swal({
                  title: 'Are you sure?',
                  text: 'Once deleted, you will not be able to recover this task!',
                  icon: 'warning',
                  buttons: true,
                  dangerMode: true,
                }).then((result) => {
                  if (result) {
                    dispatch({ type: 'DELETE_TASK', payload: taskId})
                  } else {
                    swal('Your task is safe!');
                  }
                });

        const newTasks = [...updatedTasks];
    
        const index = updatedTasks.findIndex((task) => task.id === taskId);
    
        newTasks.splice(index, 1);
    
        setUpdatedTasks(newTasks);
      };
      


    return (
        <>
        <form onSubmit={handleEditFormSubmit} >
          <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell >Task Description/Notes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
            
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
                     handleDeleteClick ={handleDeleteClick}
                     />
                     )} 
                    
                    </Fragment>
                 
                )
                
            })}
            
        </TableBody>
        </Table>
        </TableContainer>
        </form>
        </>

    )


}

export default TaskList