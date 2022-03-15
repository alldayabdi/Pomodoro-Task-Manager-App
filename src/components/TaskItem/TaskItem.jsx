import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TaskItem({task}){

    function handleDelete(){
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
            <button>Edit</button>
            
        </td>
        </tr>
        
        
        </>
    )


}

export default TaskItem;