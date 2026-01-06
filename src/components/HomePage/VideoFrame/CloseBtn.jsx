function CloseBtn({ reset }) {
  const style = {
    base:
      "z-1 btn w-12 h-12 grid items-center text-3xl rounded-full  bg-white text-black shadow-md shadow-black ring-0  absolute right-5 top-5  "
  };
  return (
    <button className={style.base} onClick={() => reset()}>
      &times;
    </button>
  );
}

export default CloseBtn;
