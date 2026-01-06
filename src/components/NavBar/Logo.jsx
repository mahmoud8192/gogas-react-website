import extractNameFromSRC from "../utils/extractNameFromSRC";
function Logo({ src }) {
  const style = {
    base: "w-full h-full sm:self-start"
  };
  // extract name
  const name = extractNameFromSRC(src);

  return <img src={src} alt={name} className={`${style.base} `} />;
}

export default Logo;
