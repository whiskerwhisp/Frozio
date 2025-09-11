import React from "react"

import Header from "../sections/Header"
import Home from "../sections/Home"
import LogoTicker from "../sections/LogoTicker"
import IceCream from "../sections/IceCream"
import Boxes  from "../sections/Boxes"
import Reviews from "../sections/Reviews"
import CallToAction from "../sections/CallToAction"
import Contact from "../sections/Contact"
import Cart from "../sections/Cart"
import Footer from "../sections/Footer"

const page = () => {
  return (
  <>
   <Header/>
   <Home/>
   <LogoTicker/>
   <IceCream/>
    <Boxes/>
    <Reviews/>
    <CallToAction/>
    <Cart/>
    <Contact/>
    <Footer/>
 </>)}
export default page;