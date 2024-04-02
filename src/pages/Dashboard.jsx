import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Transaction from "./Transaction";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

const Welcome = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center md:ml-20">
        <h3 className=" text-xl font-medium lg:text-4xl">
          Welcome to the Dashboard Page.
        </h3>
      </div>
    </div>
  );
};
