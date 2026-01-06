const NotificationBadge = ({ bgColor = "orange", number = "10+" }) => {
  // during compile time the tailwind cannot configure bgColor directly in code (so bgColor will known during runtime)
  const colorMap = {
    red: "bg-red-800",
    blue: "bg-blue-800",
    green: "bg-green-800",
    orange: "bg-[#FFC000]"
  };
  const style = {
    base: ` flex w-3 h-3 ${colorMap[
      bgColor
    ]} text-white rounded-[50%]  text-[10px] text-center items-center justify-center [font-family:var(--font-main)] relative top-2 left-[70%]`
  };
  // conditional rendering
  return (
    <div className={style.base}>
      {number}
    </div>
  );
};
export default NotificationBadge;
