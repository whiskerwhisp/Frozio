"use client";

import React from 'react'
import dawg from "../public/assets/dawg.jpg"
import Image from "next/image"
import {motion} from "framer-motion";
const reviews = [
  {
    "text": "I can’t get enough of Frozio! The creamy flavors turn every scoop into a little celebration. Absolutely amazing!",
    "imageSrc": dawg,
    "name": "Sarah Johnson",
    "username": "@SarahSweets"
  },
  {
    "text": "Every visit to Frozio is a treat! The unique flavors and friendly service make it the perfect spot to cool off. Love it!",
    "imageSrc": dawg,
    "name": "Michael Torres",
    "username": "@MikeTreats"
  },
  {
    "text": "The ice cream here is incredible! The bold new flavors are a hit, and the classics feel so nostalgic. Highly recommend!",
    "imageSrc": dawg,
    "name": "Emily Rivera",
    "username": "@EmIceCream"
  },
  {
    "text": "Frozio has the best treats around! Every bite is so rich and satisfying—beautifully presented too!",
    "imageSrc": dawg,
    "name": "David Lee",
    "username": "@DavidDesserts"
  },
  {
    "text": "What a gem! The ice cream is perfectly sweet, and the summer vibe makes it a must-visit. Love it!",
    "imageSrc":dawg,
    "name": "Priya Sharma",
    "username": "@PriyaPops"
  },
  {
    "text": "I built my own box, and it was a party favorite! Frozio’s variety and quality are top-notch!",
    "imageSrc": dawg,
    "name": "James Patel",
    "username": "@JamesJ scoops"
  },
  {
    "text": "This is the creamiest ice cream I’ve ever tasted! The sprinkle-topped scoops are my favorite—delicious!",
    "imageSrc": dawg,
    "name": "Laura Martinez",
    "username": "@LauraLicks"
  },
  {
    "text": "Frozio is fantastic! The friendly service and amazing flavors keep me coming back. Five stars!",
    "imageSrc":dawg,
    "name": "Ahmed Khan",
    "username": "@AhmedCool"
  },
  {
    "text": "Every visit is a joy! The unique flavors and cozy atmosphere make this the best ice cream spot around!",
    "imageSrc": dawg,
    "name": "Rachel Green",
    "username": "@RachelRaves"
  }
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
        <h2 className="my-Heading mt-5">What Our Customers Says 𐙚˙⋆.</h2>
        <p className="para font-jetBrains">Real reviews from real customers who cant get enough of our delicious treats</p>
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
