import Product from "./Product";

function Products() {
  const style = {
    base:
      "flex flex-wrap justify-between gap-4 items-center w-full h-fit  [font-family:var(--font-main)] font-bold"
  };

  const whatOfferIcons = [
    {
      imgSrc: "/images/what-offer-icons/diesel.svg",
      title: "diese",
      size: "250"
    },
    {
      imgSrc: "/images/what-offer-icons/gas.svg",
      title: "gas",
      size: "250"
    },
    {
      imgSrc: "/images/what-offer-icons/gasoline 90.svg",
      title: "gasoline 90",
      size: "250"
    },
    {
      imgSrc: "/images/what-offer-icons/gasoline 95.svg",
      title: "gasoline 95",
      size: "250"
    }
  ];
  return (
    <div className={style.base}>
      {whatOfferIcons.map((item, i) => {
        return <Product item={item} key={i} />;
      })}
    </div>
  );
}

export default Products;
