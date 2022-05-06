import "./styles/LeftDrawer.scss";

const LeftDrawer = (props) => {
  return <ul className="left-drawer">{props.children}</ul>;
};

export default LeftDrawer;

export const DrawerHeader = (props) => {
  return (
    <li className="drawer-header">
      <img src={props.icon} />
      <span>{props.children}</span>
    </li>
  );
};

export const DrawerUser = (props) => {
  return (
    <li className="drawer-user">
      <img src={props.icon} />
      <span>{props.children}</span>
    </li>
  );
};

export const DrawerItem = (props) => {
  return (
    <li className="drawer-item">
      <img src={props.icon} />
      <span>{props.children}</span>
    </li>
  );
};
