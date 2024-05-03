import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import SelectDropDown from "../../Common/SelectDropDown/SelectDropDown";
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const products = useSelector(state => state.ProductSlice.products);


  return (
    <div className="sidebar">
      {!products.length < 1 ? (<><SelectDropDown /> <Divider /></>) : null}

      <nav className="navSidebar">
        <NavLink to="/Dashboard/" className="NavLink">
          <AddRoundedIcon />
          New Product
        </NavLink>
        <NavLink to="/Dashboard/swot" className="NavLink">
          <QueryStatsRoundedIcon />
          Swot Analysis
        </NavLink>
        <NavLink to="/Dashboard/knowledgeBase" className="NavLink">
          <AcUnitRoundedIcon />
          Knowledge Base
        </NavLink>
        <NavLink to="/Dashboard/MarketResearch" className="NavLink">
          <TravelExploreRoundedIcon />
          Market Research
        </NavLink>
        <NavLink to="/Dashboard/PriceCalculation" className="NavLink">
          <PriceCheckRoundedIcon />
          Price Calculation
        </NavLink>
        <NavLink to="/Dashboard/TestComponent" className="NavLink">
          <ScienceRoundedIcon />
          Test Component
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
