import { Link } from "react-router-dom";

function EaseAccess({ text = "About us", to = "about-us" }) {
  const Links = [{ text: "Home", to: "/" }, { text, to }];

  return (
    <div className="w-full h-fit flex [font-family:var(--font-third)] text-[1rem] tracking-[2%] font-light leading-7">
      {Links.map((item, i) =>
        <Link to={item.to} key={i}>
          <pre
            className={`${item.to !== to
              ? "text-[var(--color-11)]"
              : "text-[var(--color-12)]"} capitalize`}
          >
            {`${i !== 0
              ? " - " + item.text.substring(1).replaceAll("-", " ")
              : item.text}`}
          </pre>
        </Link>
      )}
    </div>
  );
}

export default EaseAccess;
