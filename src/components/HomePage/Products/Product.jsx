import extractNameFromSRC from "../../utils/extractNameFromSRC";

function Product({ item }) {
  const style = {
    card:
      "w-[30%] max-w-[400px] shadow-md h-full gap-1  flex flex-col items-center p-4 leading-8 tracking-wide capitalize",
    icon: "w-25  h-25 ",
    title: "text-[1.3rem]",
    size: "font-normal text-[1.1rem]"
  };
  return (
    <div className={style.card}>
      <img
        className={style.icon}
        src={item.imgSrc}
        alt={extractNameFromSRC(item.imgSrc)}
      />
      <h3 className={style.title}>
        {item.title}
      </h3>
      <p className={style.size}>
        {item.size}
      </p>
    </div>
  );
}

export default Product;
