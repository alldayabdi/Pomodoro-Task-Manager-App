import React from 'react'

const TaskEdit = ({editFormData, handleEditFormChange}) => {
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

        </td>

    </tr>
  )
}

export default TaskEdit