function ContactBadge() {
  const style = {
    base:
      "w-full min-h-45 max-h-fit flex justify-around items-center flex-wrap  gap-6  [font-family:var(--font-main)] font-bold leading-10 tracking-normal  text-[1.5rem] text-white bg-[var(--color-9)]",

    span: "text-[1rem]"
  };
  return (
    <div className={style.base}>
      <h3>Find Our Near Branches</h3>
      <h3>
        Call Us On <br /> <span className={style.span}>+ 962 7 1234 567</span>
      </h3>
      <h3>24/7 Emergency Services</h3>
    </div>
  );
}
export default ContactBadge;
