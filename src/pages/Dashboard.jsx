import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import axios from "axios";
import { UserContext } from "../context-api/userContext";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const { userToken } = useContext(UserContext);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const transactionRequest = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_TRANSACTION_PATH}`,
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      const data = await response.data.data;
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userToken) {
      transactionRequest();
    }
  }, [userToken]);

  const extractColumnsAndData = (jsonData) => {
    const columns = Object.keys(jsonData[0])?.filter((key) => key !== "id");
    const data = jsonData.map((item) => {
      const { id, ...rest } = item;
      return Object.values(rest);
    });
    return { columns, data };
  };

  useEffect(() => {
    if (transactions.length > 0) {
      setColumns(extractColumnsAndData(transactions).columns);
      setData(extractColumnsAndData(transactions).data);
    }
  }, [transactions]);

  const pageSize = 5;

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-64 mt-20">
        <div className="p-4 rounded-lg dark:border-gray-700">
          {columns.length > 0 && data.length > 0 && (
            <Table columns={columns} data={data} pageSize={pageSize} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
