"use client";
import React from "react";
import Cart from "../sections/Cart";
import {X} from "lucide-react";
interface CartModalProps{
   isOpen: boolean;
   onClose: () => void;
}

const CartModal = ({isOpen, onClose}: CartModalProps) =>{
  if (!isOpen) return null;

const handleModalClick = (e: React.MouseEvent<HTMLDivElement>)=>{
  if(e.target === e.currentTarget){
    onClose();
  }
};
return(
  <div className="fixed inset-0 bg-black/50  flex justify-center items-center z-50"
  onClick={handleModalClick}>
   <div className="relative bg-gradient-to-b from-white to-[#FFD4E1] rounded-xl shadow-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6">
   <button onClick={onClose} className="absolute top-3 right-3 text-black text-2xl"><X/></button>
  <Cart/>
   </div>
  </div>
)
}
export default CartModal;

