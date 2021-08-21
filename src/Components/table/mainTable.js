import React, { useContext, useState, useMemo } from "react";
import "./table.css";
import { UserContext } from "../Context/context";
import { Columns } from "./columns";
import { summaryFunc } from "./summaryFunc";

import "antd/dist/antd.css";
import { Table } from "antd";

function MainTable({ tableData }) {
  const { countriesForTable } = useContext(UserContext);
  // const [page, setPage] = useState(1);
  console.log("MAintable rendering ..");
  const memoizedColumns = useMemo(() => Columns(), []);
  // const memoizedData = useMemo(
  //   () =>
  //     ,
  //   []
  // );
  // filteredData && filteredData.length
  //         ? [summaryFunc(filteredData), ...filteredData]
  //         : [summaryFunc(countriesForTable), ...countriesForTable]
  return (
    <Table
      className="table"
      style={{ marginTop: "20px" }}
      bordered
      sticky
      tableLayout="fixed"
      columns={memoizedColumns}
      dataSource={[summaryFunc(tableData), ...tableData.data]}
      scroll={{ x: "max-content" }}
      pagination={false}
      // // pagination={{
      // //   position: ["bottomCenter"],
      // //   responsive: true,
      // //   defaultPageSize: 20,
      // //   showSizeChanger: false,
      // //   total: countriesForTable.length,
      // //   showTotal: (total, range) =>
      // //     `${range[0]}-${range[1]} of ${total} items`,
      // //   showQuickJumper: true,
      // //   onChange(current) {
      // //     setPage(current);
      // //   },
      // //   itemRender(current, type, originalElement) {
      // //     {
      // //       if (type === "prev") {
      // //         return <a>Previous</a>;
      // //       }
      // //       if (type === "next") {
      // //         return <a>Next</a>;
      // //       }
      // //       return originalElement;
      // //     }
      // //   },
      //   // onShowSizeChange: (current, pageSize) => {
      //   //   console.log(current, pageSize);
      //   // },
      // }}
    />
  );
}

export default React.memo(MainTable);
