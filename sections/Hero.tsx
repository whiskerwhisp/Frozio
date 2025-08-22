// #B5CDFF-dark blue
// #DAE8FF- light blue
// #FEABC5- dark pink
// #FFD4E1 - light pink
// md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0
//  md:-left-6 lg:left-0
// md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 lg:ml-70
"use client";
import React from 'react'
import { MoveRight} from "lucide-react";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from 'react';
const Hero = () => {
  const heroRef= useRef(null);
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset: ["start end", "end start"]
  });
  const translateY= useTransform(scrollYProgress, [0,1], [150,-150]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#DAE8FF,#FFD4E1,#DAE8FF__100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag ml-5">its finally here</div>
          <h1 className="my-Heading">Summer’s Sweetest Treats</h1>
          <p className="text-xl text-[#F0A8D0] tracking-tight mt-6 ml-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis cumque, harum porro, earum quisquam quas est quos.</p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary ml-5">Build Your Box</button>
            <button className="btn btn-text"><span> Why Frozio?</span>
             <MoveRight className="h-5 w-5 inline-flex m-1"/>
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img 
          src={"/assets/iceCream.png"} 
          alt="iceCream"
          height={200}
           width={400}
          className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 lg:ml-75"
          animate={{
            translateY:[-30, 30],
          }}
          transition={{
            repeat:Infinity,
            duration:10,
            repeatType:"mirror",
            ease: "easeInOut"
          }}
          />
          <motion.img src={"/assets/splashOne.png"} alt="SpalshOne" height={220} width={150} className="hidden md:block -top-6 right-1/2 md:absolute rotate-[-30deg]"
          style={{
            translateY: translateY,
          }}/>
    
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;



// <Image src={"/assets/splashTwo.png"}
       //  alt="SpalshTwo"
        //  height={20} width={280} 
         // className="hidden lg:block absolute top-[524px] left-[448px] rotate-[-30deg]"/>