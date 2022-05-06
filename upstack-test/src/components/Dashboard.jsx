import "./styles/Dashboard.scss";
import LeftDrawer, { DrawerHeader, DrawerItem, DrawerUser } from "./LeftDrawer";
import Navbar, { NavItem, NavItems } from "./Navbar";
import Content from "./Content";
import { useState } from "react";
import Logo from "../assets/images/AdminLTELogo.png";
import Avater from "../assets/images/alex.jpg";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <div className="dashboard">
      <aside className={`wrapper-drawer ${openDrawer ? "open-drawer" : ""}`}>
        <LeftDrawer>
          <DrawerHeader icon={Logo}>AdminLTE 3</DrawerHeader>
          <DrawerUser icon={Avater}>Alexander Pierce</DrawerUser>
          <DrawerItem icon={Logo}>
            <span onClick={() => navigate("/")}>Employees Info</span>
          </DrawerItem>
        </LeftDrawer>
      </aside>

      <div className="wrapper-main">
        <Navbar toggleDrawer={toggleDrawer}>
          <NavItems>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
          </NavItems>
        </Navbar>
        <Content />
      </div>
      <div
        onClick={() => setOpenDrawer((prev) => !prev)}
        className={`${openDrawer ? "overlay" : ""}`}
      ></div>
    </div>
  );
};

export default Dashboard;
