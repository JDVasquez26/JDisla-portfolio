import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {
//useRef is used to access a DOM element directly.
  const textRef = useRef();

  //https://www.npmjs.com/package/ityped
  useEffect(()=> { 
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', "Content Creator" ]
     });
  }, []);


  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="https://media.giphy.com/media/nj8meeDBjFZGlTJBQk/giphy.gif" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Jesthine Disla </h1>
          <h3>Freelancer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
