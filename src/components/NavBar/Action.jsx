import { Link } from "react-router-dom";
import NotificationBadge from "./NotificationBadge";

const Action = ({ children, to, notificationBadgeNumber = 0 }) => {
  const style = {
    base: "w-fit",
    link: `w-5 h-5 rounded-sm bg-red-400 `
  };

  return (
    <div className={style.base}>
      {to === "cart" && <NotificationBadge number={notificationBadgeNumber} />}
      <Link className={style.link} to={`/${to}`}>
        {children}
      </Link>
    </div>
  );
};

export default Action;
