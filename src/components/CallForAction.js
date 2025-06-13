"use server";

import SearchHomesImg from "../../public/searchhomes.png";
import ForSaleImg from "../../public/forsale.png";
import ForRentImg from "../../public/forrent.png";
import { Button } from "@nextui-org/react";

export default async function CallForAction() {
  return (
    <div className="h-[600px] w-full flex items-center justify-center text-black bg-slate-100 mt-[100px]">
      <div className="flex items-center justify-between w-[1250px]">
        <div className="flex flex-col w-[390px] h-[460px] border border-gray-300 rounded-xl items-center justify-evenly bg-white drop-shadow-2xl">
          <img src={SearchHomesImg.src} className="h-[160px] w-[160px] "></img>
          <div className="flex flex-col items-center gap-2 w-[90%]">
            <h1 className="font-bold text-2xl">Buy</h1>
            <p className="text-lg text-center">
               Find easy the perfect place for you.
            </p>
          </div>

          <Button variant="ghost" color="primary">
            <span className="p-2 font-semibold text-xl">Check here</span>
          </Button>
        </div>
        <div className="flex flex-col w-[390px] h-[460px] border border-gray-300 rounded-xl items-center justify-evenly bg-white drop-shadow-2xl">
          <img src={ForSaleImg.src} className="h-[160px] w-[160px] "></img>
          <div className="flex flex-col items-center gap-2 w-[90%]">
            <h1 className="font-bold text-2xl">Sell</h1>
            <p className="text-lg text-center">
               Sell your home easy and fast.
            </p>
          </div>

          <Button variant="ghost" color="primary">
            <span className="p-2 font-semibold text-xl">Click Here</span>
          </Button>
        </div>
        <div className="flex flex-col w-[390px] h-[460px] border border-gray-300 rounded-xl items-center justify-evenly bg-white drop-shadow-xl">
          <img src={ForRentImg.src} className="h-[160px] w-[160px] "></img>
          <div className="flex flex-col items-center gap-2 w-[90%]">
            <h1 className="font-bold text-2xl">Rent</h1>
            <p className="text-lg text-center">
              Check all the available rents fast and easy.
            </p>
          </div>

          <Button variant="ghost" color="primary">
            <span className="p-2 font-semibold text-xl">Find</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
