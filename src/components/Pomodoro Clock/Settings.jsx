import React, {useState} from 'react'
import Button from './Button'

const Settings = () => {
    const[newTimer, setNewTimer] =useState({
        work: 0.3,
        short: 1,
        long: 1,
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
        <form>
        <div>
            <input type="text" name ="work" onChange={handleChange}
            value ={newTimer.work}
            />
            <input type="text" name ="shortBreak" onChange={handleChange}
             value ={newTimer.short}
            />
            <input type="text" name ="longBreak" onChange={handleChange}
             value ={newTimer.long}
            />
        </div>
        <Button title = "Set Timer" calledFunction ={handleSubmit}/>

        </form>
        
    </div>
  )
}

export default Settings