import React from "react";

const Card = () => {
  return (
    <div className="w-7/12 m-auto">
      <div className="flex p-15 gap-7 text-white">
        <div className="bg-my-blue w-52 p-7 rounded-2xl  flex flex-col gap-5">
          <h1 className="text-4xl font-bold ">96%</h1>
          <div>
            <p className="font-semibold ">Client retetion</p>
            <p className="text-sm">By Dalibor and Marino in Hong Kong</p>
          </div>
        </div>
        <div className="bg-my-red w-52 p-7 rounded-2xl flex flex-col gap-5">
          <h1 className="text-4xl font-bold ">10+</h1>
          <div>
            <p className="font-semibold ">Year of service</p>
            <p className="text-sm">By Dalibor and Marino in Hong Kong</p>
          </div>
        </div>
        <div className="bg-my-yellow w-52 p-7 rounded-2xl flex flex-col gap-5">
          <h1 className="text-4xl font-bold ">70+</h1>
          <div>
            <p className="font-semibold ">Professionals</p>
            <p className="text-sm">By Dalibor and Marino in Hong Kong</p>
          </div>
        </div>
        <div className="bg-my-gray w-52 p-7 rounded-2xl flex flex-col gap-5">
          <h1 className="text-4xl font-bold ">$40M</h1>
          <div>
            <p className="font-semibold ">In funding</p>
            <p className="text-sm">By Dalibor and Marino in Hong Kong</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
