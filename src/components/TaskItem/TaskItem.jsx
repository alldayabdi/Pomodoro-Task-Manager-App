import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TaskItem({task}){

    return (
        <>
        <tr>
        <td>{task.name}</td>
        <td>{task.description}</td>
        </tr>
        
        
        </>
    )


}

export default TaskItem;