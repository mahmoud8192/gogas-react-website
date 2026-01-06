import Logo from "../NavBar/Logo";
import { MdOutlineMail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import logoImg from "../../assets/images/footer/footer-logo.svg";

function FooterBrand() {
  const style = {
    base:
      "w-full flex flex-col gap-7 z-100 text-white text-[1rem] leading-[1.5rem] tracking-[2%]   [font-family:var(--font-main)] ",
    contact: "leading-[2.1rem] tracking-normal",
    logo: "w-50",
    bramd_icon: "mx-2 inline"
  };
  return (
    <div className={style.base}>
      <div className={style.logo}>
        <Logo src={logoImg} />
      </div>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h3>
      <div className={style.contact}>
        <p>
          <span>
            <GiRotaryPhone className={style.bramd_icon} />
          </span>+ 962 7 1234 567
        </p>
        <p>
          <span>
            <MdOutlineMail className={style.bramd_icon} />
          </span>info@gogas.com
        </p>
      </div>
    </div>
  );
}

export default FooterBrand;
