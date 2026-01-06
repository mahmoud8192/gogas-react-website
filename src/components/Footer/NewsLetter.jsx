import { useState } from "react";
import Button from "../Button";
import emialLogo from "../../assets/images/navbar/email.svg";
function NewsLetter() {
  const style = {
    base: `z-20  py-10 px-7 w-full  min-h-fit  mask bg_img bg-auto flex flex-col  justify-center items-center gap-3 text-white [font-family:var(--font-main)]`,
    form: "flex flex-col items-center gap-4 w-full",
    title: "font-bold text-[21px] leading-[34px]",
    desc: "text-[13px] leading-[27px] text-center",
    input: "text-[#8b8b8b] text-[13px] input"
  };

  const [emailValue, setEmailValue] = useState();

  function changeEmailHandler(value) {
    setEmailValue(value);
  }
  return (
    <div
      style={{ backgroundImage: `url(${emialLogo})` }}
      className={style.base}
    >
      <h1 className={style.title}>Newsletter</h1>
      <p className={style.desc}>
        Sign up to get exclusive offers from our favorite brands
      </p>
      <form className={style.form}>
        <input
          className={style.input}
          placeholder="Your Email Address"
          value={emailValue}
          onChange={e => changeEmailHandler(e.target.value)}
        />
        <div className="h-10">
          <Button
            callback={e => {
              e.preventDefault();
            }}
            backgroundColor="green_"
            color="white"
            fontFamily="main_b"
            radius="xsm"
            text={"Subscribe"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
