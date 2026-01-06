import Card from "./Card";

const goShop = ["/images/goShop/go-gas-shop-img.png"];

function Slider() {
  const style = {
    card_container: "carousel w-full h-full"
  };
  return (
    <div className={style.card_container}>
      {goShop.map((item, i) =>
        <Card
          id={i + 1}
          next={i + 1 === goShop.length ? 1 : i + 2}
          prev={i <= 0 ? goShop.length : i}
          src={item}
          key={i}
        />
      )}
    </div>
  );
}

export default Slider;
