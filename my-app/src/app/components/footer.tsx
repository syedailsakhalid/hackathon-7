import Image from "next/image";
import sociallink from "../../public/Social Links.png";
import mainlogo from "@/public/Logo.png";
import cards from "../../public/cards.png";
// import { RectangleHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Footer() {
  return (
    <div className="">
      <hr />
      <div className="flex justify-center h-[300px] items-center ">
        <div className="w-[60%] md:flex justify-between space-y-4">
          <div className="space-y-[24px]  ">
            <Image src={mainlogo} alt="loading" className="md:w-[50%] w-[30%]"></Image>
            <h1 className="text-[#272343] text-[87.5%]  opacity-[60%] h-[72px] text-pretty lg:flex hidden">
              Vivamus tristique odio sit amet velit semper,
              <br /> eu posuere turpis interdum.
              <br />
              Cras egestas purus{" "}
            </h1>
            <Image src={sociallink} alt="loading" className=" md:w-[] w-[40%]" />
          </div>
          <div className="md:text-[13px] text-[9px] md:space-y-[7px]  text-[#272343]">
            <div>
              <h1 className="opacity-[60%] md:text-[12px] mb-2">CATEGORY</h1>
            </div>
            <h1>Sofa</h1>
            <h1>Armchair</h1>
            <h1>Wing Chair</h1>
            <h1 className=" underline text-[#007580]">Desk Chair</h1>
            <h1>Wooden Chair</h1>
            <h1>Park Bench</h1>
          </div>
          <div className="lg:flex hidden"><div className="text-[13px] space-y-[7px] text-[#272343] ">
            <div>
              <h1 className="opacity-[60%] text-[12px] ">SUPPORT</h1>
            </div>
            <h1>Help & Support</h1>
            <h1>Terms & Condition</h1>
            <h1>Privacy Policy</h1>
            <h1>Help</h1>
          </div></div>
          <div className="opacity-[60%] text-[12px] space-y-[10px]">
            <h1 className="text-[11px]">NEWSLETTER</h1>
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Email" className="w-[200px]" />
              <Button type="submit" className="bg-[#029FAE]">Subscribe</Button>
            </div>
            <h1 className=" md:flex hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Nullam tincidunt erat enim.
            </h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center h-[75px]  py-[24px]">
        <div className="w-[60%] flex justify-between  ">
          <div className="text-[13px] lg:flex gap-1 hidden">
            <h1 className="opacity-[60%]">
              @ 2021 - Blogy - Designed & Develop by
            </h1>
            <h1 className=""> Zakirsoft</h1>
          </div>
          <Image src={cards} alt="loading" className="mix-blend-exclusion" />
        </div>
      </div>
    </div>
  );
}
