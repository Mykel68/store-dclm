import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import Img from "@/assets/Group.png";
const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Store Requistions</h1>
      <div className="flex flex-col items-center justify-center w-50 gap-2 h-screen">
        <Image src={Img} alt="logo" width={50} height={50} />
        <h1 className="font-semibold text-xl text-center">
          No store requistions{" "}
        </h1>
        <ol className="list-decimal w-[512px] ">
          <p className="text-lg">To recieve store requistions,</p>
          <li className="text-lg">
            Store manager will
            <span className="font-semibold">
              create store products{" "}
            </span> and <span className="font-semibold">add items</span>.
          </li>
          <li className="text-lg">
            Departmental representatives will create a{" "}
            <span className="font-semibold"> new project </span> and{" "}
            <span className="font-semibold"> add products to the project.</span>
          </li>
          <li className="text-lg">
            Productd added to project will be automatically added to store
            requistion.
          </li>
          <li className="text-lg">
            On the store requistion page, store manager has the permissions to
            approve or reject request.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
