import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TaskEdit.css'
import Modal from '@mui/material/Modal';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';


const TaskEdit = ({editFormData, handleEditFormChange, handleCancelClick,}) => {
 
  // const dispatch = useDispatch();
    // useEffect(() => {
    //    adjustInputSize()
    //   }, [editFormData.taskName]);

    // const adjustInputSize = () =>{
    //     const taskname = document.getElementById("nameOfTask")
    //     if(editFormData.taskName < 1){
    //         taskname.style.width = taskname.placeholder.length + 2 +'ch'
    //     } else {
    //         taskname.style.width = location.length + 5 + 'ch'
    //     }
    // }
  return (
    <tr>
        <td>
       
     
            <div className='flex-container'>
            
           
        <input
        className='fill-width'
                type="text"
                id='nameOfTask'
                placeholder="Enter Task Name"
                value = {editFormData.taskName}
                onChange={handleEditFormChange}
                name = "taskName"
                
            />
            
            
            </div>
            
            
            

        </td>
        <td>
        <div className='flex-container'>
        <input
        className='fill-width'
                type="text"
                placeholder="Enter Task Description"
                onChange={handleEditFormChange}
                name ="taskDescription"
                value = {editFormData.taskDescription}
            />
            </div>
            

        </td>
        <td>
        <button type="submit"><DoneIcon fontSize='small'/></button>
        <button type="button" onClick={handleCancelClick}>
          <CancelIcon fontSize='small'/>
        </button>

        </td>

    </tr>
  )
}

export default TaskEdit