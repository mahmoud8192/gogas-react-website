import Hero from "./Hero";
import AboutSummary from "./AboutSummary";
import Benfits from "./Benfits";
import WhatOffer from "./WhatOffer";
import BrandStatistics from "./BrandStatistics";
import Products from "../HomePage/Products/Products";
import VidoeFrame from "./VideoFrame/VideoFrame";
function HomePage() {
  return (
    <div className="w-full max-w-[2000px] mx-auto flex flex-col gap-8 items-center h-fit ">
      <div className="w-full h-fit">
        <Hero />
      </div>
      <div className="lg:pl-30 w-full">
        <AboutSummary />
      </div>
      <div className="h-fit w-full">
        <Benfits />
      </div>{" "}
      <div className="w-full ">
        <BrandStatistics />
      </div>
      <div className="w-[90%] mt-40 ">
        <WhatOffer />
      </div>
      <div className="w-full h-screen">
        <VidoeFrame
          imgSrc={"./assets/images/video-frame/preview-car.jpeg"}
          videoId={"0NA0tkVBQuE"}
        />
      </div>
      <div className="grid items-center w-full  h-fit ">
        <Products />
      </div>
    </div>
  );
}

export default HomePage;
