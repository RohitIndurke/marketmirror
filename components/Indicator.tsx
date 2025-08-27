"use client";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

const Indicator = () => {
  let value;
  
  const [data, setData] = useState([]);
  const [totalHolding, setTotalHolding] = useState(0);

  useEffect(()=>{
    const get = async() =>{
        const req = await fetch("/api/sector");
        const data = await req.json();
        console.log(totalHolding); 
        setData(data);
        setTotalHolding(data.length);
    }
    get();
  },[])

  if (totalHolding == 0) {
    value = [2];
  } else if (totalHolding >= 1 && totalHolding <= 2) {
    value = [0];
  } else if (totalHolding >= 3 && totalHolding <= 4) {
    value = [1];
  } else if (totalHolding >= 5 && totalHolding <= 6) {
    value = [2];
  } else if (totalHolding >= 7 && totalHolding <= 8) {
    value = [3];
  } else if (totalHolding >= 9 && totalHolding < 15) {
    value = [4];
  } else {
    value = [2];
  }


  return (
    <div className="items-center justify-center flex flex-col">
      <h3 className="text-lg ">Risk Indicator</h3>
      <div className="w-full m-3">
        <Slider value={value} max={4} step={1} />
      </div>
      <div className="w-full flex m-3">
        <div className="flex text-red-700">High</div>
        <div className="flex-1 text-red-400">Slightly High</div>
        <div className="flex-1 text-yellow-100">Medium</div>
        <div className="flex-1 text-green-400">Slightly Low</div>
        <div className="flex text-green-700">Low</div>
      </div>
    </div>
  );
};
export default Indicator;
