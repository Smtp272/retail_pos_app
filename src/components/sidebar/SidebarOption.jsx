import "./sidebarOption.css";
import { Link } from "react-router-dom";
function SidebarOption({ active, text, Icon }) {
    let page_link = `/${text.toLowerCase()}`;
    return (
        <Link style={{ textDecoration: "none",color:'inherit' }} to={page_link}>
            <div className="sidebarOption" title={text}>
                <Icon />
                <h2>{text}</h2>
            </div>
        </Link>
    );
}

export default SidebarOption;

// npm install redux react-redux @mui/icons-material @mui/material @emotion/styled @emotion/react react-router-dom react-bootstrap bootstrap
