import React from "react"
import Image from "next/image";
import Chocolate from "../public/assets/chocolateCard.png"
import Vanilla from "../public/assets/vanillaCard.png"
import Strawberry from "../public/assets/strawberryCard.png"
import Butterscotch from "../public/assets/butterscotchCard.png"
import MintChocolate from "../public/assets/mintchocoCard.png"
import Sundae from "../public/assets/sundaeCard.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imageSlides = [
    {
        image:Chocolate,
        title: "Chocolate",
        description: "Rich, creamy, and so-chocolaty"
    },
    {
        image:Vanilla,
        title: "vanilla",
        description:"Classic, smooth, and timelessly sweet"
    },
    {
        image:Strawberry ,
        title: "Strawberry",
        description: "Fresh, fruity, and berry-licious"
    },
    {
        image:Butterscotch ,
        title: "Butterscotch",
        description: "Caramel-crunchy with a buttery twist"
    },
    {
        image:MintChocolate ,
        title: "MintChocolate",
        description: "Cool mint swirls with choco chunks"
    },
    {
        image:Sundae ,
        title: "Sundae",
        description:"A delightful mix of scoops, syrup & joy"
    },
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
                                    className="h-64 object-contain rounded-xl"
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

