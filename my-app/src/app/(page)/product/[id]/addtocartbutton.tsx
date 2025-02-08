"use client"; // ✅ This must be a client component

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AddToCartButton({ productId }: { productId: string }) {
  const handleAddToCart = () => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <Button onClick={handleAddToCart} className="bg-[#029FAE] text-white py-3 flex items-center justify-center gap-2 rounded-xl">
      <ShoppingCart className="w-5 h-5" />
      Add to Cart
    </Button>
  );
}
