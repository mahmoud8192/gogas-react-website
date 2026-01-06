import extractNameFromSRC from "../utils/extractNameFromSRC";
import whatOfferBG from "../../assets/images/whatOffer/what-offer-bg.png";
import Button from "../Button";

function WhatOffer() {
  const whatOfferData = [
    {
      imgSrc: "/images/whatOffer/img2.png",
      title: "Diesel"
    },
    { imgSrc: "/images/whatOffer/img1.png", title: "Diesel" }
  ];
  const style = {
    base:
      "w-full h-fit grid gap-12 grid-cols-[100%]  md:h-[400px] md:grid-cols-[25%_25%_1fr] md:grid-rows-[20px_minmax(auto,400px)] grid-rows-[20px_fit-content_fit-content_fit-content] [font-family:var(--font-main)] font-bold",
    title:
      "h-fit self-end md:col-span-2 text-[2rem]   leading-[2.3rem] tracking-wide",
    offer_aside:
      " text-white relative z-10 py-4 md:row-span-2 row-span-1 flex flex-col justify-center gap-5  px-10 bg_img col-span-1",
    mask: "mask absolute inset-0 bg-black  opacity-70  w-full h-full",
    aside_title:
      "lg:text-[37px] text-[1.5rem] leading-[55px] tracking-normal z-10 ",
    aside_btn: "bg-[#72b84b] w-35 h-15 z-10",
    offer_card_container:
      " flex flex-col justify-around ring-3 ring-[var(--color-7)] items-center pt-15 ",
    offer_card_img: "w-fit",
    offer_card_desc: "text-center text-[1rem] leading-[2.2rem] tracking-normal"
  };

  return (
    <div className={style.base}>
      <h2 className={style.title}>What we offer</h2>

      <div
        style={{
          backgroundImage: `url(${whatOfferBG})`
        }}
        className={style.offer_aside}
      >
        <div className={style.mask} />
        <h1 className={style.aside_title}>
          You Can Order <br /> Diesel Online now
        </h1>

        <div className={style.aside_btn}>
          <Button
            text={"Order Now"}
            backgroundColor="color_9"
            fontFamily="main"
            textSize="md"
          />
        </div>
      </div>

      {whatOfferData.map((item, i) => {
        return (
          <div key={i} className={style.offer_card_container}>
            <img
              className={style.offer_card_img}
              src={item.imgSrc}
              alt={extractNameFromSRC(item.imgSrc)}
            />
            <p className={style.offer_card_desc}>
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default WhatOffer;
