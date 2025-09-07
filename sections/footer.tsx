import React from 'react'
import { Instagram,Facebook,Twitter  } from 'lucide-react';
import Image from 'next/image';
const footer = () => {
  return (
    <footer className="pt-8 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#DAE8FF,#FFD4E1,#DAE8FF__100%)] overflow-x-clip text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative>">
         <Image 
         src={"/assets/ice_cream_logo.png"} height={40} width={100} alt="logo"/>
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
