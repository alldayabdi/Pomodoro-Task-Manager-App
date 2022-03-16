import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TaskItem.css'
import swal from 'sweetalert';



function TaskItem({task}){
    const dispatch = useDispatch();

    function handleDelete(){
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this task!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          }).then((result) => {
            if (result) {
                dispatch({type: 'DELETE_TASK', payload: task.id });
            } else {
              swal('Your task is safe!');
            }
          });
        
    }

    function handleEdit(){
        console.log(task.id);
    }

    return (
        <>
        <tr>

        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>
            <button>Start</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
            
        </td>
        </tr>
        
       
        
        </>
    )


}

export default TaskItem;