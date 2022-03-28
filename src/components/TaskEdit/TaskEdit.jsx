import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TaskEdit.css'
import Modal from '@mui/material/Modal';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const TaskEdit = ({editFormData, handleEditFormChange, handleCancelClick,}) => {
 // Functions are passed down to handle the edit click and submission


 
  return (
    <tr>
        <td>
       
     
            <div className='flex-container'>
            
           
        <TextareaAutosize
        className='fill-width'
                type="text"
                id='nameOfTask'
                placeholder="Enter Task Name"
                value = {editFormData.taskName}
                onChange={handleEditFormChange} 
                name = "taskName" // this allows us to use the getAttribute method
                
            />
            
            
            </div>
            
            
            

        </td>
        <td>
        <div className='flex-container'>
        <TextareaAutosize
        className='fill-width'
                type="text"
                placeholder="Enter Task Description"
                onChange={handleEditFormChange}
                name ="taskDescription"
                value = {editFormData.taskDescription}
                style={{ width: 200 }}
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