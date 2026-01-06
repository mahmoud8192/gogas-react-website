import CroppedLogo from "../../assets/images/navbar/cropped-logo.svg";
import headerGreen from "../../assets/images/header/header-green.svg";
import headerBlack from "../../assets/images/header/header-black.svg";
import extractNameFromSRC from "../utils/extractNameFromSRC";

const Header = () => {
  const style = {
    base: "flex h-10 ",
    img: "relative h-15  left-19 sm:left-25",
    img_container:
      "bg-[var(--color-11)] w-[85%] relative inset-0 bg_img flex justify-end",
    email:
      "bg-black z-0  basis-[15%] bg_img leading-[2rem] text-[0.8rem] [font-family:var(--font-main)] font-bold text-white text-center sm:-z-1"
  };
  return (
    <div className={style.base}>
      <div
        className={style.img_container}
        style={{
          backgroundImage: `url(${headerGreen})`
        }}
      >
        <img
          className={style.img}
          src={CroppedLogo}
          alt={extractNameFromSRC(CroppedLogo)}
        />
      </div>
      <div
        className={style.email}
        style={{
          backgroundImage: `url(${headerBlack})`
        }}
      >
        www.gogas.jo
      </div>
    </div>
  );
};

export default Header;
