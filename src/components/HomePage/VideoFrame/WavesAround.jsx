function WavesAround({ children }) {
  const style = {
    base: "h-full w-full absolute inset-0 flex justify-center items-center z-0"
  };
  return (
    <div className={style.base}>
      {children}
    </div>
  );
}
export default WavesAround;
