import React, { useState, useContext, useEffect } from "react";
import { Row, Col } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import Button from "./button";
import MainTable from "./mainTable";
import Input from "./input";
import { UserContext } from "../Context/context";

function MyTable() {
  const { countriesForTable } = useContext(UserContext);

  const [tableDataWithSum, setTabledDataWithSum] = useState({
    data: countriesForTable,
    continent: "World(total)",
  });

  const originalContinents = [
    ...new Set(
      countriesForTable.map((value) => {
        return value.continent;
      })
    ),
  ];
  const continents = [
    "All",
    ...originalContinents.filter((value) => {
      return value || null;
    }),
  ];

  const clickHandlerFunc = (continent) => {
    continent === "All" &&
      setTabledDataWithSum({
        data: countriesForTable,
        continent: "World(total)",
      });
    if (continent !== "All") {
      let filtered = countriesForTable.filter((value) => {
        return value.continent.toLowerCase().includes(continent.toLowerCase());
      });
      setTabledDataWithSum({
        data: filtered,
        continent: `${continent}(total)`,
      });
    }
  };

  const searchHandlerFuc = (inputValue) => {
    if (inputValue) {
      let filtered = countriesForTable.filter((value) => {
        return value.country.toLowerCase().includes(inputValue.toLowerCase());
      });
      setTabledDataWithSum({ ...tableDataWithSum, data: filtered });
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Button continents={continents} clickHandler={clickHandlerFunc} />
        </Col>
        <Col span={24}>
          <Input searchFilter={searchHandlerFuc} />
        </Col>
        {/* <Col>
         
        </Col> */}
      </Row>
      <div>
        <MainTable tableData={tableDataWithSum} />
      </div>
    </div>
  );
}

export default MyTable;
