import React from 'react'
import "./portfolioList.scss"

//props coming from Portfolio.jsx
export default function PortfolioList( {id, title, active, setSelected}) {
  return (
    //if it's active, it'll be portfolioList active, it not just..
    <li className={active ? 'portfolioList active' : 'portfolioList'}
        onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
