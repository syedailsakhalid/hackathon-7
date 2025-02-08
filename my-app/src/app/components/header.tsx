import {
    Armchair,
    Check,
    ChevronDown,
    Circle,
    CircleAlert,
    ShoppingCart,
  } from "lucide-react";
  import Image from "next/image";
  import mainlogo from "../../public/Logo.png";
  import Link from "next/link";
  
  export default function Navbar() {
    return (
      <div className="overflow-hidden w-full flex flex-col items-center">
        {/* Top Bar */}
        <div className="bg-[#272343] w-full flex justify-center">
          <div className="w-[68%] flex justify-between h-[45px] py-[14px] text-white text-[13px]">
            <div className="flex gap-3">
              <Check className="opacity-70 size-4" />
              <h1 className="opacity-70">Free Shipping On All Orders Over $50</h1>
            </div>
            <div className="flex gap-6 opacity-70 items-center">
              <li className="flex gap-1 items-center">
                <h1>Eng</h1>
                <ChevronDown className="size-4" />
              </li>
              <h1>Faqs</h1>
              <li className="flex gap-1 items-center">
                <CircleAlert className="size-4" />
                <h1>Need Help</h1>
              </li>
            </div>
          </div>
        </div>
        
        {/* Logo & Cart */}
        <div className="  bg-[#F0F2F3] w-full flex justify-center">
         <div className="w-[68%] h-[84px] py-4 flex justify-between items-center"> <Image src={mainlogo} alt="logo" width={120} height={40} />
          <Link href="/cart">
            <div className="flex gap-3 bg-white rounded-lg h-11 w-28 justify-center items-center text-[#272343] shadow-md">
              <ShoppingCart className="size-5" />
              <h1 className="font-bold">Cart</h1>
              <Circle className="size-3" />
            </div>
          </Link></div>
        </div>
        
        {/* Navigation Bar */}
        <div className="bg-white w-full shadow-lg flex justify-center">
          <div className="w-[68%] h-[74px] flex justify-between items-center">
            <div className="flex space-x-8 text-[14px]">
              <Link href="/"><div className="text-[#272343] cursor-pointer hover:underline">Home</div></Link>
              <Link href="/shop"><div className="text-[#272343] cursor-pointer hover:underline">Shop</div></Link>
              <Link href="/product"><div className="text-[#272343] cursor-pointer hover:underline">Products</div></Link>
              <Link href="/about"><div className="text-[#272343] cursor-pointer hover:underline">About</div></Link>
              <Link href="/contact"><div className="text-[#272343] cursor-pointer hover:underline">Contact</div></Link>
            </div>
            <div className="hidden lg:flex">
              <Link href="/contact">
                <h1 className="text-[#636270] text-[13px]">Contact: (808) 555-0111</h1>
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full" />
      </div>
    );
  }