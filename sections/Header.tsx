"use client"
import React from "react";
import {useState} from "react";
import { Menu,  X  } from "lucide-react";

const LINKS = [
  {name:"Home", link: "#Hero"},
{name:"Products", link: "#IceCream"},
{name:"Boxes", link: "#boxes"},
{name:"Contact", link: "#contact"}
]
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen)
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#DAE8FF]/60">
      <div className="py-5 px-3">
       
          <div className="flex items-center justify-between px-7">
            <p className="text-[#0b1957] text-xl font-bold font-jersey">Welcome To Frozio 𓎦</p>
           
            <div className="md:hidden">
          <button
            onClick={toggle}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close" : "Open"}>
            {isOpen ? <X/> : <Menu />}
          </button>
        </div>
            <nav className="hidden md:flex gap-5 text-[#0b1957]/60 font-bold items-center p-4">
              {LINKS.map((link, index)=>(
                <a key={index} href={link.link} className=" text-[#0b1957]/60 font-bold">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#DAE8FF]/95 border-t py-5 px-4 mt-2`}>
          {LINKS.map((link, index)=>(
            <a key={index} href={link.link} className="block py-2 text-[#0b1957]/60 font-bold tracking-wide">
              {link.name}
            </a>
          ))}
          </div>
        </div>
    </header>
  )
}

export default Header;
