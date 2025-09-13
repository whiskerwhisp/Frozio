// "use client";
// import { Trash } from 'lucide-react';
// import { useSelector, useDispatch } from "react-redux";
// import {removeFromCart, incrementQuantity, decrementQuantity, cartClear,} from "../features/cart/cartSlice";

// function Cart() {
//     const items = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const totalPrice = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-6 max-w-3xl mx-auto" id="cart">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//       {items.length === 0 ? (
//         <p className="text-gray-500">No items in cart</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b pb-3"
//               >
//                 <div>
//                   <p className="font-semibold">{item.title}</p>
//                   <p className="text-sm text-gray-500">
//                     ${item.price} × {item.quantity}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded"
//                     onClick={() => dispatch(decrementQuantity(item.id))}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded"
//                     onClick={() => dispatch(incrementQuantity(item.id))}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="ml-3"
//                     onClick={() => dispatch(removeFromCart(item.id))}
//                   >
//                     <Trash />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* total pricing */}
//           <div className="mt-6 flex justify-between items-center text-xl font-bold">
//             <span>Total:</span>
//             <span>${totalPrice.toFixed(2)}</span>
//           </div>

//           <button
//             className="mt-6 bg-amber-300 text-white px-6 py-2 rounded hover:bg-red-500"
//             onClick={() => dispatch(cartClear())}
//           >
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;


"use client";
import React from "react";
import { Trash } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity, cartClear } from "../features/cart/cartSlice";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface RootState {
  cart: CartState;
}

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice: number = items.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  const handleDecrementQuantity = (id: string): void => {
    dispatch(decrementQuantity(id));
  };

  const handleIncrementQuantity = (id: string): void => {
    dispatch(incrementQuantity(id));
  };

  const handleRemoveFromCart = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = (): void => {
    dispatch(cartClear());
  };

  return (
    <div className="p-6 max-w-3xl mx-auto" id="cart">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    onClick={() => handleDecrementQuantity(item.id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="min-w-[2rem] text-center">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    onClick={() => handleIncrementQuantity(item.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    className="ml-3 text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => handleRemoveFromCart(item.id)}
                    aria-label="Remove item from cart"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* total pricing */}
          <div className="mt-6 flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="mt-6 bg-amber-300 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors font-semibold"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;