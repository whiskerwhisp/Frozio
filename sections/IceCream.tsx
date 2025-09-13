"use client"
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import React from "react";
import Image from "next/image";
import Chocolate from "../public/assets/chocolateCard.png";
import Vanilla from "../public/assets/vanillaCard.png";
import Strawberry from "../public/assets/strawberryCard.png";
import Butterscotch from "../public/assets/butterscotchCard.png";
import MintChocolate from "../public/assets/mintchocoCard.png";
import Sundae from "../public/assets/sundaeCard.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageSlides = [
  {
    id:1,
    image: Chocolate,
    title: "Chocolate",
    description: "Rich, creamy, and so-chocolaty",
    color: "text-[#a57865]",
    price: 10,
  },
  {
    id:2,
    image: Vanilla,
    title: "Vanilla",
    description: "Classic, smooth, and timelessly sweet",
    color:"text-[#c8b086]",
    price: 5,
  },
  {
    id:3,
    image: Strawberry,
    title: "Strawberry",
    description: "Fresh, fruity, and berry-licious",
    color: "text-[#e76595]",
    price:15,
  },
  {
    id:4,
    image: Butterscotch,
    title: "Butterscotch",
    description: "Caramel-crunchy with a buttery twist",
    color: "text-[#d2a357]",
      price: 22,
  },
  {
    id:5,
    image: MintChocolate,
    title: "Mint Chocolate",
    description: "Cool mint swirls with choco chunks",
    color: "text-[#7ad9bd]",
      price: 8,
  },
  {
    id:6,
    image: Sundae,
    title: "Sundae",
    description: "A delightful mix of scoops, syrup & joy",
    color: "text-[#b57edc]",
    price: 20,
  },
];

const IceCream = () => {
  const dispatch = useDispatch();
  return (
    <section className="bg-gradient-to-b from-white to-[#FFD4E1] py-24 overflow-x-clip" id="icecream">
      <div className="container">
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {imageSlides.map((imageSlide) => (
              <CarouselItem key={imageSlide.id}>
                <div className="flex flex-col items-center gap-6 p-6">
                  <Image
                    src={imageSlide.image}
                    alt={imageSlide.title}
                    height={400}
                    width={400}
                    className="md:w-[50%] lg:w-[60%]"/>
                  <div className="text-center">
                    <h3
                      className={`text-2xl font-lobster font-bold ${imageSlide.color}`}
                    >
                      {imageSlide.title}
                    </h3>
                    <p className="text-[#656b97]">
                      {imageSlide.description}
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-800">
                           ${imageSlide.price.toFixed(2)}</p>
                    <button onClick={()=>dispatch(addToCart(imageSlide))}
                    className="mt-4 bg-[#ffafcc] text-[#0b1957] px-6 py-2 rounded-lg font-medium hover:bg-[#f26095] transition">ADD
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
    </section>
  );
};

export default IceCream;


