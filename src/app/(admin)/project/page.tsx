import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import Img from "@/assets/Group.png";
const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="flex flex-col items-center justify-center w-50 gap-2 h-screen">
        <Image src={Img} alt="logo" width={50} height={50} />
        <h1 className="font-semibold text-xl text-center">
          No Projects Found{" "}
        </h1>
        <p className="text-center text-muted-foreground text-sm">
          Click “add new product” button to get started in <br /> adding your
          first product to your store
        </p>

        <Button className="bg-[#F56630]">
          <FaPlus className=" mr-2 h-4 w-4" />
          New project
        </Button>
      </div>
    </div>
  );
};

export default page;
