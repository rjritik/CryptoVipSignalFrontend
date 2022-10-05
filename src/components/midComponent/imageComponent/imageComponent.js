import React from "react";
import "./imageComponent.css";
import { useState,useEffect } from "react";

import BackgroundImage1 from "../../../assets/image/newimagw.png";
import BackgroundImage2 from "../../../assets/image/newimage2.png";

const ImageComponent1 = (props) => {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])
  return (
    <div id={theme}>
      <div className="ContainerHeight "  >
      <div className="row ">
        <div className="col center">
          <img src={BackgroundImage2} className="IMGCover1" />
        </div>
        <div className="col center">
          <b className="TextSetting">
            The ultimate security for your digital assets by Crypto Vip Signal
          </b>
        </div>
      </div>

      <div class="row bottomdiv">
        <div class="col center ">
          <b  className="TextSetting ">Learn and grow with CVS Community</b>
        </div>
        <div class="col center">
          <img src={BackgroundImage1} className="IMGCover" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ImageComponent1;
