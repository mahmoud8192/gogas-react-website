import carTextureImage from "../../assets/images/hero/car-texture.png";
import Button from "../Button";
import extractNameFromSRC from "../utils/extractNameFromSRC";
export default function AboutSummary() {
  const style = {
    base:
      "w-full py-6 flex flex-col md:flex-row  [font-family:var(--font-main)]",
    header: "text-start w-full   font-bold text-[2rem] ",
    title: "  font-bold text-[1rem] leading-[2rem] text-[var(--color-6)] ",
    img: "md:w-[50%]  sm:order-0 order-1  w-full ",
    textContainer: " md:w-[50%] sm:order-0 order-2 w-full  ",
    btn: " w-fit h-fit bg-black py-1",
    desc:
      "min-w-[200px] max-w-[500px] leading-[1.8rem] text-[16px] [letter-spacing:2%] my-[2rem]"
  };
  return (
    <div className={style.base}>
      <div className={style.textContainer}>
        <h3 className={style.title}>About us</h3>
        <h1 className={style.header}>
          We care about your <br /> comfort & safety
        </h1>
        <p className={style.desc}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old Richard McClintock, a Latin professor
          Hampden-Sydney College in Virginia.
        </p>
        <div className={style.btn}>
          <Button text={"Our Mission"} fontFamily="main_m" />
        </div>
      </div>
      <img
        className={style.img}
        src={carTextureImage}
        alt={extractNameFromSRC(carTextureImage)}
      />
    </div>
  );
}
