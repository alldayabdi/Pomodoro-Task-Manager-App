import React, {useContext} from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'


const CountdownCircle = ({key = 1,
     timer = 25, 
    animate = true,
    children}) => {

        const {stopTimer} = useContext(SettingContext)
  return (
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#312f3e"
        onComplete={ () => {
          stopTimer()
        }}
      >
        {children}
        </CountdownCircleTimer>
  )
}

export default CountdownCircle