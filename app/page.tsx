import React from "react"

import Header from "../sections/Header"
import Hero from "../sections/Hero"
import  LogoTicker from "../sections/LogoTicker"
import IceCream from "../sections/IceCream"
import Pricing  from "../sections/Pricing"
import Reviews from "../sections/Reviews"
import CallToAction from "../sections/CallToAction"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"

const page = () => {
  return (
  <>
   <Header/>
    <Hero/>
   <LogoTicker/>
   <IceCream/>
    <Pricing/>
    <Reviews/>
    <CallToAction/>
    <Contact/>
    <Footer/>
 </>)}
export default page;