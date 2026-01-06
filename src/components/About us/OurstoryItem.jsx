import { useEffect, useRef } from "react";

function OurstoryItem({
  title,
  desc,
  LinkTitleColor = "red",
  List = [],
  active,
  onMount,
  index,
  id
}) {
  const COLORS = {
    red: "text-[#ff5056]",
    green: "text-[var(--color-9)]",
    black: "text-black",
    white: "text-white"
  };
  const style = {
    base:
      "flex flex-col gap-2 w-full h-fit [font-family:var(--font-main)] leading-7 tracking-wide",
    title: "transition-all duration-700 text-[1.2rem] font-bold",
    desc: "text-[1.1rem] text-[#777777]",
    link_title: `${COLORS[LinkTitleColor]}`,
    link_desc: "",
    link_desc_span: "text-black",
    active_title: " text-[#8DD245]",
    active_desc: "text-black"
  };
  const containerEl = useRef(null);
  useEffect(
    () => {
      onMount(containerEl.current.offsetTop, id);
    },
    [onMount, id]
  );
  return (
    <div className={style.base} ref={containerEl}>
      <h3
        className={`${style.title}  ${(active || index) && style.active_title}`}
      >
        {title}
      </h3>
      <p className={`${style.desc} ${active && style.active_desc}`}>
        {desc}
      </p>
      <ul className={style.ul}>
        {List.map(link =>
          <div key={link.id}>
            <li className={`${style.title} ${style.link_title}`}>
              {link.title}
            </li>
            <p className={`${style.desc} ${style.link_desc}`}>
              {link.desc}
              <span className={style.link_desc_span}>
                {link.desc_span}
              </span>
            </p>
          </div>
        )}
      </ul>
    </div>
  );
}
export default OurstoryItem;
