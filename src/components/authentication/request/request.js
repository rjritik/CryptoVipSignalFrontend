import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./request.css";
import BackgroundImage from "../../../assets/image/login_banner.png"
import BackgroundImage1 from "../../../assets/image/sacnner.png"

const Request = (props) => {

  const[theme,setTheme]=useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [props.state])

  
  const navigate = useNavigate();
  const [userRequest, setUserRequest] = useState({
    fullName: "",
    telegramId: "",
    description: "",
  });

  const RequestForm = async (e) => {
    e.preventDefault();
    const { fullName, telegramId, description } = userRequest;
    if (fullName && telegramId && description) {
      console.log(userRequest);
      await axios
        .post("http://localhost:3005/api/v1/requestForm", userRequest)
        .then((res) => {
          if ((res.data.message = "Successfully Request Submitted")) {
            //   toast.success("Successfully Registered", {
            //     position: "bottom-left",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //   });
            navigate("/home");
            //  <Link to="/login" />
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRequest({
      ...userRequest,
      [name]: value,
    });
  };
  return (
   <div >
     <div className="mainDiv" id={theme}>  
      <div class="row RequestContainer2">
        <div class="col-lg-4 " style={{opacity:"0.8"}}>
          <img className="image-banner" src={BackgroundImage} />
         
        </div>
        <div class="col-lg-4">
        <label className="RequestTitle">
           <b>Submit Reqeust </b>
         </label>
          <div className="inputRequestSet">
            <input 
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={userRequest.fullName}
              onChange={handleChange}
              id="fullName"
              className="form-control"
              required
            />
          </div>
          <div className="inputRequestSet">
            <input
             className="form-control"
              type="text"
              placeholder="Telegram Id"
              name="telegramId"
              value={userRequest.telegramId}
              onChange={handleChange}
              id="telegramId"
              required
            />
          </div>
          <div >
             <textarea
              id="description"
              cols={35}
              rows={3}
              className="form-input"
              name="description"
              placeholder="Description"
              defaultValue={""}
              value={userRequest.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger RegisterBtn"
            onClick={(e) => RequestForm(e)}
          >
            Submit
          </button>
        </div>

        <div class="col-md-4  qr" style={{opacity:"0.9", backgroundPosition:"center"}}>
          <img src={BackgroundImage1} />
          <p>Scan this QR code</p>
         
        </div>
      </div>
    </div>
   </div>
  );
};

export default Request;
