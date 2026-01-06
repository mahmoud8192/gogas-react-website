import { Link } from "react-router-dom";
import textToValidID from "../utils/textToValidID";

function FooterList({ Links, listTitle }) {
  const style = {
    base: "z-20 flex w-full h-fit  flex-col gap-4 bg-none  ",
    list: "flex flex-col gap-2 w-full",
    title:
      "text-white [font-family:var(--font-main)] font-bold text-[21px] tracking-0 ",
    arrow: "text-[var(--color-7)] text-[0.9rem]",
    link:
      "w-full leading-[1.8rem] text-[0.9rem] text-white text-[1rem] [font-family:var(--font-main)]"
  };

  const text_ID_map = new Map();
  Links.forEach(item => text_ID_map.set(item, textToValidID(item)));

  return (
    <div className={style.base}>
      <h1 className={style.title}>
        {listTitle}
      </h1>
      <ul className={style.list}>
        {Links.map(link =>
          <Link
            className={style.link}
            to={text_ID_map.get(link)}
            key={text_ID_map.get(link)}
          >
            <span className={style.arrow}>{">"}</span> {link}
          </Link>
        )}
      </ul>
    </div>
  );
}

export default FooterList;
