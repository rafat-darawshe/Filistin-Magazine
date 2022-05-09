import React,{useEffect} from 'react'
import './cover.css';
import axios from 'axios'
import {TweenMax, Circ,Expo,Power2,Power3} from 'gsap'
const Cover = (props) => {

  // useEffect(()=>{
  //   axios.get('http://localhost:8000/api/loggedUser', {withCredentials:true})
  //   .then(res=>{console.log(res)
  //     props.setLoggedUser(res.data.user)
  //   })
  //   .catch(err=>console.log(err))
  // },[])
  return (

    
    <div className="wrapper">
    <div className="left"></div>
    <div className="right"></div>

    <div className="content">
      <div className="img-wrapper">
        <div className="karina"></div>
      </div>

      <div className="info">
        <ul>
          <li>unsplash.com </li>
          <li>@karinates</li>
          <li>karinates.com</li>
          <li><i className="fa fa-share-alt"></i></li>
        </ul>
      </div>

      <div className="text">
        <h1>Filistine  </h1>
        <p>Palestenian Magazine</p>
      </div>

      <div className="name">Filistine</div>

      <div className="bottomnav">
        <ul>
          <li>profile  </li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  </div>

  )
}


TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    
    ease: Power2.easeInOut
  })

  TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut
  })

  TweenMax.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.to('.karina', 2, {
    delay: 1.5,
    width: '800px',
    ease: Power2.easeInOut
  })

  TweenMax.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut
  }, 0.08)

  TweenMax.from('.info', 2, {
    delay: 1.5,
    y: 100,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name', 2, {
    delay: 1.5,
    x: -600,
    ease: Circ.easeInOut
  })

export default Cover