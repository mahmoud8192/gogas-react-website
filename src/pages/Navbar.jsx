import Logo from "../components/NavBar/Logo";
import src from "../assets/images/navbar/logo.svg";
import NavList from "../components/NavBar/NavList";
import ActionList from "../components/NavBar/ActionList";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBasketLine } from "react-icons/ri";
import Header from "../components/NavBar/Header";

const actions = [
  {
    icon: <RiShoppingBasketLine size={"30px"} />,
    to: "cart",
    id: "0",
    notificationBadgeNumber: 0
  },
  {
    icon: <CgProfile size={"30px"} />,
    to: "my-account",
    id: "1",
    notificationBadgeNumber: 4
  }
];
function Navbar() {
  const style = {
    base: "w-full h-full flex justify-around flex-col items-center  gap-4 p-5 bg-white sm:px-10 lg:flex-row ",
  logo:"w-fit min-w-[10%] h-full"};

  return (
    <>
    <div>
      <Header />
    </div>
    <div className={`${style.base}`}>
      <div className={style.logo}>
      <Logo src={src} />
      </div>
      <NavList />
      <ActionList actions={actions} />
    </div>
    </>
  );
};

export default Navbar;
