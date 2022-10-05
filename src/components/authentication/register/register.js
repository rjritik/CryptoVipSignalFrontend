import React from "react";
import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackgroundImage from "../../../assets/image/login_banner.png"
import BackgroundImage1 from "../../../assets/image/sacnner.png"
// import facebookIcon from "./asset/images/icon/facebook.svg";
// import googleIcon from "./asset/images/icon/google.svg";
// import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();
    const { fullName, email, password, passwordRepeat,referralCode } = user;
    if (fullName && email && password == passwordRepeat) {
      console.log(user);
      await axios
        .post("http://localhost:3005/api/v1/register", user)
        .then((res) => {
          if ((res.data.message = "Successfully Register")) {
            //   toast.success("Successfully Registered", {
            //     position: "bottom-left",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //   });
            navigate("/login");
            return;
          } else {
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
      //       <div class="col-md-4 ">
      //         <img src={BackgroundImage3} />
      //         <div>
      //           <p style={{ color: "black" }}>Submit Request</p>
      //         </div>
      //       </div>
    }
  };

  return (
    // <div>
    //   <form  >
    //     <div className="RegisterContainer2"
    //       style={{
    //         backgroundImage: `url(${BackgroundImage}),url(${BackgroundImage1})`,
    //         backgroundPosition:"left,right",
    //         backgroundRepeat:"no-repeat",
    //         backgroundSize:"30%,20%",
    //         height:"80vh",
    //         paddingTop:"10vh"
    //       }}
    //     >
    //       {/* <p>
    //           <p className="RegisterTitle">Sign up </p>
    //           <h6 className="RegisterSubtitle">Register with your email and mobile.</h6>
    //         </p> */}
    //       <label className="RegisterTitle">
    //         <b>Sign up</b>
    //       </label>
    //       <p className="RegisterSubtitle">
    //         Register with your email and mobile.
    //       </p>
    //       <div className="inputSet">
    //         <input
    //           type="text"
    //           placeholder="Enter Full Name"
    //           name="fullName"
    //           value={user.fullName}
    //           onChange={handleChange}
    //           id="RegisterFullName"
    //           required
    //         />
    //       </div>
    //       <div className="inputSet">
    //         <input
    //           type="text"
    //           placeholder="Enter email"
    //           name="email"
    //           value={user.email}
    //           onChange={handleChange}
    //           id="RegisterEmail"
    //           required
    //         />
    //       </div>

    //       <div className="inputSet">
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           name="password"
    //           value={user.password}
    //           onChange={handleChange}
    //           id="RegisterPassword"
    //           required
    //         />
    //       </div>

    //       <div className="inputSet">
    //         <input
    //           type="password"
    //           placeholder="Repeat Password"
    //           name="passwordRepeat"
    //           value={user.passwordRepeat}
    //           onChange={handleChange}
    //           id="RegisterPasswordRepeat"
    //           required
    //         />
    //       </div>
    //       <button
    //         type="button"
    //         className="btn btn-danger RegisterBtn"
    //         onClick={(e) => Register(e)}
    //       >
    //         Sign up
    //       </button>

    //       <div id="alternativeRegister">
    //         <div id="iconGroup">
    //           {/* <img className="icon" src={facebookIcon}></img>
    //             <img className="icon" src={googleIcon}></img> */}
    //         </div>
    //       </div>

    //       <p className="RegisterText">
    //         {" "}
    //         <Link to="/login">
    //           <span className="RegisterLink">
    //             {" "}
    //             Already have an account?Login From here
    //           </span>
    //         </Link>
    //       </p>
    //     </div>
    //   </form>
    // </div>
    <div className="mainDiv">  
      <div class="row RequestContainer2">
        <div class="col-lg-4" style={{opacity:"0.8"}}>
          <img className="image-banner" src={BackgroundImage} />
         
        </div>
        <div class="col-lg-4">
        <label className="RequestTitle">
           <b>Register </b>
         </label>
         <div className="inputSet">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Full Name"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              id="RegisterFullName"
              required
            />
          </div>
          <div className="inputSet">
            <input
              className="form-control"
              type="text"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handleChange}
              id="RegisterEmail"
              required
            />
          </div>

          <div className="inputSet">
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              id="RegisterPassword"
              required
            />
          </div>

          <div className="inputSet">
            <input
              className="form-control"
              type="password"
              placeholder="Repeat Password"
              name="passwordRepeat"
              value={user.passwordRepeat}
              onChange={handleChange}
              id="RegisterPasswordRepeat"
              required
            />
          </div>
          <div className="inputSet">
            <input
              className="form-control"
              type="text"
              placeholder="Referral Code"
              name="referralCode"
              value={user.referralCode}
              onChange={handleChange}
              id="referralCode"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-danger RegisterBtn"
            onClick={(e) => Register(e)}
          >
            Sign up
          </button>
          <p className="RegisterText">
             {" "}
             <Link to="/login">
               <span className="RegisterLink">
                 {" "}
                 Already have an account?Login From here
               </span>
             </Link>
           </p>
        </div>

        <div class="col-md-4 qr" style={{opacity:"0.9", backgroundPosition:"center"}}>
          <img src={BackgroundImage1} />
          <p>Scan this QR code</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
