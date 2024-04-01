import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Table = ({ columns, data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * pageSize;
  const currentData = data.slice(offset, offset + pageSize);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                className={`bg-white ${
                  index % 2 === 0 ? "dark:bg-gray-800" : ""
                } hover:bg-gray-50 dark:hover:bg-gray-600`}
              >
                {Object.keys(item).map((key, innerIndex) => (
                  <td key={innerIndex} className="px-6 py-4">
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(data.length / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination flex items-center justify-center space-x-2"
          activeClassName={"active"}
          previousClassName={
            "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          }
          nextClassName={"px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"}
          pageClassName={"px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"}
        />
      </div>
    </>
  );
};

export default Table;
