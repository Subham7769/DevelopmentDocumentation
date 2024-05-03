import { Avatar, Chip } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  return (
    <div className="Navbar">
      <div className="header">
        <Link to="/" >Home</Link>
        <Link to="/Dashboard" >HTML</Link>
        <Link to="/Dashboard" >CSS</Link>
        <Link to="/Dashboard" >JavaScript</Link>
        <Link to="/React" >React</Link>
        <Link to="/Dashboard" >MUI</Link>
        <Link to="/Dashboard" >Pre Build Components</Link>
      </div>
    </div>
  );
};

export default Header;
