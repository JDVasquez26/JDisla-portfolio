import React, { useState } from 'react'
import './works.scss'

export default function Works() {
//for deciding which slide we're on, startign at 0 index of data arr
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  //way is right or left
  const handleClick = (way) => {
    way === "left" //if it' left, and..if currentSlide is greater than 0, go to the previously slide(which is - 0 in the array index); else go to index 2 which is really the third item in the array
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : //else... if it's right(that's why it's empty) and... if currentSlide is smaller than the length (-1 because of the index starts at 0);
      //then add 1 to the currentSlide so it could change position; else... set currentSlide to the beginning once again
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  

  return (
    <div className='works' id='works'>
      <div className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
      
      {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}


      </div>
      
      <img
        src="assets/right-arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right-arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()} //could have "right"inside, but it could be empty as well
      />

      </div>
  )
}
