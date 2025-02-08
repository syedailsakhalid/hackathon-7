import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface ProductsPageProps {
  title?: string; // Optional heading (only for product page)
  limit?: number; // Limit number of products
  isProductPage?: boolean; // Determines if it's a product page
}

// Fetch products from Sanity
async function getProducts() {
  const query = `*[_type == "products"]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch<Product[]>(query);
}

// Server Component: Displays products with optional extra sections
export default async function Products({ title, limit, isProductPage = true }: ProductsPageProps) {
  const products = await getProducts();
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className=" py-8 flex flex-col items-center ">
      <div className="container mx-auto px-4 w-[75%]">
      <h1 className="text-3xl font-bold text-[#272343] mb-8">{title ?? "All Products"}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-[95%] text-[#272343]">{product.title}</h2>
                <p className="text-[95%] text-gray-600">${product.price}</p>
                <Link href={`/product/${product._id}`}>
                  <span className="mt-2 inline-block text-[80%] text-blue-500 hover:underline">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Only Show Extra Sections If This Is a Product Page */}
      {isProductPage && (
        < >
          {/* Newsletter Section */}
          <div className="w-full bg-gray-100 py-12 flex flex-col items-center mt-5">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Or Subscribe To The Newsletter
              </h2>
              <div className="max-w-md flex justify-center">
                <input
                  type="email"
                  placeholder="Email Address..."
                  className="w-full bg-transparent focus:outline-none text-md placeholder-gray-500 border-b-2 border-gray-700"
                />
                <button className="text-sm tracking-wide ml-4 hover:text-gray-700 transition border-b-2 border-gray-700">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="w-full py-12 flex flex-col items-center bg-gray-100 ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Follow Products And Discounts On Instagram
            </h2>
            <div className="flex justify-center gap-4 max-w-5xl">
              {displayedProducts.slice(6, 12).map((product) => (
                <div key={product._id} className="w-32 h-32">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={128}
                    height={128}
                    className="rounded-md object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
