import React from "react";
import FooterList from "./FooterList";
import NewsLetter from "./NewsLetter";
import footerLogo from "../../assests/images/navbar/header-logo.svg";
import FooterBrand from "./FooterBrand";
import Copyrights from "./Copyrights";
const Footer = () => {
  const style = {
    footer:
      "w-full pt-4 min-h-fit md:h-[55vh] min-h-fit gap-8  bg_img flex flex-col justify-between",
    footer_base:
      "w-full px-4 h-[90%] items-center  flex flex-col  justify-around gap-7 ",
    footer_base_md: "md:flex-row",
    footer_copyright: "w-full relative z-1000",
    footer_mask: "mask absolute bg-[#181818] opacity-92 inset-0 w-full h-full"
  };
  return (
    <div
      style={{ backgroundImage: `url(${footerLogo})` }}
      className={style.footer}
    >
      {" "}<div className={style.footer_mask} />
      <div className={`${style.footer_base} ${style.footer_base_md}`}>
        <div className="z-10 min-w-full md:min-w-50 max-w-50">
          <FooterBrand />
        </div>
        <div className="z-10  md:min-w-50">
          <FooterList
            Links={[
              "AC Charger Services",
              "DC Charger Services",
              "EV drivers Services",
              "Charge Point Services",
              "Home charging",
              "Building Services"
            ]}
          />
        </div>
        <div className="z-10  md:min-w-50">
          <FooterList
            listTitle="Useful Link"
            Links={[
              "Home charging",
              "Building technology",
              "Charge Point",
              "EV drivers",
              "AC Charger",
              "24 Hour Suupport"
            ]}
          />
        </div>
        <div className="z-10  w-full sm:w-70">
          <NewsLetter />
        </div>
      </div>
      <div className={style.footer_copyright}>
        <Copyrights />
      </div>
    </div>
  );
};

export default Footer;
