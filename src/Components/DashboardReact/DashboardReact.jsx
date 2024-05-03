import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import DashboardMain from "./DashboardMain/DashboardMain";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

Dashboard.Sidebar = Sidebar;
Dashboard.DashboardMain = DashboardMain;

export default Dashboard;