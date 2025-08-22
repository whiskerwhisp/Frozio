"use client";

import React from 'react'
import dawg from "../public/assets/dawg.jpg"
import Image from "next/image"
import {motion} from "framer-motion";
const reviews = [
  {
    text: "This mango sorbet is a burst of tropical joy in every spoonful. Perfectly tangy and refreshing!",
    imageSrc: dawg,
    name: "Lila Summers",
    username: "@sorbetqueen",
  },
  {
    text: "I tried the double chocolate fudge and it honestly changed my life. Rich, creamy, and just the right amount of sweet.",
    imageSrc: dawg,
    name: "Aaron Blake",
    username: "@chocofanatic",
  },
  {
    text: "Their pistachio flavor is elite. Nutty, smooth, and not too sweet—just how I like it.",
    imageSrc: dawg,
    name: "Maya Lin",
    username: "@pistachiopro",
  },
  {
    text: "I wasn't even an ice-cream person until I had their caramel swirl. Addictive in the best way possible.",
    imageSrc: dawg,
    name: "Theo Wright",
    username: "@sweetobsessed",
  },
  {
    text: "Strawberry cheesecake in a cone? Yes please! Tastes like a summer picnic in dessert form.",
    imageSrc: dawg,
    name: "Nina Patel",
    username: "@dessertdreamer",
  },

  {
    text: "Strawberry cheesecake in a cone? Yes please! Tastes like a summer picnic in dessert form.",
    imageSrc: dawg,
    name: "Nina Patel",
    username: "@dessertdreamer",
  },
  {
    text: "Strawberry cheesecake in a cone? Yes please! Tastes like a summer picnic in dessert form.",
    imageSrc: dawg,
    name: "Nina Patel",
    username: "@dessertdreamer",
  },
  {
    text: "Strawberry cheesecake in a cone? Yes please! Tastes like a summer picnic in dessert form.",
    imageSrc: dawg,
    name: "Nina Patel",
    username: "@dessertdreamer",
  },

  {
    text: "Strawberry cheesecake in a cone? Yes please! Tastes like a summer picnic in dessert form.",
    imageSrc: dawg,
    name: "Nina Patel",
    username: "@dessertdreamer",
  },
];

const firstColumn = reviews.slice(0,3);
const secondColumn = reviews.slice(3,6);
const thirdColumn = reviews.slice(6,9);
const ReviewsColumn = (props:{className?:string; reviews: typeof reviews; duration?:number})=>(
       <div className={props.className}>
       <motion.div animate={{
        translateY: "-50%",}}
        transition={{
          duration:props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index)=>(
                <React.Fragment key={index}>
 {props.reviews.map(({text, imageSrc, name, username}, idx) => (
            <div className="card" key={name + username + idx}>
               <div>{text}</div>
               <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full"/>
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
               </div>
            </div> ))}
                </React.Fragment>
        ))}
      </motion.div>
      </div>
);

const Reviews = () => {
  return (
     <section className="bg-white py-0">
      <div className="container">
        <div className="flex justify-center">
        <div className="tag">Reviews</div>
        </div>
        <h2 className="my-Heading mt-5">What our Customers says</h2>
        <p className="para">Real reviews from real customers who cant get enough of our delicious treats</p>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
  <ReviewsColumn reviews={firstColumn} duration={15}/>
<ReviewsColumn reviews={secondColumn} className="hidden md:block duration={19}"/>
<ReviewsColumn reviews={thirdColumn} className="hidden lg:block duration={17}"/>
      </div>
      </div>
     </section>
  )
}

export default Reviews;
