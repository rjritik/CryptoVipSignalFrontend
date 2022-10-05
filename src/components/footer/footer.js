import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { useState,useEffect } from "react";

function Footer(props) {
  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.theme])
  return (
    <div id={theme}>
      <footer>
        <div class="footerTheme">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 TextSet">
                <span className="HeaderBold">About us</span>
                <p className="HeaderBold"style={{ textAlign:"left"}}>
                About Crypto Vip Signal{" "}
                </p>
              </div>
              <div class="col-lg-3 TextSet ">
                <span className="HeaderBold">Services</span>
                <ul class="address1">
                  <li>AMA</li>
                  <li>Giveaway</li>
                  <li> Get Premium</li>
                  <li>Referral</li>
                </ul>
              </div>

              <div className="col-md-3 TextSet">
                <span className="HeaderBold"  >Support</span>
                <div className="footer_social d-flex flex-row ">
                  <ul>
                    <li className="btnSetting">
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li className="btnSetting">
                      <a href="#">
                        <i className="fab fa-twitter"></i>{" "}
                      </a>
                    </li>
                    <li className="btnSetting">
                      <a href="#">
                        <i className="fab fa-telegram"></i>{" "}
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>{" "}
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div class="col-md-3 TextSet">
                <span className="HeaderBold">Community</span>
                <div className="footer_social d-flex flex-row ">
                  <ul>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li> */}
                    <li className="btnSetting">
                      <a href="#">
                        <i className="fab fa-twitter"></i>{" "}
                      </a>
                    </li>
                    <li className="btnSetting">
                      <a href="#">
                        <i className="fab fa-telegram"></i>{" "}
                      </a>

                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>{" "}
                      </a>
                    </li> */}
                  </ul>

                </div>
              </div>
             
            </div>
           
          </div>
        <div  classnanme="d-flex flex-row-reverse" >
        <p style={{paddingLeft:"20px"}}> Copyright © 2022 CryptoVipSignal</p>
        </div>
        
         
        </div>
        {/* <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <p class="copyright text-uppercase">
                  Copyright © 2022 CryptoVipSignal
                </p>
              </div>
              <div class="col-sm-7">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
