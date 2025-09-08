import { Check } from 'lucide-react';
const pricingLists = [
    {
        title: "🍋 Lil Taster Box",
        price: 5,
        description: "Perfect for first-timers",
        treats: [
            "2 fun-sized scoops",
            "free sprinkels",
            "great as a gift",
            "perfect for kids",
        ],
        btnText: "give it a try",
     
    },
    {
        title: "🍨 Double Delight",
        price: 12,
        description: "For the serious scoopers",
        treats: [
            "5 normal-sized scoops",
            "premium toppings",
            "2 waffle cones",
            "flavor mix-ins",
            "take-home container"
        ],
        btnText: "dig in",
      
    },
    {
        title: "🍦 Ultimate Sundae Party",
        price: 25,
        description: "The whole frozen experience",
        treats: [
            "10 gourmet scoops",
            "unlimited toppings",
            "premium waffle bowls",
            "hot fudge fountain",
            "take-home pint",
            "branded ice cream scoop",
            "branded ice cream scoop"
        ],
        btnText: "go all in",

    }
];


import React from 'react'

const Boxs = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFD4E1] to-white py-24 overflow-x-clip" id="boxes">
     <div className="container">
      <div className="max-w-[540px] mx-auto">
<h2 className="my-Heading">Happiness Served Fresh۫</h2>
<p className="para mt-5 font-jetBrains">
From classic cones to dreamy sundaes, Frozio brings the magic of ice cream right to your taste buds. 
Fresh flavors, creamy textures, and smiles in every bite — that’s our promise.
</p>
</div>
<div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
  {pricingLists.map((
  {title,price,description,treats, btnText},index)=>(
     <div key={index} className="card">
    <div>
      <h3 className="text-lg font-bold text-[#656b97]">{title}</h3>
      <p className="text-sm text-black mt-1">{description}</p>
    </div>
    <div className="flex items-baseline gap-1 mt-[30px]">
      <span className="text-4xl font-bold tracking-tighter leading-none">${price}</span>
       <span className="tracking-tight font-bold text-[#656b97]">/scoop</span>
    </div>
    <button className="btn btn-primary mt-[30px]">{btnText}</button>
    <ul className="flex flex-col gap-5 mt-8">
      {treats.map((treat,idx) => (
        <li key={idx} className="text-sm flex items-center gap-4">
          <Check className="text-pink-400"/>
          <span>{treat}</span></li>
      ))}
    </ul>
  </div>
  ))}
 
</div>
     </div>
    </section>
  )
}

export default Boxs;


