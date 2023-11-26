import { FiMenu } from "react-icons/fi";
import "./CSS/sidenav.css";
import Sideitems from "./Sideitems";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsHouses } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { MdOutlineDataThresholding } from "react-icons/md";

const Sidenav = (props) => {
  return (
    <div className="side-panel">
      <Sideitems image=<FiMenu className="menuItem" /> />

      <div className="side-panel-favorites">
        <Sideitems color="#43C59E" height="40px" width="40px" />
        <Sideitems color="#3D7068" height="40px" width="40px" />
        <Sideitems color="#14453D" height="40px" width="40px" />
      </div>
      <div className="divider"></div>
      <div className="linksMenu">
        <NavLink to={"/Dashboard"} activeClassName="active">
          <Sideitems
            image=<MdOutlineDataThresholding className="dashboardItem" />
          />
        </NavLink>
        <NavLink to={"/Overall"} activeClassName="active">
          <Sideitems
            image=<MdOutlineDashboardCustomize className="overallItem" />
          />
        </NavLink>
        <NavLink to={"/Properties"} activeClassName="active">
          <Sideitems image=<BsHouses className="propertiesItem" /> />
        </NavLink>
      </div>
      <div className="divider-bottom"></div>
      <div className="bottomItems">
        <NavLink to={"/Settings"}>
          <Sideitems image=<IoSettingsOutline className="settingsItem" /> />
        </NavLink>
        <Sideitems image=<CgLogOut className="logOutItem" /> />
      </div>
    </div>
  );
};

export default Sidenav;
