"use client";
import React from "react";
import { Trash } from "lucide-react";
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
      <h1 className="text-xl md:text-3xl text-[#0b1957] font-bold mb-6">Your basket</h1>
      {items.length === 0 ? (
        <p className="text-[#0b1957]">Empty Basket </p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item: CartItem) => (
              <div key={item.id}
                className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-semibold text-[#dd3872]">{item.title}</p>
                  <p className="text-sm text-[#0b1957] ">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-[#e8f1fe] rounded hover:bg-[#b5cff4] transition-colors"
                    onClick={() => handleDecrementQuantity(item.id)}
                    aria-label="decrease quantity">-</button>
                  <span className="min-w-[2rem] text-center">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-[#e8f1fe] rounded hover:bg-[#b5cff4] transition-colors"
                    onClick={() => handleIncrementQuantity(item.id)}
                    aria-label="increase quantity">+</button>
                  <button
                    className="ml-3"
                    onClick={() => handleRemoveFromCart(item.id)}
                    aria-label="removing item from basket"><Trash size={18} /></button>
                </div>
              </div>
            ))}
          </div>

          {/* total pricing */}
          <div className="mt-6 flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
       <button className="mt-6 bg-[#ffafcc] text-[#0b1957] px-6 py-2 rounded-xl font-semibold hover:bg-[#f26095] transition" onClick={handleClearCart}>Clear Cart</button>
</>
)}
    </div>
  );
};

export default Cart;


