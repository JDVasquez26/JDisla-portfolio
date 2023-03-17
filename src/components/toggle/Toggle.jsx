import React, { useContext } from 'react'
import "./toggle.scss"
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    }

  return (
    <div className='toggle'>
        {/* <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" /> */}
        <img src="assets/sun.png" alt="" className="t-icon" />
        <img src="assets/moon.png" alt="" className="t-icon" />
        <div 
        className="t-button" 
        onClick={handleClick}
        //in order to toggle the dark circle, if it's darkmode all the way to the left, it its not, 25px to the right
        style={{left: theme.state.darkMode ? 0 : 25 }}
        
        ></div>
        
    </div>
  )
}

export default Toggle