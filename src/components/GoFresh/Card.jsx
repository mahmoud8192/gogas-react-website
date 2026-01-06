import extractNameFromSRC from "../utils/extractNameFromSRC";

function Card({ src, alt, next, prev, id }) {
  const style = {
    btn_container:
      "h-fit absolute left-5 right-5 top-full  flex gap-3 -translate-y-1/2 transform justify-end",
    card: "carousel-item  w-full h-full",
    card_img: "w-full h-full",
    card_nav_btn:
      "btn bg-white opacity-90 w-[3rem] h-[3rem] shadow-md btn-circle hover:bg-[var(--color-10)] hover:text-white"
  };

  return (
    <div id={`slide${id}`} className={style.card}>
      <img
        src={src}
        className={style.card_img}
        alt={extractNameFromSRC(src) || alt}
      />
      <div className={style.btn_container}>
        <a href={`#slide${prev}`} className={style.card_nav_btn}>
          ❮
        </a>
        <a href={`#slide${next}`} className={style.card_nav_btn}>
          ❯
        </a>
      </div>
    </div>
  );
}

export default Card;
