import { NavLink } from "react-router";
import textToValidID from "../utils/textToValidID";

const navigateLinksList = [
  "Home",
  "About us",
  "Go Diesel",
  "Go Fresh",
  "Station Location",
  "Contact us",
  "Careers"
];
function NavList() {
  const style = {
    base: "h-full w-fit flex flex-col items-center gap-7 lg:flex-row ",
    link:
      "py-2 [font-family:var(--font-main)] font-bold text-[16px] leading-4 tracking-normal"
  };
  return (
    <ul className={`${style.base}`}>
      {navigateLinksList.map((link, i) =>
        <NavLink
          key={i}
          className={`${style.link}`}
          to={`/${link === "Home" ? "" : textToValidID(link)}`}
        >
          {link}
        </NavLink>
      )}
    </ul>
  );
}

export default NavList;
