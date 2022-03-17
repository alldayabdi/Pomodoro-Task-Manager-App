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




function TaskItem({ task, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
    const history = useHistory();

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



    return (
        <>
           <TableRow>

                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>

                <TableCell>
                    <button onClick={() => handleStart(task.id)}>Start</button>

                    <button onClick={(event) =>
                        handleEditClick(event, task)}>
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