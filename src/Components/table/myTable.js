import React, { useState, useContext, useEffect } from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Button from "./button";
import MainTable from "./mainTable";
import { UserContext } from "../Context/context";

function MyTable() {
  const { countriesForTable } = useContext(UserContext);
  const [inputValue, setinputValue] = useState(null);

  const [tableDataWithSum, setTabledDataWithSum] = useState({
    data: countriesForTable,
    continent: "Total",
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
      setTabledDataWithSum({ data: countriesForTable, continent: "Total" });
    if (continent !== "All") {
      let filtered = countriesForTable.filter((value) => {
        return value.continent.toLowerCase().includes(continent.toLowerCase());
      });
      setTabledDataWithSum({ data: filtered, continent: continent });
    }
  };

  // useEffect(() => {
  //   if (inputValue) {
  //     // console.log(inputValue.toLowerCase());
  //     const filtered = countriesForTable.filter((value) => {
  //       // console.log(value.country.toLowerCase());

  //       return value.country.toLowerCase().includes(inputValue.toLowerCase());
  //     });
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(null);
  //   }
  // }, [inputValue]);

  return (
    <div>
      <Row>
        <Col>
          {continents.map((value) => {
            return (
              <Button
                continent={value}
                clickHandler={clickHandlerFunc}
                key={value}
              />
            );
          })}
        </Col>
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
          <MainTable tableData={tableDataWithSum} />
        </Col>
      </Row>
    </div>
  );
}

export default MyTable;
