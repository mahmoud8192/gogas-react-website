import { Link } from "react-router-dom";

function Cart({ cartData = [] }) {
  if (!cartData.length) {
    return (
      <div className="w-[80%] mx-auto min-h-[50vh]   [font-family:var(--font-second)] font-medium text-[1.5rem] capitalize ">
        <div className="flex w-full h-fit bg-gray-50 justify-between items-center p-4">
          <p>Your cart is currently empty!</p>
          <Link
            className="text-white bg-[var(--color-11)] text-[1rem] rounded-md w-70 h-15 grid items-center text-center"
            to={"/"}
          >
            Return to shop
          </Link>
        </div>
      </div>
    );
  }
  return <div className="Cart">elements</div>;
}

export default Cart;
