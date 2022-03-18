import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import holdStartDetails from '../redux/reducers/startTaskReducer';
import './StartTask.css'
import Settings from '../components/Pomodoro Clock/Settings';
import CountDownCircle from '../components/Pomodoro Clock/Countdown'
const StartTask = () => {
    
    const startTask = useSelector(store => store.holdStartDetails);
    console.log(holdStartDetails.id);
  return (
      <>
      <div className='container'>
    <Settings/>
    {/* <CountDownCircle /> */}
    <p><strong>{startTask.name}</strong></p>
    <p>{startTask.description}</p>
    </div>
    </>
  )
}

export default StartTask