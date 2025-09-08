"use client";
import React from 'react'
import { MoveRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#DAE8FF,#FFD4E1,#DAE8FF__100%)] overflow-x-clip" id="home">
      <div className="container">
        <div className="md:flex items-center lg:mx-16">
          <div className="md:w-[478px]">
            {/* <div className="tag ml-10">It finally here</div> */}
            <h1 className="my-Heading">⋆.˚ᡣ𐭩 Scoops of Joy ⋆˚</h1>
            <p className="para font-jetBrains md:ml-6">From creamy classics to bold new flavors, our scoops are made to turn every bite into a moment of joy. Pick your favorites, mix and match, and let summer feel a little sweeter</p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary ml-10">Build Your Box</button>
              <a href="#reviews"> <button className="btn btn-text font-bold" ><span> Why Frozio Scoops?</span>
                <MoveRight className="h-5 w-5 inline-flex m-1" />
              </button></a>
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
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            />
            <motion.img src={"/assets/splashOne.png"} alt="SpalshOne" height={220} width={150} className="hidden md:block -top-6 right-1/2 md:absolute rotate-[-30deg]"
              style={{
                translateY: translateY,
              }} />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
