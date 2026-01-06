const Button = ({
  color = "white",
  fontFamily = "third",
  backgroundColor = "black",
  radius = "xsm",
  text,
  type,
  children,
  disabled = false,
  callback,
  textSize = "sm"
}) => {
  const COLORS = {
    color_8: "text-var[(--color-8)]",
    color_7: "text-var[(--color-7)]",
    color_6: "text-var[(--color-6)]",
    color_5: "text-var[(--color-5)]",
    black: "text-black",
    white: "text-white"
  };
  const BACKGROUND_COLORS = {
    green_: "bg-[#8DD245]",
    color_11: "bg-[var(--color-11)]",
    color_9: "bg-[#72B84B]",
    color_8: "bg-[var(--color-8)]",
    color_7: "bg-[var(--color-7)]",
    color_6: "bg-[var(--color-6)]",
    color_5: "bg-[var(--color-5)]",
    black: "bg-black",
    white: "bg-white",
    none: "bg-none"
  };
  const FONT = {
    main: "[font-family:var(--font-main)] font-normal",
    second: "[font-family:var(--font-second)] font-normal",
    third: "[font-family:var(--font-third)] font-normal",
    main_m: "[font-family:var(--font-main)] font-medium",
    second_m: "[font-family:var(--font-second)] font-medium",
    third_m: "[font-family:var(--font-third)] font-medium",

    main_l: "[font-family:var(--font-main)] font-light",
    second_l: "[font-family:var(--font-second)] font-light",
    third_l: "[font-family:var(--font-third)] font-light",

    main_b: "[font-family:var(--font-main)] font-bold",
    second_b: "[font-family:var(--font-second)] font-bold",
    third_b: "[font-family:var(--font-third)] font-bold"
  };
  const RADUIS = {
    xsm: "rounded-[5px]",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xlg: "rounded-[13px]"
  };
  const TEXT_SIZE = {
    sm: "text-[1rem]",
    md: "text-[1.3rem]",
    lg: "text-[1.5rem]"
  };
  const style = {
    base: "btn border-none w-full h-full "
  };
  return (
    <button
      disabled={disabled}
      onClick={e => callback && callback(e)}
      type={type}
      className={`${style.base} ${COLORS[color]} ${BACKGROUND_COLORS[
        backgroundColor
      ]} ${RADUIS[radius]} ${FONT[fontFamily]} ${TEXT_SIZE[textSize]}`}
    >
      {text}
      <span>
        {children}
      </span>
    </button>
  );
};

export default Button;
