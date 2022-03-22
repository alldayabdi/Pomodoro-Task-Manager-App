import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './TaskItem.css'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




function TaskItem({ task, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [completed, setCompleted] = useState(false)

    const handleCheckbox = (event) =>{
        // console.log(task.id);
        console.log('This is the event.target.checked', event.target.checked);
       setCompleted(event.target.checked)

        sendComplete();
    }

    function sendComplete(){
        console.log(task.id);

        const completedTask = {
            id: task.id,
            isCompleted: completed
        }

        dispatch({ type: 'EDIT_COMPLETE_STATUS', payload: completedTask });


    }
    // function handleDelete(){
    //     swal({
    //         title: 'Are you sure?',
    //         text: 'Once deleted, you will not be able to recover this task!',
    //         icon: 'warning',
    //         buttons: true,
    //         dangerMode: true,
    //       }).then((result) => {
    //         if (result) {
    //             dispatch({type: 'DELETE_TASK', payload: task.id });
    //         } else {
    //           swal('Your task is safe!');
    //         }
    //       });

    // }

function handleStart(id){
    console.log(id);
    dispatch({type: "GET_START_TASK", payload: id })
    history.push('/start')
}

// const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

console.log(completed);

    return (
        <>
           <TableRow>
               
                <TableCell><input type="checkbox"
                 checked={completed} 
                 onChange={handleCheckbox}
                 
                 /></TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>

                <TableCell>
                    <button onClick={() => handleStart(task.id)}>Start</button>

                    <button onClick={(event) =>
                        handleEditClick(event, task)} >
                        Edit
                    </button>
                    <button type="button" onClick={() => handleDeleteClick(task.id)}>
                        {/* <DeleteIcon/> */} Delete
                    </button>


                </TableCell>

            </TableRow>


        </>
    )


}

export default TaskItem;