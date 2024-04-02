import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import axios from "axios";
import { UserContext } from "../context-api/userContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transaction from "./Transaction";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

const Hello = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-medium border md:text-4xl">
          Welcome to the Dashboard Page.
        </h3>
      </div>
    </div>
  );
};
