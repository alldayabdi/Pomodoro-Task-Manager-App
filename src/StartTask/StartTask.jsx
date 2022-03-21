import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import holdStartDetails from '../redux/reducers/startTaskReducer';
import './StartTask.css'
import { SettingContext } from '../components/Pomodoro Clock/ContextSettings';
import Settings from '../components/Pomodoro Clock/Settings';
import CountDownCircle from '../components/Pomodoro Clock/Countdown'
import Button from '../components/Pomodoro Clock/Button';
const StartTask = () => {
  const {pomodoro, executing, setCurrentTimer} = useContext(SettingContext)
    
    const startTask = useSelector(store => store.holdStartDetails);
    console.log(holdStartDetails.id);
  return (
      <>
      <div className='container'>
   
    {/* <CountDownCircle /> */}
    {/* <p><strong>{startTask.name}</strong></p>
    <p>{startTask.description}</p> */}
   {pomodoro !== 0 ? 
   <Settings/>
   :
    <>
   <ul className='labels'>
    <li>
    <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              calledFunction={() => setCurrentTimer('work')} 
            />
    </li>

    <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              calledFunction={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              calledFunction={() => setCurrentTimer('long')} 
            />
          </li>

   </ul>
    </>
  }
    </div>
    </>
  )
}

export default StartTask