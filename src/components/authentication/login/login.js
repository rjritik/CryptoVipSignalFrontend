import React from "react";
import { useState } from "react";
import "./login.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../../assets/image/login_banner.png"
import BackgroundImage1 from "../../../assets/image/sacnner.png"
// import facebookIcon from "./asset/images/icon/facebook.svg";
// import googleIcon from "./asset/images/icon/google.svg";
// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const LoginHandleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const Login = (e) => {
    e.preventDefault();
    const { email, password } = userLogin;
    if (email && password) {
      console.log(userLogin);
      axios.post("http://localhost:3005/api/v1/login", userLogin).then((res) => {
        if (res.data.message == "Admin Login Successfully") {
          // toast.success(" Admin Login Successfully", {
            //   position: "bottom-left",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            // });
            navigate("/adminDashboard");
            return;
        } 
        if(res.data.message == "User Login Successfully"){
          navigate("/dashboard");
        }
        else {
        //   toast.warn(res.data.message, {
        //     position: "bottom-left",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        }
      });
    } else {
    //   toast.warn("Invalid Inputs", {
    //     position: "bottom-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    }
  };

  return (
  //   <div>
  //   <form >
  //       <div className="RegisterContainer2"
  //         style={{
  //           backgroundImage: `url(${BackgroundImage}),url(${BackgroundImage1})`,
  //           backgroundPosition:"left,right",
  //           backgroundRepeat:"no-repeat",
  //           backgroundSize:"30%,20%",
  //           height:"80vh",
  //           paddingTop:"10vh"
  //         }}>
  //         {/* <p>
  //           <p className="RegisterTitle">Sign up </p>
  //           <h6 className="RegisterSubtitle">Register with your email and mobile.</h6>
  //         </p> */}
  //         <label className="RegisterTitle"><b>Sign in</b></label>
  //         <p className="RegisterSubtitle">Welcome! Sign in with your Email, Phone number, QR code</p>
          
          
  //           <div className="inputSet">
  //           <input
  //           type="text"
  //           placeholder="Enter email"
  //           name="email"
  //           value={userLogin.email}
  //           onChange={LoginHandleChange}
  //           id="RegisterEmail"
  //           required
  //         />
  //           </div>
  //           <div className="inputSet">
  //           <input
  //           type="password"
  //           placeholder="Password"
  //           name="password"
  //           value={userLogin.password}
  //           onChange={LoginHandleChange}
  //           id="RegisterPassword"
  //           required
  //         />
  //           </div>
  //         <button type="button" className="btn btn-danger RegisterBtn" onClick={(e) => Login(e)}>Login </button>

  //         <div id="alternativeRegister">
  //           <div id="iconGroup">
  //             {/* <img className="icon" src={facebookIcon}></img>
  //             <img className="icon" src={googleIcon}></img> */}
  //           </div>
  //         </div>

  //         <p className="RegisterText">
  //           {" "}
  //          {" "}
  //           <Link to="/register">
  //             <span className="RegisterLink"> Don't have any account?Register From here</span>
  //           </Link>
  //         </p>
  //     </div>

  //   </form>
    
  // </div>
  <div class="row RequestContainer2 mainDiv">
    <div class="col-lg-4" style={{opacity:"0.8"}}>
      <img  className="image-banner"src={BackgroundImage} />
     
    </div>
    <div class="col-lg-4">
    <label className="RequestTitle">
       <b>Login </b>
     </label>
     <div className="inputSet">
             <input
              className="form-control"
            type="text"
            placeholder="Enter email"
            name="email"
            value={userLogin.email}
            onChange={LoginHandleChange}
            id="RegisterEmail"
            required
          />
            </div>
            <div className="inputSet">
            <input
              className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={userLogin.password}
            onChange={LoginHandleChange}
            id="RegisterPassword"
            required
          />
            </div>
            <input type="checkbox" value="lsRememberMe" id="rememberMe"/>
             <label for="rememberMe">Remember me</label>
          <button type="button" className="btn btn-danger RegisterBtn" onClick={(e) => Login(e)}>Login </button>
          <p className="RegisterText">
           {" "}
          {" "}
           <Link to="/register">
             <span className="RegisterLink"> Don't have any account?Register From here</span>
           </Link>
         </p>
     
    </div>

    <div class="col-md-4 qr" style={{opacity:"0.9", backgroundPosition:"center"}}>
      <img src={BackgroundImage1} />
      <p>Scan this QR code</p>
    </div>
  </div>
  );
};

export default Login;
