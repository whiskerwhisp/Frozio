"use client";
import { Trash } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import {removeFromCart, incrementQuantity, decrementQuantity, cartClear,} from "../features/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="ml-3"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                  <Trash />
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
            className="mt-6 bg-amber-300 text-white px-6 py-2 rounded hover:bg-red-500"
            onClick={() => dispatch(cartClear())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;


