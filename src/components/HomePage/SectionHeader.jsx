import React from "react";

function SectionHeader({ text }) {
  const style = {
    title: "[font-family:var(--font-main)] font-bold text-[2rem] text-center"
  };
  return (
    <h1 className={style.title}>
      {text}
    </h1>
  );
}

export default SectionHeader;
