import Logo from "./Logo";
import src from "../../assets/images/navbar/logo.svg";
import NavList from "./NavList";
import ActionList from "./ActionList";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBasketLine } from "react-icons/ri";

const actions = [
  {
    icon: <RiShoppingBasketLine size={"30px"} />,
    to: "cart",
    id: "0",
    notificationBadgeNumber: 0
  },
  {
    icon: <CgProfile size={"30px"} />,
    to: "profile",
    id: "1",
    notificationBadgeNumber: 0
  }
];

const Navbar = () => {
  return (
    <div
      className={
        "w-full flex justify-around gap-4 flex-col h-fit items-center md:flex-row sm:px-10 md:h-20"
      }
    >
      <Logo src={src} />
      <NavList />
      <ActionList actions={actions} />
    </div>
  );
};

export default Navbar;
