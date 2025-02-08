import { Button } from "@/components/ui/button"; // Assuming you have a Shadcn UI Button component
import { ArrowRight } from "lucide-react"; // Lucide React icons
import Image from "next/image"; // Next.js Image component
import { getClient } from "@/sanity/lib/client"; // Sanity client
import { groq } from "next-sanity"; // Sanity query utility
import chairimg from "../public/chair.png";
import Products from "./(page)/product/page";
import clogo1 from "../public/Logo (0).png";
import clogo2 from "../public/Logo (1).png";
import clogo3 from "../public/Logo (2).png";
import clogo4 from "../public/Logo (3).png";
import clogo5 from "../public/Logo (4).png";
import clogo6 from "../public/Logo (5).png";
import clogo7 from "../public/Logo (6).png";
import topcategories1 from "../public/Category1.png";
import topcategories2 from "../public/Category2.png";
import topcategories3 from "../public/Category3.png";
import Link from "next/link";
import PopularStyles from "./wrappers/popularstyle";

// Fetch featured products from Sanity
async function getFeaturedProducts() {
  const client = getClient();
  const query = groq`*[_type == "product" && featured == true][0...5]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="flex justify-center overflow-hidden">
        <div className="md:h-[500px] w-[70%] mt-[2px] bg-[#f0f2f3] md:flex overflow-hidden rounded-3xl items-center justify-between px-[5%]">
          {/* Hero Text */}
          <div className="md:text-left text-center">
            <h1 className="sm:text-[14px] text-[80%] text-[#272343]">
              Welcome to charity
            </h1>
            <h1 className="md:text-[38px] font-semibold text-[#272343] md:w-[350px] w-[70%] text-[150%] text-balance text-right md:text-left">
              Best Furniture Collection for your <br /> interior.
            </h1>
            <div className="flex justify-center md:justify-start">
              <Button className="bg-[#029FAE] mt-4">
                Shop Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-end">
            <Image
              src={chairimg} // Replace with your image path
              alt="Furniture"
              width={500}
              height={500}
              className="size-[70%] mt-3"
            />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex flex-wrap object-contain items-center justify-center gap-1 mt-10">
        <Image
          src={clogo1} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo2} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo3} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo4} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo5} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo6} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo7} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
        <Image
          src={clogo1} // Replace with your logo paths
          alt="loading"
          width={100}
          height={100}
          className="h-16 object-contain"
        />
      </div>
      <div>
        <Products title="Trending Items" limit={5} isProductPage={false} />
      </div>
      <div className="justify-center flex mt-20 ">
        <div className="w-[73%]">
          <h1 className="text-3xl font-bold text-[#272343]">Top Categories</h1>
          <br />
          <div className="flex  gap-4 ">
            <Link href="/product">
              {" "}
              <Image src={topcategories1} alt="loading"></Image>
            </Link>
            <Link href="/product">
              <Image src={topcategories2} alt="loading"></Image>
            </Link>
            <Link href="/product">
              {" "}
              <Image src={topcategories3} alt="loading"></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="justify-center flex mt-20"><div className="w-[73%]"><PopularStyles/></div></div>
      <div>
        <Products title="Our Product" limit={10} isProductPage={false} />
      </div>
    </div>
  );
}
