import { useState, createContext } from "react";

export const SettingsContext = createContext()
// This is react method for passing props around components without 
// the need to use props

function SettingsContextProvider(props) {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer (active_state) {
        // this function checks if the timer is currently active
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    // start animation fn 
    function startTimer() {
        // this sets the timer to start
        setStartAnimate(true)
    }
    // pause animation fn 
    function pauseTimer() {
        // this sets the timer to pause
    setStartAnimate(false)
    }
    // pass time to counter 
    // here is where the time is calculated by using a javascript method
    // math.floor
    const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    return `${minutes}:${seconds}`
    }

    // clear session storage 
    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = (evaluate) => {
        // A switch statement is ran to evaluate if the clock is on
        // work, short or long mode to set the settings.
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
                default:
                    setPomodoro(0)
                break;
        }
    }

    function stopAimate() {
        setStartAnimate(false)
    }

    return (
        <SettingsContext.Provider value={{
            // All of these are props to be passed to main component
            pomodoro, 
            executing,
            updateExecute, 
            startAnimate, 
            startTimer,
            pauseTimer,
            children,
            SettingsBtn,
            setCurrentTimer,
            stopAimate
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsContextProvider