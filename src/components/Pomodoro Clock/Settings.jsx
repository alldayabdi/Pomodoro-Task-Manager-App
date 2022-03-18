import React, {useState, useContext} from 'react'
import Button from './Button'
import '../Pomodoro Clock/Pomodoro.css'
import { SettingContext } from './ContextSettings'

const Settings = () => {
    const {updateExecute} = useContext(SettingContext)
    const[newTimer, setNewTimer] =useState({
        work: 25,
        short: 5,
        long: 10,
        active: 'work'
    })

    const handleChange = event =>{
        const{name,value} = event.target

        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                
                break;
                case 'shortBreak':
                    setNewTimer({
                        ...newTimer,
                        short: parseInt(value)
                    })

                    break;
                case 'longBreak':
                    setNewTimer({
                        ...newTimer,
                        long: parseInt(value)
                    })
                default:
                    break;
        }
        console.log(newTimer);

    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        updateExecute(newTimer);

    }
  return (
    <div>
        <form className="form-container">
        <div className="input-wrapper">
            <label>
            <input type="number" name ="work" onChange={handleChange}
            value ={newTimer.work}
            /></label>
            <input type="number" name ="shortBreak" onChange={handleChange}
             value ={newTimer.short}
            />
            <input type="number" name ="longBreak" onChange={handleChange}
             value ={newTimer.long}
            />
        </div>
        <Button title = "Set Timer" calledFunction ={handleSubmit}/>

        </form>
        
    </div>
  )
}

export default Settings