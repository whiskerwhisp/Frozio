"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { useSelector } from "react-redux";

interface HeaderProps {
  onCartClick: () => void;
}

interface Link {
  name: string;
  link: string;
}

interface CartItem {
  id: string;
}

interface CartState {
  items: CartItem[];
}

interface RootState {
  cart: CartState;
}

const LINKS: Link[] = [
  { name: "Home", link: "#home" },
  { name: "Products", link: "#icecream" },
  { name: "Boxes", link: "#boxes" },
  { name: "Contact", link: "#contact" },
];

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#DAE8FF]/60">
      <div className="py-5 px-3">
        <div className="flex items-center justify-between px-3 md:px-7">
          <p className="text-[#0b1957] text-xl md:text-2xl font-bold font-jersey">
            Welcome To Frozio 𓎦
          </p>

          {/*hamburger menu*/}
          <div className="md:hidden">
            <button
              onClick={toggle}
              className="text-xl pt-2 focus:outline-none"
              aria-label={isOpen ? "Close" : "Open"}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop screens */}
          <nav className="hidden md:flex gap-5 text-[#0b1957]/60 font-bold items-center p-4">
            {LINKS.map((link: Link, index: number) => (
              <a
                key={index}
                href={link.link}
                className="text-[#0b1957]/60 font-bold">
                {link.name}
              </a>
            ))}
              <button
            onClick={onCartClick}
            className="flex items-center gap-2 text-[#0b1957]/60 font-bold ">
            <ShoppingBasket size={24} />
            <span>({cartItems.length})</span>
          </button>
          </nav>
        </div>

        {/* Mobile links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-[#DAE8FF]/60 border-t py-5 px-4 mt-2`} >
          {LINKS.map((link: Link, index: number) => (
            <a
              key={index}
              href={link.link}
              className="block py-2 text-[#0b1957]/60 font-bold tracking-wide">
              {link.name}
            </a>
          ))}
            <button
            onClick={onCartClick}
            className="flex items-center gap-2 text-[#0b1957]/60 font-bold">
            <ShoppingBasket size={24} />
            <span>({cartItems.length})</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;