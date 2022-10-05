import React from "react";
import "./marketPrice.css"
import { useState,useEffect } from "react";
import BackgroundImage1 from "../../../assets/image/backblue.gif";
import BackgroundImage from "../../../assets/image/background.png";
import BackgroundImage2 from "../../../assets/image/background1.png"
// import { Carousel } from "react-bootstrap";

function HomeBanner(props) {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])
  return (
    <div  className="themeSetter" id={theme}>
      <div
          className="d-blockd-block w-100 main_slider"
          style={{
            backgroundImage: `url(${BackgroundImage}),url(${BackgroundImage2})`,
            // background: "rgba(0,0, 0, 0.7)",
            backgroundRepeat:"no-repeat, no-repeat",
            backgroundPosition:"top right,left",
            backgroundSize:"500px,600px",
            // backgroundOrigin:" content-box",

          }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content" data-aos="fade-right">
                <p className="mainText"><b>It's time to preserve your capital and make a fortune with cryptocurrency.</b></p>
                  <p className="subText">Join the world's largest crypto community</p>
                  <div className="red_button shop_now_button">
                    <a  href="https://t.me/CryptoVIPsignalTA">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>

    </div>
    
  );
}

export default HomeBanner;
