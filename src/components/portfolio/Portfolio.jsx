import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";


export default function Portfolio() {
//selecting from list
    const [selected, setSelected] = useState("featured")
//for data, starts as an empty array since data is made up of arrays
    const [data, setData] = useState([])

    //list to pass to PorfolioList
    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
      // {
      //   id: "design",
      //   title: "Design",
      // },
      // {
      //   id: "content",
      //   title: "Content",
      // },
    ];

    //whenever we change selected, the useEffect will be running
useEffect(()=>{
//switch case structure
switch (selected) {
  case "featured":
    setData(featuredPortfolio);
    break;
  case "web":
    setData(webPortfolio);
    break;
  case "mobile":
    setData(mobilePortfolio);
    break;
  // case "design":
  //   setData(designPortfolio);
  //   break;
  // case "content":
  //   setData(contentPortfolio);
  //   break;
  default: //starts at featured
    setData(featuredPortfolio);
}

},[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=> (
          <PortfolioList
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        
      {data && data.length ? data.map((d) => (
          <div 
          className="item"
          key={d.id}
          >
            
            <img
              src={d.img}
              alt=""
            />
            {/* <h3>{d.title}</h3> */}
            <a href={d.link} atl=""> 
            {d.title}
            </a>
          </div>
        )): <h1>Coming Soon</h1>}
        
      </div>
    </div>
  )
}
