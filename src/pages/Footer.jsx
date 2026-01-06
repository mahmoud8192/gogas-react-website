import FooterList from "../components/Footer/FooterList";
import NewsLetter from "../components/Footer/NewsLetter";
import footerLogo from "../assets/images/navbar/header-logo.svg";
import FooterBrand from "../components/Footer/FooterBrand";
import Copyrights from "../components/Footer/Copyrights";
import ContactBadge from "../components/Footer/ContactBadge";
function Footer() {
  const style = {
    footer:
      "w-full h-fit relative inset-0 pt-4  gap-8  bg_img  flex flex-col justify-between",
    footer_base:
      "w-full px-4 h-[90%] items-center h-full  flex flex-col  justify-around gap-7 flex-wrap md:flex-row ",
    footer_copyright: "w-full relative z-1000",
    footer_mask: "_mask absolute bg-[#181818] opacity-92 inset-0 w-full h-full",
    footer_brand: "z-10 min-w-full md:min-w-50 max-w-50",
    footer_list: "z-10  md:min-w-50",
    newsletter: "z-10  w-full sm:w-70"
  };
  const links1 = [
    "AC Charger Services",
    "DC Charger Services",
    "EV drivers Services",
    "Charge Point Services",
    "Home charging",
    "Building Services"
  ];
  const links2 = [
    "Home charging",
    "Building technology",
    "Charge Point",
    "EV drivers",
    "AC Charger",
    "24 Hour Suupport"
  ];
  return (
    <div>
      <ContactBadge />
      <div
        style={{ backgroundImage: `url(${footerLogo})` }}
        className={style.footer}
      >
        <div className={style.footer_mask} />
        <div className={`${style.footer_base} `}>
          <div className={style.footer_brand}>
            <FooterBrand />
          </div>
          <div className={style.footer_list}>
            <FooterList listTitle={"Our Services"} Links={links1} />
          </div>
          <div className={style.footer_list}>
            <FooterList listTitle="Useful Link" Links={links2} />
          </div>
          <div className={style.newsletter}>
            <NewsLetter />
          </div>
        </div>
        <div className={style.footer_copyright}>
          <Copyrights />
        </div>
      </div>
    </div>
  );
}

export default Footer;
