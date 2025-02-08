import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import Products from "../page";
import AddToCartButton from "./addtocartbutton"; // ✅ Client component for interactivity

// Define Product Type
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

async function getProductData(id: string): Promise<Product | null> {
  const data = await client.fetch<Product[]>(
    `*[_type == "products" && _id == $id]{
      _id,
      title,
      description,
      price,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return data.length > 0 ? data[0] : null;
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id);

  if (!product) {
    return <h1 className="text-center mt-10">Product Not Found</h1>;
  }

  return (
    <div>
      {/* Product Details Section */}
      <div className="flex justify-center px-4 sm:px-8 md:px-16 py-8 bg-slate-50">
        <div className="w-full sm:w-3/4 lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src={product.imageUrl || "/default-image.jpg"}
                alt={product.title}
                width={400}
                height={400}
                className="mx-auto rounded-xl"
              />
            </div>
            {/* Product Details */}
            <div className="md:w-1/2 md:ml-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{product.title}</h1>
              <p className="mt-4 mb-6 text-sm bg-[#029FAE] text-white text-center w-[29%] rounded-3xl">
                ${product.price} USD
              </p>
              <hr className="my-4" />
              <p className="text-gray-700 text-base mb-6">{product.description}</p>
              {/* Add to Cart Button (Client Component) */}
              <AddToCartButton productId={product._id} />
            </div>
          </div>
        </div>
      </div>
<div className="">{/* Related Products Section */}
<Products limit={5} isProductPage={false} title="Related products" /></div>
      
    </div>
  );
}
