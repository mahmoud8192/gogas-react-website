function PurchaseDetailItem({ label, result, unit = "JD" }) {
  const style = {
    base:
      "h-full flex items-center gap-4 w-full [font-family:var(--font-second)]  font-medium text-[1.2rem] capitlize",
    result: "text-[#d02027]"
  };

  return (
    <li className={style.base}>
      {label} {unit === "L" ? "Liter" : unit}
      <span className={style.result}>{`${result} ${unit} `}</span>
    </li>
  );
}

export default PurchaseDetailItem;
