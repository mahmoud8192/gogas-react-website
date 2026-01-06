import { useLocation } from "react-router";
import CompanyImg from "../components/CompanyImg";
import EaseAccess from "../components/EaseAccess";
import AsideSquare from "../components/GoDiesel/AsideSquare";
import DieselCalculation from "../components/GoDiesel/DieselCalculation";

export default function GoDiesel() {
  const style = {
    base: "flex flex-col gap-15 ",
    main: "flex flex-col gap-15",
    brand_positioning: "px-15 flex flex-col gap-10",
    header:
      "flex flex-col gap-10  [font-family:var(--font-main)]  leading-[1.8rem] tracking-wide",
    header_title:
      "text-[1.8rem] font-bold text-white bg-[var(--color-11)] p-4 w-fit",
    header_desc: " text-[1rem]",
    header_bottom: "font-bold text-[1.5rem] ",
    header_desc_span: "font-bold text-[1.5rem] ",
    priceInput:
      "rounded-md px-5 text-[#c3c3c3] text-start bg-none ring ring-[#c3c3c3]",
    calculation_container: "flex flex-col w-full md:flex-row gap-10",
    aside_square: "w-full h-fit max-h-[50vh] md:w-[40%] md:max-w-[400px] ",
    calculation: " w-full md:w-[30%] md:min-w-[400px]"
  };
  const path = useLocation();
  return (
    <div className={style.base}>
      <div>
        <CompanyImg />
        <div className="w-[80%] my-8 mx-auto">
          <EaseAccess text={path.pathname} to={path.pathname} />
        </div>
      </div>

      <div className={style.main}>
        <div className={style.brand_positioning}>
          <div className={style.header}>
            <h1 className={style.header_title}>BRAND POSITIONING</h1>
            <p className={style.header_desc}>
              <span className={style.header_desc_span}> GO Diesel </span> is a
              fuel delivery service that offers effcient and reliable services
              for home and industrial use. GO Diesel customers enjoy excellent
              customer service, timely deliveries, high quality fuel and
              flexible payment options which all help customers have more
              control over their purchase
            </p>
            <h3 className={style.header_bottom}>
              GO Diesel tagline is: “HONESTLY BETTER”
            </h3>
          </div>
          <div className={style.calculation_container}>
            <div className={style.aside_square}>
              <AsideSquare />
            </div>
            <div className={style.calculation}>
              <DieselCalculation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
