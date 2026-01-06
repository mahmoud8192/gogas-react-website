import bgImg from "../../assets/images/statistics/bg-img.svg";
function BrandStatistics() {
  const style = {
    base:
      " flex  w-full  items-end h-[37vh]  min-h-fit  [font-family:var(--font-main)] text-white  relative inset-0 ",
    statis_bg: "w-full bg_img  absolute inset-0 z-0",
    alternate_bg:
      "visible   xl:hidden absolute inset-0 z-100 bg-[#72B84B] w-full h-full",
    statist_container:
      "w-full  xl:w-[70%] h-full xl:h-[40%] flex lg:flex-nowrap flex-wrap justify-around items-center xl:items-end lg:py-15 z-10  relative"
  };
  return (
    <div className={style.base}>
      <div
        className={style.statis_bg}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className={style.alternate_bg} />
      </div>
      <div className={style.statist_container}>
        <StatisticCard number={250} text={"employees"} />
        <StatisticCard number={330} text={"Branches"} />
        <StatisticCard number={170} text={"stations"} />
      </div>
    </div>
  );
}
function StatisticCard({ number, text }) {
  return (
    <div className="flex flex-col gap-2 capitalize leading-[1.9rem] tracking-wide ">
      <p className="text-[2.2rem] ">
        {number}+
      </p>
      <h3 className="font-bold text-[1.6rem]">
        {text}
      </h3>
    </div>
  );
}
export default BrandStatistics;
