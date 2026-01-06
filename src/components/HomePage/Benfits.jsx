import Slider from "../Slider/Slider";

function Benfits() {
  const style = {
    base:
      " flex flex-col w-full md:flex-row  w-full h-full justify-between [font-family:var(--font-main)] font-bold ",
    text_container:
      "flex flex-col justify-center w-full lg:w-[30%] md:w-[40%] bg-[#272727] text-white px-14 py-12",
    title: " text-[16px] leading-[2.1rem]  uppercase  tracking-widest my-2",
    desc: "text-[2.1rem] leading-[2.4rem] tracking-[4%]",
    desc_span: "text-[#8DD245]",
    slider: "  md:w-[60%] w-full overflow-hidden lg:w-[70%] h-full sm:px-5 "
  };
  return (
    <div className={style.base}>
      <div className={style.text_container}>
        <h3 className={style.title}>Benefits</h3>
        <h1 className={style.desc}>
          Get More <br />
          <span className={style.desc_span}>Benefits</span> at Our <br /> Charge
          Station.
        </h1>
      </div>
      <div className={style.slider}>
        <Slider />
      </div>
    </div>
  );
}

export default Benfits;
