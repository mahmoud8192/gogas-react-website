import extractNameFromSRC from "../utils/extractNameFromSRC";
import InfoCard from "./InfoCard";
import img1 from "../../assets/images/about-us/car_gas.png";
import arrow from "../../assets/images/about-us/arrow.png";
function InfoContainer() {
  const style = {
    base:
      "w-full h-fit grid lg:grid-cols-[45%_55%]  grid-cols-1 lg:grid-rows-2 lg:gap-y-16 gap-y-4  items-center",
    img1: "w-full h-full",
    img2:
      "w-full h-full lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 relative lg:right-22 lg:-z-1",
    infoCardContainer1:
      "w-full h-full lg:h-[80%] relative lg:right-20 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 ",
    infoCardContainer2: "w-full h-full lg:h-[80%]",
    bg_arrow_container:
      " hidden lg:block col-start-2 col-end-3 row-start-1 row-end-3 w-[120%] h-full relative top-20 right-30",
    bg_arrow_img: "w-full h-full"
  };
  return (
    <div className={style.base}>
      <img className={style.img1} src={img1} alt={extractNameFromSRC(img1)} />
      <div className={style.infoCardContainer1}>
        <InfoCard
          desc={
            "To enable our customers to keep going, get their personal and car needs in fast, friendly, and sustainable manners."
          }
          title={"Our Mission"}
        />
      </div>
      <div className={style.infoCardContainer2}>
        <InfoCard
          desc={
            "To enable our customers to keep going, get their personal and car needs in fast, friendly, and sustainable manners."
          }
          title={"Our Mission"}
        />
      </div>
      <img className={style.img2} src={img1} alt={extractNameFromSRC(img1)} />
      <div className={style.bg_arrow_container}>
        <img className={style.bg_arrow_img} src={arrow} alt={arrow} />
      </div>
    </div>
  );
}

export default InfoContainer;
