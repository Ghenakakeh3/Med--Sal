import React, { useState } from "react";
import Dropdown from "../../utilities/Dropdown";
import mini_menu from "../../../assets/icons/mini-menu.svg";
import Dropdown from "../../utilities/Dropdown";
const Table = ({ columns, rows, points }) => {
  const [activeRow, setActiveRow] = useState(null);
  const [point, setPoint] = useState(null);
  const handlepoint = (e) => {
    setValueDtopdown(e.target.value);
  };

  return (
    <div className="overflow-hidden px-7 min-h-screen overflow-x-auto ">
      <table className="table-auto w-full overflow-x-auto">
        <thead className="">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-6 text-myGray-500 text-sm">
                {column["title"]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`relative ${
                rowIndex % 2 === 0 ? "bg-myGray-200 border-b" : ""
              }`}
            >
              <td className="py-8 px-5 text-sm text-gray-500 flex justify-center ">
                {(rowIndex + 1).toString().padStart(2, "0")}
              </td>

              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`text-center py-8 text-sm ${
                    cell === "Active"
                      ? "text-success"
                      : cell === "Not Active"
                      ? "text-error"
                      : "text-gray-500"
                  }`}
                >
                  {cell}
                </td>
              ))}
              <td className="flex justify-center items-center">
                <img
                  onBlur={() => setActiveRow(null)}
                  tabIndex={0}
                  onClick={() => setActiveRow(rowIndex)}
                  className=" w-[3px] cursor-pointer "
                  src={mini_menu}
                  alt="*"
                />{" "}
                */}
                {/* <div className="">
                  {activeRow === rowIndex ? (
                    <ul className="absolute rounded-md  end-8 top-10 bg-myGray-200 shadow-md w-32 z-10 ">
                      {points.map((element, index) => (
                        <>
                          <li
                            className="block cursor-pointer w-full whitespace-nowrap bg-myGray-200 px-4 py-2 text-sm font-normal  hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary "
                            key={index}
                          >
                            <a
                              className={`
                      ${
                        (rowIndex + 1).toString().padStart() &&
                        index === points.length - 1
                          ? "text-error"
                          : ""
                      } 
                      `}
                            >
                              {element.name}
                            </a>
                          </li>
                        </>
                      ))}
                    </ul> */}
                <Dropdown
                  options={points}
                  value={point}
                  onChange={handlepoint}
                  icon={mini_menu}
                  showSlected={false}
                  ulClassname={" ltr:right-0 rtl:start-[-7rem]"}
                />
                {/* ) : (
                    ""
                  )}
                </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
