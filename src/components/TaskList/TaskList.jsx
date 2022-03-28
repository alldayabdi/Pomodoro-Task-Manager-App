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
import { red } from '@mui/material/colors';


function TaskList(){
    const dispatch = useDispatch();
    const [updatedTasks, setUpdatedTasks] = useState([]);
    const tasks = useSelector(store => store.taskReducer);
    const userId = useSelector(store => store.user.id);

    // local state created to hold the form data
    const [editFormData, setEditFormData] = useState({
      taskName: '',
      taskDescription: ''
      
    });

    const tableStyling = {
      width : 300,
     
      
    }

    

    

    const handleEditFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_TASKS' });
    //   }, []);

      const [editTaskID, setTaskID] = useState(null)

      const handleEditClick = (event, task) =>{
        event.preventDefault();
        console.log(task.id);
        // We set local state variable to the id that is clicked
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

        // object created to hold inputs alongside id to dispatch
    
        const editedTask = {
          id: editTaskID,
          name: editFormData.taskName,
          description: editFormData.taskDescription,
          
        };

        dispatch({ type: 'EDIT_TASK', payload: editedTask });

        // new variable created as to not mutate data and we use a spread operate
        // to keep data
        const newTasks = [...tasks];
        // findIndex is a javascript method that finds an element based on a condition
        // which here is the task id matching editTaskID
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

      
      
// console.log(taskReducer.status);

    return (
        <>
        <form onSubmit={handleEditFormSubmit} >
          <TableContainer component={Paper}
          sx ={{
            width: 'max-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 0
          }}
          >
        <Table >
        <TableHead>
          <TableRow className='taskRrow'>
            {/* <TableCell></TableCell> */}
            <TableCell></TableCell>
            <TableCell
            sx = {{...tableStyling}}
             style={{ fontSize: '1.5em' }} align='left'> <strong>Task Name</strong></TableCell>
            <TableCell  sx = {{...tableStyling}}style={{ fontSize: '1.5em' }} align='right'> <strong>Task Description/Notes </strong></TableCell>
            <TableCell  sx = {{...tableStyling}}style={{ fontSize: '1.5em' }} align ='center'> <strong>Actions </strong></TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
            
            {tasks.map((task, i) => {
               
                return (
                  // Fragment allows us to have two components
                  // One component is a Readable Row, the other is Editable Row
                  // If the edit button is clicked it sets  the taskID to editTaskId 
                  // That then causes the editable component to render
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
                     status = {tasks.status}
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