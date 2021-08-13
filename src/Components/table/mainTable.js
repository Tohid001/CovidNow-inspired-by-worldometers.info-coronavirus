import React, { useContext, useState } from "react";
import { UserContext } from "../Context/context";
import { Columns } from "./columns";

import "antd/dist/antd.css";
import { Table } from "antd";

function MainTable() {
  const { countriesForTable } = useContext(UserContext);
  const [page, setPage] = useState(1);

  return (
    <Table
      style={{ marginTop: "20px" }}
      bordered
      columns={Columns(page)}
      dataSource={countriesForTable}
      scroll={{ x: 2100, y: 300 }}
      pagination={{
        responsive: true,
        defaultPageSize: 20,
        showSizeChanger: false,
        total: countriesForTable.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        showQuickJumper: true,
        onChange(current) {
          setPage(current);
        },
        itemRender(current, type, originalElement) {
          {
            if (type === "prev") {
              return <a>Previous</a>;
            }
            if (type === "next") {
              return <a>Next</a>;
            }
            return originalElement;
          }
        },
        // onShowSizeChange: (current, pageSize) => {
        //   console.log(current, pageSize);
        // },
      }}
      //   scroll={{ y: 240 }}
    />
  );
}

export default MainTable;
