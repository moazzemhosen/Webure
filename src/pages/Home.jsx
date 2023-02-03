import React from "react";
import Navbar from "../components/Navbar";
import PartnerShip from "../components/PartnerShip";
import Services from "../components/Services";
import ChooseUs from "../components/ChooseUs";
import Ourservice from "../components/Ourservice";
import HoverBox from "../components/HoverBox";
import ImageCard from "../components/ImageCard";
import Card from "../components/Card";
import WhatweDo from "../components/WhatweDo";

const Home = () => {
  return (
    <div className="">
      
      <Navbar/>
      <PartnerShip/>
      <ChooseUs/>
      <Services/>
      <Ourservice/>
      <Card/>
      <WhatweDo/>
      <HoverBox/>
      <ImageCard/>

    </div>
  );
};

export default Home;
