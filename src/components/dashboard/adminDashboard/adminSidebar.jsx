import React, { useState , useEffect } from "react";
import "./adminSidebar.css";
// import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./adminMainDash/adminData"
import { UilBars } from "@iconscout/react-unicons";
import {AnimatePresence, motion} from 'framer-motion'
import { useWeb3React } from '@web3-react/core';
// import {injected} from './../Helpers/connectors'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)

    //connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 

  // useEffect(() => {
  //   const connectMetamaskSimple = async () => {
  //     try {
  //       await web3reactContext.activate(injected);
  //     } catch (ex) {
  //       console.log(ex);
  //     }
  //   };

  //   connectMetamaskSimple();
  // }, [])

  //web3react metamask
	// const disconnectMetamaskSimple = async () => {
	// 	try {
	// 		await web3reactContext.deactivate();
	// 	} catch (ex) {
	// 		console.log(ex);
	// 	}
	// };

  // useEffect(() => {

  //   const loadSql =()=>{

  //   // if (web3reactContext.active === false) {
  //   //  window.location.replace("/");
  //   // }

  //   console.log(web3reactContext.active)

  //   }

  //   loadSql();
  // }, [disconnectMetamaskSimple])

  
  


  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      {/* <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div> */}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem activebtn" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
