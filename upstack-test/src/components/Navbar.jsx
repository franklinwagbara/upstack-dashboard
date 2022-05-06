import "./styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <FontAwesomeIcon onClick={() => props.toggleDrawer()} icon={faBars} />
      {props.children}
    </div>
  );
};

export default Navbar;

export const NavItems = (props) => {
  return <ul className="nav-items">{props.children}</ul>;
};

export const NavItem = (props) => {
  return <li className="nav-item">{props.children}</li>;
};
