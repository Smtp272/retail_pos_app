import { Link } from "react-router-dom";

import SidebarOption from "./SidebarOption";
import "./sidebar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";

function SideBar() {
    return (
        <div className="sidebar">
            <SidebarOption text="Home" Icon={HomeRoundedIcon} />
            <SidebarOption
                text="DashBoard"
                Icon={DashboardCustomizeRoundedIcon}
            />
            <SidebarOption text="Analytics" Icon={AnalyticsRoundedIcon} />
        </div>
    );
}

export default SideBar;
