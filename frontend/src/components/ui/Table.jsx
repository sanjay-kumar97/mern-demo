import React from "react";
import { twMerge } from "tailwind-merge";

const Table = (props) => {
  const {
    TableData,
    TableData: { TableHeads = [], TableRows = [] },
    classNames: { root = "", table = "", head = "", row = "", data = "" } = {},
  } = props;

  const styles = {
    rootClass: "w-full max-w-full overflow-auto",
    tableClass:
      "w-full min-w-max table-auto text-left rounded-md overflow-hidden",
    headClass: "border-b border-[#CFD8DC] bg-[#ECEFF1] p-4 text-black/70",
    rowClass: "even:bg-[#F5F7F8]",
    dataClass: "p-4",
  };

  return (
    <div className={twMerge(styles["rootClass"], root)}>
      <table className={twMerge(styles["tableClass"], table)}>
        <thead>
          <tr>
            {TableHeads.map((headData, index) => (
              <th key={index} className={twMerge(styles["headClass"], head)}>
                {headData}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableRows.map((rowData, rowIndex) => (
            <tr key={rowIndex} className={twMerge(styles["rowClass"], row)}>
              {rowData.map((item, dataIndex) => (
                <td
                  key={dataIndex}
                  className={twMerge(styles["dataClass"], data)}
                >
                  {item.type === "text" ? (
                    item.label
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => item.onClick(rowIndex)}
                    >
                      {item.label}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
