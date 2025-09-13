// "use client";
// import React from "react";
// import Cart from "../sections/Cart";

// interface CartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CartModal = ({ isOpen, onClose }: CartModalProps) => {
//   if (!isOpen) return null;

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className=" text-black flex justify-center items-center z-50"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-pink-300 rounded-xl shadow-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6">
//         {/* close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         <Cart />
//       </div>
//     </div>
//   );
// };

// export default CartModal;

"use client";
import React from "react";
import Cart from "../sections/Cart";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-xl shadow-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

        <Cart />
      </div>
    </div>
  );
};

export default CartModal;