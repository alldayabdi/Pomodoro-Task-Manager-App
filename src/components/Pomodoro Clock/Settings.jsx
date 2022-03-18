import React from 'react'
import Buttons from './Buttons'

const Settings = () => {
  return (
    <div>
        <form>
        <div>
            <input type="text" name ="Work" onChange={handleChange}
            value ={}
            />
            <input type="text" name ="Short Break" onChange={handleChange}
             value ={}
            />
            <input type="text" name ="Long Break" onChange={handleChange}
             value ={}
            />
        </div>
        <Button title = "Set Timer"/>

        </form>
        
    </div>
  )
}

export default Settings