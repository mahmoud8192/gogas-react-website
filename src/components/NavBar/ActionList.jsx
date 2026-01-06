import Action from "./Action";
const ActionList = ({ actions }) => {
  const style = {
    base: "flex min-w-20 max-w-fit justify-around h-[80%] items-end"
  };
  return (
    <div className={style.base}>
      {actions.map(action =>
        <Action
          key={action.id}
          notificationBadgeNumber={action.notificationBadgeNumber}
          to={action.to}
        >
          {action.icon}
        </Action>
      )}
    </div>
  );
};

export default ActionList;
