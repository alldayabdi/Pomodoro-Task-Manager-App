import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from './SettingsContext'

const CountdownAnimation = ({key, timer, animate, children}) => {

  const { stopAimate } = useContext(SettingsContext)

    return (
      // this is a react component that handles the animation, timer view and colors
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FFA500', 0.33],
          ['#FFA500', 0.33],
          ['#FFA500', 0.33],
        ]}
        strokeWidth={6}
        size={300}
        trailColor="#FFA500"
        onComplete={ () => {
          stopAimate()
        }}
      >
        {children} 
      </CountdownCircleTimer> // children here represents minutes : seconds
    )
}

export default CountdownAnimation