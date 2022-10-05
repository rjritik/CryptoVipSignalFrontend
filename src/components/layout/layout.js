import React from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import TradeScanner from "../midComponent/tradeScanner/tradeScanner";
import ImageComponent from "../midComponent/imageComponent/imageComponent";
import Aboutcvs from "../midComponent/aboutCvs/aboutCvs";
import MarketPrice from "../midComponent/marketPrice/marketPrice";
import Price from '../midComponent/marketPrice/price';
import {useState, useEffect } from 'react';

const Layout = () => {

  const[theme,setTheme]=useState("light");
  useEffect(() => {
    toggleTheme();
  }, [theme])

  const toggleTheme=()=>{
    setTheme(localStorage.getItem("theme"))
    console.log(theme);
  }
  return (

    <div className='ScrollBar'>
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
       <MarketPrice theme={theme} toggleTheme={toggleTheme}/>
       <Price theme={theme} toggleTheme={toggleTheme}/>
        <ImageComponent theme={theme} toggleTheme={toggleTheme}/>
        <TradeScanner theme={theme } toggleTheme={toggleTheme}/>
        <Aboutcvs theme={theme} toggleTheme={toggleTheme}/>
        <Footer theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Layout