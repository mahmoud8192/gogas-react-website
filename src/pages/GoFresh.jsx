import Slider from "../components/GoFresh/Slider";
import AboutShop from "../components/GoFresh/AboutShop";
import CompanyImg from "../components/CompanyImg";
import EaseAccess from "../components/EaseAccess";
import { useLocation } from "react-router";
function GoFresh() {
  const style = {
    base: "flex flex-col gap-20",
    navbar: "w-full  bg-white relative z-5",
    main: "w-[80%] mx-auto ",
    slider: "mb-14 px-3 mx-auto relative lg:h-[616px] h-[400px]"
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

      <div />
      <div className={style.main}>
        <div className={style.slider}>
          <Slider />
        </div>
        <div>
          <AboutShop />
        </div>
      </div>
    </div>
  );
}

export default GoFresh;
