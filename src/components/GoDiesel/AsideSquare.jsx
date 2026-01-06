import bgCompanyImg from "../../assets/images/companyImg/company-img_50.jpg";
function AsideSquare() {
  const style = {
    base: " relative  w-full h-full bg-[#8DD245]/90 rounded-tr-[5rem]  ",
    content:
      " flex flex-col  gap-6 p-7 pt-16 text-white capitalize [font-family:var(--font-second)] tracking-normal font-bold",
    bg_img: "bg_img absol",
    title: " text-[1.6rem] leading-10 mb-10",
    contact: "text-[1.6rem] leading-8 ",
    contactInfo: "text-[1.4rem] font-[600]"
  };

  return (
    <div className={style.base}>
      <div
        className="bg_img absolute w-full h-full -z-1 rounded-tr-[5rem] "
        style={{
          backgroundImage: `url(${bgCompanyImg})`
        }}
      />
      <div className={style.content}>
        <h2 className={style.title}>
          Dedicated Customer Teams & Agile Services
        </h2>
        <h3 className={style.contact}>
          Talk to an expert
          <br /> <span className={style.contactInfo}>06 4480 800</span>
        </h3>
        <h3 className={style.contact}>
          Ordering email:
          <br />
          <span className={style.contactInfo}>Call-Center@gogas.jo</span>
        </h3>
      </div>
    </div>
  );
}
export default AsideSquare;
