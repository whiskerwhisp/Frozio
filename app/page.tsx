import React from "react"

import Header from "../sections/Header"
import Hero from "../sections/Hero"
import  LogoTicker from "../sections/LogoTicker"
import IceCream from "../sections/IceCream"
import Pricing  from "../sections/Pricing"
import Reviews from "../sections/Reviews"
import CallToAction from "../sections/CallToAction"
import Footer from "../sections/footer"

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
    <Footer/>
 </>)}
export default page;