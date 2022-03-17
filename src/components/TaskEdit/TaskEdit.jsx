import React from 'react'

const TaskEdit = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
        <td>
        <input
                type="text"
                placeholder="Enter Task Name"
                onChange={handleEditFormChange}
                name = "name"
                value = {editFormData.taskName}
            />

        </td>
        <td>
        <input
                type="text"
                placeholder="Enter Task Description"
                onChange={handleEditFormChange}
                name ="description"
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