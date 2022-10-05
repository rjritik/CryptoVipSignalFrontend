import React from 'react'
import "./aboutCvs.css"
import BackgroundImage3 from "../../../assets/image/newimage3.png";
import { useState,useEffect } from "react";


const ImageComponent2 = (props) => {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])
  return (

    <div id={theme}>
       <div className="container-lg1 ContainerHeight2" >
    <div class="row ">
    <div class="col">
    <b className='aboutCVS'>About CVS</b>
    <p className='aboutCVS'> Lorem Ipsum ist einfach Dummy-Text der Druck- und
                  Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem
                  Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie.
                  Lorem Ipsum war der Standard der Branche{" "}</p>
    </div>
    <div class="col IMGSetter" >
    <img src={BackgroundImage3} className='IMGCover2'/>
    </div>
  </div>
  </div>
    
    </div>
   
  )
}

export default ImageComponent2