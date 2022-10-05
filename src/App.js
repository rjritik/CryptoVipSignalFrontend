import "./App.css";
import Layout from "./components/layout/layout";
import {useState, useEffect } from 'react';
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/authentication/login/login";
import Register from "./components/authentication/register/register"
import Request from "./components/authentication/request/request";
import Dashboard from "../src/components/dashboard/userDashboard/MainDash/MainDash"
import Sidebar from "../src/components/dashboard/adminDashboard/adminSidebar"
 import AdminDashboard from "../src/components/dashboard/adminDashboard/adminMainDash/adminMainDash"

function App() {

  // const[theme,setTheme]=useState("light");
  // useEffect(() => {
  //   toggleTheme();
  // }, [theme])

  // const toggleTheme=()=>{
  //   setTheme(localStorage.getItem("theme"))
  //   console.log(theme);
  // }
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Layout />}></Route>
        <Route
          path="/register"
          element={
            <div>
              <Navbar />
              <Register />
            </div>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <div>
              <Navbar />
              <Login />
            </div>
          }
        >
        </Route>
        <Route
          path="/request"
          element={
            <div>
              <Navbar />
              <Request/>
            </div>
          }
        ></Route>
        <Route
          path="/adminDashboard"
          element={
            <div className="App">
               <div className="AppGlass" >
                <Sidebar/>
              <AdminDashboard />
            </div>
            </div>
           
          }
        >
        </Route>
        <Route
          path="/dashboard"
          element={
            <div className="App">
               <div className="AppGlass" >
                <Sidebar/>
                <Dashboard />
            </div>
            </div>
          }
        ></Route>
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
