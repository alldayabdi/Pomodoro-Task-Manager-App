import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import holdStartDetails from '../redux/reducers/startTaskReducer';
import './StartTask.css'
import Settings from '../components/Pomodoro Clock/Settings';
const StartTask = () => {
    
    const startTask = useSelector(store => store.holdStartDetails);
    console.log(holdStartDetails.id);
  return (
      <>
      <div className='container'>
    <Settings/>
    </div>
    </>
  )
}

export default StartTask