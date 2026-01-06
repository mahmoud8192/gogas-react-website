import Hero from "../components/HomePage/Hero";
import AboutSummary from "../components/HomePage/AboutSummary";
import Benfits from "../components/HomePage/Benfits";
import WhatOffer from "../components/HomePage/WhatOffer";
import BrandStatistics from "../components/HomePage/BrandStatistics";
import Products from "../components/HomePage/Products/Products";
import VidoeFrame from "../components/HomePage/VideoFrame/VideoFrame";
import previewImg from "../assets/images/video-frame/preview-car.jpeg";
import { useLocation } from "react-router";
// import EaseAccess from "../components/EaseAccess";

function HomePage() {
  // get requsted resource .
  const path = useLocation();
  console.log(path.pathname);

  return (
    <div className="w-full flex flex-col gap-15">
      <div className="w-full max-w-[2000px] mx-auto flex flex-col gap-15 items-center h-fit ">
        <div className="w-full h-fit">
          <Hero />
        </div>
        <div className="w-[95%] mx-auto">
          <AboutSummary />
        </div>
        <div className="h-fit w-full">
          <Benfits />
        </div>{" "}
        <div className="w-full mb-30">
          <BrandStatistics />
        </div>
        <div className="w-[85%] mx-auto ">
          <WhatOffer />
        </div>
        <div className="w-full h-screen">
          <VidoeFrame
            imgSrc={previewImg}
            videoSrc="https://player.vimeo.com/video/1143942195?badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479"
          />
        </div>
        <div className="grid items-center w-full  h-fit ">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
