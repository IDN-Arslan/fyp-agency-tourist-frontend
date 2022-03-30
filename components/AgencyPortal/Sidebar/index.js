import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";

const SidebarAgency = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/order" className="link">
                <li className="sidebarListItem ">
                  <LineStyleIcon className="sidebarIcon" />
                  Orders
                </li>
              </Link>
              <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon" />
                Manage Orders
              </li>
              <Link to="/deals" className="link">
                <li className="sidebarListItem ">
                  <LineStyleIcon className="sidebarIcon" />
                  Deals
                </li>
              </Link>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Manage Deals
              </li>
              <Link to="/NewDeals" className="link">
                <li className="sidebarListItem">
                  <TrendingUpIcon className="sidebarIcon" />
                  Add new Deals
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarAgency;
