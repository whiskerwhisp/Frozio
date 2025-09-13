"use client";
import React, { useState } from "react";

import Header from "../sections/Header";
import Home from "../sections/Home";
import LogoTicker from "../sections/LogoTicker";
import IceCream from "../sections/IceCream";
import Boxes from "../sections/Boxes";
import Reviews from "../sections/Reviews";
import CallToAction from "../sections/CallToAction";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import CartModal from "../sections/CartModal";

const Page: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCartClick = (): void => {
    setIsCartOpen(true);
  };

  const handleCartClose = (): void => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      <Home />
      <LogoTicker />
      <IceCream />
      <Boxes />
      <Reviews />
      <CallToAction />
      <Contact />
      <Footer />
      
      {/* Cart Modal - rendered at page level for proper positioning */}
      <CartModal isOpen={isCartOpen} onClose={handleCartClose} />
    </>
  );
};

export default Page;