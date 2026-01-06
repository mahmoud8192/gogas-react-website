import extractNameFromSRC from "../utils/extractNameFromSRC";

function ContactCard({ imgSrc, contactDetail }) {
  const style = {
    base:
      "w-full h-full  flex flex-col gap-4 items-center justify-center ring-[2px] ring-[#DFDFDF] rounded-sm",
    img: "invert w-10",
    contactDetail:
      "text-center [font-family:var(--font-third)]  text-[1.1rem] leding-[2rem] text-[#797979]"
  };
  return (
    <div className={style.base}>
      <div className="w-fit h-fit rounded-full bg-[#F1B911] p-4">
        <img
          className={style.img}
          src={imgSrc}
          alt={imgSrc && extractNameFromSRC(imgSrc)}
        />
      </div>

      <p className={style.contactDetail}>
        {contactDetail}
      </p>
    </div>
  );
}

export default ContactCard;
