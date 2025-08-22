"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const flavors = [
  { src: "/assets/vanilla.png", name: "Vanilla" },
  { src: "/assets/chocolate.png", name: "Chocolate" },
  { src: "/assets/strawberry.png", name: "Strawberry" },
  { src: "/assets/butterscotch.png", name: "Butterscotch" },
  { src: "/assets/cookies&creams.png", name: "Cookies & Creams" },
  { src: "/assets/pistachio.png", name: "Pistachio" },
  { src: "/assets/sundae.png", name: "Sundae" },
];

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...flavors, ...flavors].map((flavor, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <Image
                  src={flavor.src}
                  height={40}
                  width={40}
                  alt={flavor.name}
                  className="h-8 w-auto"
                />
                <p className="text-sm">{flavor.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
