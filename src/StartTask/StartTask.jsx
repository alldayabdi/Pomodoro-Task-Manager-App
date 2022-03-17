import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import holdStartDetails from '../redux/reducers/startTaskReducer';

const StartTask = () => {
    
    const startTask = useSelector(store => store.holdStartDetails);
    console.log(holdStartDetails.id);
  return (
      <>
    <p>{startTask.description}
    </p>
    <p>{startTask.name}</p>
    </>
  )
}

export default StartTask