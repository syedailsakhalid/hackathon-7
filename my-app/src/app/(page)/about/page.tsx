"use client";
import Image from "next/image";
import m1 from "../../../public/chairimg.png";
import m2 from "../../../public/Large.png";
import m3 from "../../../public/Parent.png";
import m4 from "../../../public/Parent (1).png";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-teal-700 text-white p-8 rounded-lg h-[400px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold">About Us - Comforty</h2>
          <p className="mt-4 text-lg">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="mt-6 bg-white text-teal-700 px-3 py-2 rounded-lg font-semibold w-36 hover:bg-gray-100">
            View Collection
          </button>
        </div>
        <div className="h-[400px] flex justify-center items-center">
          <Image
            src={m1}
            alt="Comforty Chair"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Next day as standard</h3>
            <p className="mt-2 text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Made by true artisans</h3>
            <p className="mt-2 text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Unbeatable prices</h3>
            <p className="mt-2 text-gray-600">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Recycled packaging</h3>
            <p className="mt-2 text-gray-600">
              We use 100% recycled materials to ensure our footprint is
              manageable.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Our Popular Products</h2>
        <div>
          {" "}
          <div className="gap-2 overflow-hidden flex  items-center  px-2 py-2">
            <div className="bg-white shadow-md rounded-lg p-4 ">
              <div className="h-[300px]  justify-center items-center">
                <Image
                  src={m2}
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                <p className="text-teal-700 font-bold">$99.00</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="h-[300px]  justify-center items-center">
                <Image
                  src={m3}
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                <p className="text-teal-700 font-bold">$99.00</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="h-[300px]  justify-center items-center">
                <Image
                  src={m4}
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                <p className="text-teal-700 font-bold">$99.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[m2, m3, m4].map((image, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center">
              <div className="h-[300px] flex justify-center items-center">
                <Image 
                  src={image} 
                  alt="Product Image" 
                  width={400} 
                  height={300} 
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold">The Dandy Chair</h3>
                <p className="text-teal-700 font-bold">$99.00</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
