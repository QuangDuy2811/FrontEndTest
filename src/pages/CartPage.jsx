import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    image: "https://via.placeholder.com/80x100?text=T-Shirt",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    image: "https://via.placeholder.com/80x100?text=Shirt",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    image: "https://via.placeholder.com/80x100?text=Jeans",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [promo, setPromo] = useState("");
  const deliveryFee = 15;
  const discountPercent = 20;

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                  <p className="font-medium mt-1">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border p-6 rounded-lg shadow-sm space-y-4 h-fit">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount ({discountPercent}%)</span>
            <span>-${discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              value={promo}
              onChange={e => setPromo(e.target.value)}
              className="border w-full p-2 rounded mb-2"
            />
            <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
              Apply
            </button>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded mt-4 hover:bg-gray-800">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
