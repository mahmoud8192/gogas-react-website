function Input({
  label,
  type = "text",
  name,
  id,
  placeholder,
  isMsg = false,
  value,
  autoComplete,
  onchange
}) {
  const style = {
    base: "w-full h-full  flex flex-col   gap-4 ",
    label: "font-[500] h-fit text-[1.2rem]  capitalize",
    input:
      "w-full h-[80%] p-4 text-[1rem] ring-2 rounded-md ring-[#d8d8d8] text-[var(--color-12)] text-start"
  };
  return (
    <div className={style.base}>
      <label className={style.label}>
        {label}
      </label>
      {!isMsg
        ? <input
            autoComplete={autoComplete}
            className={style.input}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={e => onchange(e.target.value, id)}
          />
        : <textarea
            className={style.input}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={e => onchange(e.target.value, id)}
          />}
    </div>
  );
}

export default Input;
