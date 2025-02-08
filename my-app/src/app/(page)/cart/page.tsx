"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Sample images (Replace with actual URLs)
import img1 from "../../../public/chairimg.png";
import img2 from "../../../public/Large.png";

export default function CheckoutPage() {
  // Sample cart items (Replace with real data)
  const cartItems = [
    { id: 1, name: "Library Stool Chair", price: 99, quantity: 1, image: img1 },
    { id: 2, name: "Library Stool Chair", price: 99, quantity: 1, image: img2 },
  ];

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    console.log("Order placed!", cartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
      {/* Left Section: Bag */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Bag</h2>
        
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-500">Ashen Slate / Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Quantity {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">MRP: ${item.price}</p>
              {/* Icons for Wishlist & Delete (Replace with actual icons) */}
              <div className="flex gap-2 mt-2">
                <button className="text-gray-500">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Summary */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg mt-2">
          <span>Estimated Delivery & Handling</span>
          <span className="text-green-600">Free</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Button onClick={handlePlaceOrder} className="bg-[#029FAE] w-full mt-6 py-3 text-white text-lg rounded-md">
          Checkout
        </Button>
      </div>
    </div>
  );
}
