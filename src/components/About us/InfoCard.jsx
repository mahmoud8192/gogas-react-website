function InfoCard({ title, desc }) {
  const style = {
    base:
      "px-4 py-6 shadow-md rounded-[0.8rem] w-full h-full min-h-fit bg-white text-black [font-family:var(--font-main)] ",
    title: "font-bold leading-15 text-[1.5rem]",
    desc: "text-[1.1rem] leading-[1.8rem]"
  };
  return (
    <div className={style.base}>
      <h3 className={style.title}>
        {title}
      </h3>
      <p className={style.desc}>
        {desc}
      </p>
    </div>
  );
}

export default InfoCard;
