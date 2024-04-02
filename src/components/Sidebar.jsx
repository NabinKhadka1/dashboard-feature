import React from "react";
import { routes } from "../constants/routes";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sidebarItems = routes.map((route) => (
    <li key={route.key}>
      <NavLink
        to={route.path}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {route.icon}
        <span
          className={`ms-3 ${
            location.pathname === route.path ? "text-blue-500" : ""
          }`}
        >
          {route.name}
        </span>
      </NavLink>
    </li>
  ));
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">{sidebarItems}</ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
