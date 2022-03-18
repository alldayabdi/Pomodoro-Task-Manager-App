import React, {useState} from 'react'
import Button from './Button'
import '../Pomodoro Clock/Pomodoro.css'

const Settings = () => {
    const[newTimer, setNewTimer] =useState({
        work: 0,
        short: 0,
        long: 0,
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

    const handleSubmit =() =>{

    }
  return (
    <div>
        <form className="form-container">
        <div className="input-wrapper">
            <input type="number" name ="work" onChange={handleChange}
            value ={newTimer.work}
            />
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