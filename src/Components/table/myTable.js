import React, { useState, useEffect, useContext } from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MainTable from "./mainTable";
import { UserContext } from "../Context/context";

function MyTable() {
  const { countriesForTable } = useContext(UserContext);
  const [inputValue, setinputValue] = useState("");
  const [filteredData, setFilteredData] = useState(countriesForTable);
  useEffect(() => {
    const globalSearch = () => {
      const filtered = filteredData.filter((value) => {
        return value.country.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilteredData(filtered);
    };
    inputValue && globalSearch();
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
