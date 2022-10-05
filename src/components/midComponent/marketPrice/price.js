
import React from "react";
import "./price.css"
import { useState,useEffect } from "react";

// import { Carousel, CarouselItem } from "react-bootstrap";

function Price(props) {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])
  return (
    <div  id={theme}>
      <div className="benefit" data-aos="fade-up">
      <div className="container">
        <div className="row benefit_row">
       
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_content">
              <h6 className="textSetterTheme">Market Price-0.89</h6>
              <h5 className="textSetterTheme">HGX/USDT(TRON-NETWORK)-1-1%</h5>
              <h6 className="textSetterTheme">24 hr High Low-<b className="green">0.90001</b>/<b className="red">0.90001</b></h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                {/* <i className="far fa-money-bill-alt"></i> */}
              </div>
              <div className="benefit_content">
              <h6 className="textSetterTheme">Market Price-0.89</h6>
              <h5 className="textSetterTheme">HGX/USDT(TRON-NETWORK)-1-1%</h5>
              <h6 className="textSetterTheme">24 hr High Low-<b className="green">0.90001</b>/<b className="red">0.90001</b></h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                {/* <i className="fa fa-/undo" aria-hidden="true"></i> */}
              </div>
              <div className="benefit_content">
              <h6 className="textSetterTheme">Market Price-0.89</h6>
              <h5 className="textSetterTheme">HGX/USDT(TRON-NETWORK)-1-1%</h5>
             <h6 className="textSetterTheme">24 hr High Low-<b className="green">0.90001</b>/<b className="red">0.90001</b></h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                {/* <i className="fa fa-undo" aria-hidden="true"></i> */}
              </div>
              <div className="benefit_content">
              <h6 className="textSetterTheme">Market Price-0.89</h6>
              <h5 className="textSetterTheme">HGX/USDT(TRON-NETWORK)-1-1%</h5>
             <h6 className="textSetterTheme">24 hr High Low-<b className="green">0.90001</b>/<b className="red">0.90001</b></h6>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Price;
