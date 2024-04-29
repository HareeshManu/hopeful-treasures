import { useEffect, useState } from "react";

import { CartState } from "../context/Context";
import DashboardHeader from './DashboardHeader'
import Sidebar from './Sidebar'
import DashboardHome from './DashboardHome'
const Dashboard = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  useEffect(() => {
  }, []);

  return (
    <div className='grid-container'>
    <DashboardHeader OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <DashboardHome />
  </div>
  );
};

export default Dashboard;
