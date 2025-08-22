import React from "react"
import Image from "next/image";
import chocoCone from "../public/assets/chocolate-cone.png"
import vanillaCone from "../public/assets/vanilla-cone.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imageSlides = [
    {
        image: chocoCone,
        title: "chocolate",
        description: "chocolate ice-cream cone"
    },
    {
        image: vanillaCone,
        title: "vanilla",
        description: "chocolate ice-cream cone"
    },
    {
        image: chocoCone,
        title: "chocolate",
        description: "chocolate ice-cream cone"
    }
]

const IceCream = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#FFD4E1] py-24 overflow-x-clip">
        <div className="container">
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                    {imageSlides.map((imageSlide, index) => (
                        <CarouselItem key={index}>
                            <div className="flex flex-col items-center gap-4 p-4">
                                <Image
                                    src={imageSlide.image}
                                    alt={imageSlide.title}
                                    height={300}
                                    width={300}
                                    className="h-64 object-cover rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 300px"/>
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold">{imageSlide.title}</h3>
                                    <p className="text-sm text-gray-500">{imageSlide.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext />
            </Carousel>
            </div>
        </section>
    )
}

export default IceCream;


 



