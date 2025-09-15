"use client";
import React from 'react'
import { MoveRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#FFD4E1] py-24 overflow-x-clip">
        <div className="section-heading relative">
          <h2 className="my-Heading m-5">۶ৎScoop Yours Today</h2>
          <p className="para mt-5 font-jetBrains">Chill out with our creamy, dreamy flavors made fresh every day just for you!</p>
          <motion.img
            src={"/assets/bowl.png"}
            alt="iceCreamBowl"
            height={20}
            width={450}
            className="absolute -left-[430px] -top-[150px]"
            style={{
              translateY,
            }} />

          <motion.img
            src={"/assets/cone.png"}
            alt="iceCreamCone"
            height={20}
            width={380}
            className="absolute -right-[331px] -top-[10px] rotate-[30deg]"
            style={{
              translateY,
            }} />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn-primary px-4 py-2 ml-5 rounded-lg font-medium inline-flex items-center justify-center">Order Now</button>
          <button className="btn btn-text font-bold"><span>Check Flavours</span>
            <MoveRight className="h-5 w-5 inline-flex m-1"/>
          </button>
        </div>
    </section>
  )
}

export default CallToAction;
