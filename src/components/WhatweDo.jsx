import React from "react";
import "./style/Hover.css"

const WhatweDo = () => {
  return (
    <div className="mt-3">
      <div className="">
        <p className=" w-1/2 h-28 m-auto font-semibold text-7xl">What We Do</p>
      </div>
      <div className="flex justify-center ">
        <p className=" font-semibold text-4xl w-44 h-28">Our Services</p>
        <p className=" w-5/6 h-50 font-medium text-2xl text_left text-slate-400">
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature
        </p>
      </div>
    </div>
  );
};

export default WhatweDo;
