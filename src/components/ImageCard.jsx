import React from 'react'

const ImageCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-10 box-content">
    <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
      <img className='w-full' src="cosmet.svg" alt="marketingImage" />
      <p className="font-semibold mt-2"> Cosmetic Forcase Marketing</p>
    </div>
    <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
      <img className='w-full' src="sales.svg" alt="Sales" />
      <p className="font-semibold mt-2">Sales Analytic</p>
    </div>
    <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
      <img className='w-full' src="fashion.svg"  alt="Fasion" />
      <p className="font-semibold mt-2">FAssion Store Mobile App </p>
    </div>
    <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
      <img className='w-full' src="laura.svg" alt="Brand" />
      <p className="font-semibold mt-2"> Laura's Clore Branding Identity</p>
    </div>
    <div className="hover:shadow-lg p-5 rounded-md cursor-pointer">
      <img className='w-full' src="seo.svg" alt="SEO" />
      <p className="font-semibold mt-2"> SEO Marketing 4.0</p>
    </div>

    <div className="hover:shadow-lg p-5 rounded-md flex flex-col justify-around ">
      <p className="text-my-yellow font-semibold text-left text-sm ">
        PROJECTS
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Works from US</h1>
      <button className="border border-orange-500 p-3 font-bold rounded-full w-32">
        See More
      </button>
    </div>
  </div>
  )
}

export default ImageCard