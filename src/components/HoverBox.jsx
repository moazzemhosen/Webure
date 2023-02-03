import React from 'react'
import "./style/Hover.css"

const HoverBox = () => {
    let img = [
        {
          logo: "design.svg",
          title: "Design",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "front.svg",
          title: "Front End Development",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "backendDev.svg",
          title: "Back End Development",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "applicationDev.svg",
          title: "Application Development",
          details:
            "Lorem ipsum dolor sit adip isicing elit.incidunt repudiandae est! Deserunt totam recusa  rep udiandae est!",
        },
        {
          logo: "backendDev.svg",
          title: "Cloud Services",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "analytics.svg",
          title: "Analytics",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "qa.svg",
          title: "Q-A And Testing",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
          logo: "backOffice.svg",
          title: "Back Office Support",
          details:
            "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
      ];
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
    {img.map((e, i) => {
      return (
        <div className="hover:bg-violet-900  text-center shadow-xl rounded-lg ">
          <div className="hover:invert p-10 hover:text-white flex flex-col justify-center items-center gap-4  mystyle h-80 max-w-xs" >
            <img
              src={e.logo}
              alt=""
              className={
                i == 0
                  ? " invert  m-auto  hover:hue-rotate-[180deg] hover:saturate-100 "
                  : "  m-auto  hover:hue-rotate-[180deg] hover:saturate-100 "
              }
            />

            <h1 className="text-2xl font-bold invert text-white  ">
              {e.title}
            </h1>
            <p className="invert  text-white text-justify">{e.details}</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default HoverBox