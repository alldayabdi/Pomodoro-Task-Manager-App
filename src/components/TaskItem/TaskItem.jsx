import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TaskItem.css'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'




function TaskItem({task}){
    // const dispatch = useDispatch();
    // const history = useHistory();

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

    

    

    return (
        <>
        <tr>

        <td>{task.name}</td>
        <td>{task.description}</td>
        
        {/* <td>
            <button>Start</button>
            <button>Delete</button>
            <button >Edit</button>
             
        </td> */}
        
        </tr>
      
        
        </>
    )


}

export default TaskItem;