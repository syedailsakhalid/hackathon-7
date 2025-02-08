import Image from "next/image";
import product1 from "@/public/pi1.png";
import product2 from "@/public/pi2.png";
import product3 from "@/public/pi3.png";

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 50,
    image: product1,
    description: "A comfortable library stool chair for your study space."
  },
  {
    id: 2,
    name: "Sofa",
    price: 75,
    image: product2,
    description: "A cozy sofa for your living room with modern design."
  },
  {
    id: 3,
    name: "Plastic Chair",
    price: 100,
    image: product3,
    description: "A durable plastic chair for all kinds of uses."
  }
];

export default function Shop() {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="min-h-screen w-[74%] p-4 sm:p-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#029FAE] mb-4">
            Welcome to Our Shop
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our collection of quality furniture. From comfortable chairs
            to stylish sofas, we have everything to suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <button className="bg-[#029FAE] text-white py-2 px-4 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
