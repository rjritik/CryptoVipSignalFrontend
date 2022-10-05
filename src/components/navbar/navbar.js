import React from 'react'
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/image/cryptovip.png"
import { Link } from "react-router-dom";

import {createContext, useState,useEffect} from "react";
import ReactSwitch from 'react-switch';
export const  ThemeContext= createContext(null)

const Navbar = (props) => {
  const[theme,setTheme]=useState("light")
  const toggleTheme=()=>{
    setTheme((curr)=>(curr=="light"?"dark":"light"))
    if(theme=="dark")
    {localStorage.setItem("theme","light")}
    else {localStorage.setItem("theme","dark")}
    props.toggleTheme();
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme }}>
    <div id={theme}>
    <div className="main_nav_container"  >
    <div className="container">
      <div className="row">
          <div className=" col">
       <Link to="/home" ><img alt="CryptoVipSignal"  className="ImageSet"src={image1} /></Link>
          </div>
          <div className='col-6 navbar_menu navTags'>
          <ul>
              <li style={{paddingRight:"15px", color:"black"}}>
                <Link to="/home" className='setHeadings'>Exchange</Link>
              </li>
              <li style={{paddingRight:"15px",color:"black"}}>
                <Link to="/home" className='setHeadings'>Grid trading</Link>
              </li>
              <li>
                <Link to="/home" className='setHeadings'>Earn</Link>
              </li>
              </ul>
          </div>
           <div className='col navbar_menu singUp'>
           <ul>
                <li style={{paddingRight:"25px"}}>
                  <Link to="/login">
                    <button type="button" class="btn btn-danger">
                      Sign in
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button type="button" class="btn btn-outline-danger">
                      Sign up
                    </button>
                  </Link>
                </li>
                <li className='switch'>
            {/* <label className='switch'>{theme =="light"?"Light Mode ":"Dark Mode"}</label> */}
              <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
                </li>
              </ul>
           </div>
              
          
      </div>
      
    </div>

  </div>
  </div>
  </ThemeContext.Provider>

  )
}

export default Navbar