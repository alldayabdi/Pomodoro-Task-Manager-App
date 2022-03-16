import React from 'react'

const TaskEdit = () => {
  return (
    <tr>
        <td>
        <input
                type="text"
                placeholder="Enter Task Name"
                onChange={(event) => setTaskName(event.target.value)}
            />

        </td>
        <td>
        <input
                type="text"
                placeholder="Enter Task Description"
                onChange={(event) => setDescription(event.target.value)}
            />

        </td>

    </tr>
  )
}

export default TaskEdit