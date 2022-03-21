import React, { createContext, useState } from 'react'
export const SettingContext = createContext()

const SettingsContextProvider = (props) => {
    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }
    function startTimer() {
        setStartAnimate(true)
    }
    function pauseTimer() {
        setStartAnimate(false)
        }

        function stopTimer() {
            setStartAnimate(false)
            }

            const SettingsBtn = () =>{
                setExecuting({})
                setPomodoro(0)
            }

            const updateExecute = updatedSettings => {
                setExecuting(updatedSettings)
                setTimerTime(updatedSettings)
                
            }

            const setTimerTime = evaluate =>{
                switch (evaluate.active) {
                    case' work':
                        setPomodoro(evaluate.work)
                        break;
                    
                    case 'short':
                        setPomodoro(evaluate.short)
                    break;

                    case 'long':
                    setPomodoro(evaluate.long)

                    default:
                        setPomodoro(0)
                        break;
                }
            }
        
const children =({remainingTimer}) =>{
    const minutes = Math.floor(remainingTimer/60)
    const seconds = remainingTimer % 60

    return `${minutes}m ${seconds}`
}

  return (
    <SettingContext.Provider
     value={{
         children,
         executing,
         updateExecute,
         setCurrentTimer,
         SettingsBtn,
         pauseTimer,
         startTimer,
         startAnimate,
         pomodoro,
         stopTimer, updateExecute}} >
        {props.children}
    </SettingContext.Provider >
  )
}

export default SettingsContextProvider