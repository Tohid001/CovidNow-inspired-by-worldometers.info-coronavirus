import React, { useState, useContext, useEffect } from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MainTable from "./mainTable";
import { UserContext } from "../Context/context";

function MyTable() {
  const { countriesForTable } = useContext(UserContext);
  const [inputValue, setinputValue] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (inputValue) {
      // console.log(inputValue.toLowerCase());
      const filtered = countriesForTable.filter((value) => {
        // console.log(value.country.toLowerCase());

        return value.country.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(null);
    }
  }, [inputValue]);

  return (
    <div>
      <Row>
        <Col span={24}>
          <Input
            placeholder="filter by country..."
            prefix={<SearchOutlined />}
            value={inputValue}
            onChange={(e) => {
              setinputValue(e.target.value);
            }}
          />
        </Col>
        <Col>
          <MainTable filteredData={filteredData} />
        </Col>
      </Row>
    </div>
  );
}

export default MyTable;
