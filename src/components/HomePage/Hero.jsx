import carImg from "../../assets/images/hero/car.png";
import logoTextImg from "../../assets/images/hero/logo-text.png";
import extractNameFromSRC from "../utils/extractNameFromSRC";
import btnArrow from "../Slider/SLIDER/assets/images/carousel-arrow.svg";
import Button from "../Button.jsx";
function Hero() {
  const style = {
    base:
      "h-fit w-full  flex  flex-col gap-6 justify-between items-center [font-family:var(--font-main)]",
    title: " font-bold text-[2rem] text-center",
    button: "w-57 h-13",
    button_span: "mx-6 inline  invert",
    header: "flex flex-col items-center gap-6",
    hero_bg: "w-full bg-[#8DD245] h-[50%] absolute bottom-0 z-0",
    car_img: "z-20",
    logo:
      "w-20 absolute sm:w-40 md:w-50 lg:w-60 lg:-bottom-20     -bottom-8 z-[-1] right-4 right-0 sm:-bottom-15 md:-bottom-17",
    imgs_base: "-z-5 w-full  relative ",
    imgs_container: "w-full h-fit flex justify-center"
  };
  return (
    <div className={style.base}>
      <header className={style.header}>
        <h1 className={style.title}> We Provide Best Services For Your Car</h1>

        <div className={style.button}>
          <Button
            textSize="sm"
            text={"Our Services"}
            backgroundColor="color_11"
            fontFamily="main_b"
          >
            <img
              src={btnArrow}
              alt={extractNameFromSRC(btnArrow)}
              className={style.button_span}
            />
          </Button>
        </div>
      </header>
      <div className={style.imgs_base}>
        <div className={style.imgs_container}>
          <img src={carImg} className={style.car_img} alt="" />
          <div className={style.hero_bg} />
          <img
            src={logoTextImg}
            className={style.logo}
            alt={extractNameFromSRC(logoTextImg)}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
