import React from "react";
import "./tradeScanner.css";
import { useState,useEffect } from "react";
import BackgroundImage1 from "../../../assets/image/group.png";
import BackgroundImage2 from "../../../assets/image/man-support.png";
import BackgroundImage3 from "../../../assets/image/search.png";
import BackgroundImage4 from "../../../assets/image/sacnner.png";
import {Link } from "react-router-dom";

const CryptoTrading = (props) => {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])

  return (
    <div id={theme}>
       <div class="footer-top ContainerTOP">
      <div class="container ">  
        <div class="row ">
          <div class="col-md-4 ">
            <img src={BackgroundImage2} />
            <p style={{ textAlign:"left" }} className="themeSetterfortag">
              <b>24/7 Support </b>
              Got a <br></br>problem?just get in touch .<br></br>
              our support team is 24/7 available.
            </p>
          </div>
          <div class="col-md-4">
              <img src={BackgroundImage1} />
            <p style={{textAlign:"left"}}className="themeSetterfortag">
              <b >CVS</b> is global ,<br></br> Join the biggest.crypto cummunity
              in world.{" "}
            </p>
          </div>

          <div class="col-md-4">
            <img src={BackgroundImage3}/>
            <div>
              {/* <Link to="/request" theme={{theme}}> */}
              <Link to ={{pathname:'/request',
              state:{theme}}}>
              <span className="RegisterLink themeSetterfortag" > Submit Request</span>
            </Link>
            </div>
          </div>
        </div>
        <div className="Main-Container joinBtnBorder">
          <div className="mainDIV">
            <b >Start Crypto Journey Now</b>
          </div>
          <div>
            <div >
              <a href="https://t.me/CryptoVIPsignalTA">   
              <button type="button" class="btn btn-danger">
                      Join Now
                    </button></a>
            </div>
            <div className=" ScannerSet scannerBtn ">
              <img src={BackgroundImage4} />
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default CryptoTrading;
