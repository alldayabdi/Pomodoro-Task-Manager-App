import React, {useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux';


const TaskEdit = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_TASKS' });
    //   }, []);
  return (
    <tr>
        <td>
        <input
                type="text"
                placeholder="Enter Task Name"
                value = {editFormData.taskName}
                onChange={handleEditFormChange}
                name = "taskName"
                
            />

        </td>
        <td>
        <input
                type="text"
                placeholder="Enter Task Description"
                onChange={handleEditFormChange}
                name ="taskDescription"
                value = {editFormData.taskDescription}
            />

        </td>
        <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>

        </td>

    </tr>
  )
}

export default TaskEdit