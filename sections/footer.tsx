import React from 'react'
import { Instagram,Facebook,Twitter  } from 'lucide-react';
import Image from 'next/image';
const footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative>">
         <Image 
         src={"/assets/logo.jpg"} height={40} width={40} alt="logo"/>
         </div>
     
      <div className="flex justify-center gap-6 mt-8">
        <Instagram/>
        <Facebook/>
        <Twitter/>
      </div>
      <p className="mt-6">&copy; 2025 Frozio. All meow reserved</p>
       </div>
    </footer>
  )
}

export default footer;
