import React, { useContext, useState } from "react";
import "./table.css";
import { UserContext } from "../Context/context";
import { Columns } from "./columns";
import { summaryFunc } from "./summaryFunc";

import "antd/dist/antd.css";
import { Table } from "antd";

function MainTable({ filteredData }) {
  const { countriesForTable } = useContext(UserContext);
  const [page, setPage] = useState(1);

  return (
    <Table
      className="table"
      style={{ marginTop: "20px" }}
      bordered
      sticky
      tableLayout="fixed"
      columns={Columns(page)}
      dataSource={
        filteredData && filteredData.length
          ? filteredData
          : [summaryFunc(countriesForTable), ...countriesForTable]
      }
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
