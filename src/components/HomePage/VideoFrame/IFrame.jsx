function IFrame({ videoSrc }) {
  const style = {
    base: "w-full h-full rounded-4 p-5 shadow-md"
  };
  return (
    <iframe
      allowFullScreen={true}
      className={style.base}
      src={videoSrc}
      title="YouTube video"
    />
  );
}

export default IFrame;
