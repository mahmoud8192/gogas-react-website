import Button from "../components/Button";
import CompanyImg from "../components/CompanyImg";
import { Link, useLocation } from "react-router-dom";
import EaseAccess from "../components/EaseAccess";

function Careers() {
  const style = {
    main:
      "w-full flex items-center justify-center h-full [font-family:var(--font-second)]",
    careers_container:
      " font-semibold p-20 text-[1.5rem]  capitalize flex flex-col items-center gap-5  bg-[#f5f5f5] h-fit w-fit ",
    careers_title: "leading-14  text-center tracking-normal",
    link: "text-[var(--color-11)] font-meduim leading-[65px]",
    desc: "text-[1.1rem]  font-light text-center leading-7 text-[#7D7D7D]",
    btn:
      "sm:w-[80%]  w-full h-fit   sm:leading-[65px] sm:text-[1.4rem] text-[1rem]   "
  };
  const path = useLocation();
  return (
    <div>
      <div>
        <CompanyImg />
        <div className="w-[80%] my-8 mx-auto">
          <EaseAccess text={path.pathname} to={path.pathname} />
        </div>
      </div>

      <div className={style.main}>
        <div className={style.careers_container}>
          <h1 className={style.careers_title}>
            We Are Al Watanieh. You Can Be, Too.
          </h1>
          <Link to={"/"} className={style.link}>
            Join Us Now
          </Link>
          <p className={style.desc}>
            Become a world changer with us. Search open opportunities <br /> to
            put your skills and career goals to work for you and Al Watanieh.
          </p>
          <div className={style.btn}>
            <Button
              textSize="lg"
              fontFamily="second"
              backgroundColor="color_11"
              radius="xlg"
            >
              Join Us Careers Portal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
