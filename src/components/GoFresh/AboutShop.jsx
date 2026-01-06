function AboutShop() {
  const style = {
    base:
      "[font-family:var(--font-main)] font-bold leading-[1.7rem] tracking-normal flex flex-col gap-10",
    convenient_container: "flex flex-col gap-8 px-3",
    convenient_title: "text-[1.5rem]",
    convenient_desc: "text-[1.3rem] font-normal",
    about_shop_title_card: "text-[1.5rem] text-white bg-[#F1B911] w-fit p-3",
    about_shop_desc: "px-3 text-[1.3rem] font-normal",
    about_shop_card_container: "flex flex-col gap-8",
    tagline: "px-3 text-[1.5rem] text-[var(--color-11)]"
  };
  return (
    <div className={style.base}>
      <div className={style.convenient_container}>
        <h1 className={style.convenient_title}>The convenient Go Fresh shop</h1>
        <p className={style.convenient_desc}>
          On the Go gas Fresh stores are the quick and easy solution for all
          your beverage and snack needs.  So it’s even easier to fill-up with
          coffee on the way to work, or a quick meal when you’re on-the-go.
        </p>
      </div>
      <div className={style.about_shop_card_container}>
        <h2 className={style.about_shop_title_card}>BRAND POSITIONING</h2>
        <p className={style.about_shop_desc}>
          GO Fresh is a convenience store concept that offers food, beverages
          and other handy items for time-starved drivers and passersby. GO Fresh
          stores are conveniently located to be on-hand when most needed.
          <br />
          <br />
          Food items are always fresh and other products are carefully selected
          to cover everything drivers might need for a better and safer journey.
        </p>
        <h3 className={style.tagline}>
          GO Fresh tagline is:
          <br />
          “LET’S GO”
        </h3>
      </div>
      <div className={style.about_shop_card_container}>
        <h2 className={style.about_shop_title_card}>What does that mean?</h2>
        <p className={style.about_shop_desc}>
          It’s an invitation to customers to start their journey by visiting GO
          Fresh, where they can find everything they might need for an enjoyable
          and safe journey, GO Fresh offers essential support and supplies for
          both driver and vehicle – in other words, ‘you can’t go anywhere
          without a GO
        </p>
      </div>
    </div>
  );
}

export default AboutShop;
