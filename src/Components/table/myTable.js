import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Typography } from "antd";

import { TableOutlined } from "@ant-design/icons";
import Button from "./button";
import MainTable from "./mainTable";
import Input from "./input";
import { UserContext } from "../Context/context";

const { Title } = Typography;
function MyTable() {
  console.log("myTAble is rendering");
  const { countriesForTable } = useContext(UserContext);

  const [tableDataWithSum, setTabledDataWithSum] = useState({
    data: countriesForTable,
    continent: "World",
  });

  const [filterCriterias, setFilterCriterias] = useState({
    continent: "All",
    inputValue: "",
    isFiltered: false,
  });
  // console.log(`continentis ${continent}`);

  useEffect(() => {
    const clickSearchHandlerFunc = () => {
      if (filterCriterias.continent === "All") {
        const tableData = !filterCriterias.inputValue
          ? countriesForTable
          : countriesForTable.filter((value) => {
              return value.country
                .toLowerCase()
                .includes(filterCriterias.inputValue.toLowerCase());
            });
        console.log(tableData);
        setTabledDataWithSum({
          data: tableData,
          continent: "World",
        });
      }

      if (filterCriterias.continent !== "All") {
        let filtered = countriesForTable.filter((value) => {
          return value.continent
            .toLowerCase()
            .includes(filterCriterias.continent.toLowerCase());
        });
        const tableData = !filterCriterias.inputValue
          ? filtered
          : filtered.filter((value) => {
              return value.country
                .toLowerCase()
                .includes(filterCriterias.inputValue.toLowerCase());
            });
        console.log(tableData);
        setTabledDataWithSum({
          data: tableData,
          continent: filterCriterias.continent,
        });
      }
      setFilterCriterias({ ...filterCriterias, isFiltered: false });
    };
    filterCriterias.isFiltered && clickSearchHandlerFunc();
  }, [filterCriterias.isFiltered]);

  // const clickSearchHandlerFunc = () => {
  //   if (continent === "All") {
  //     const tableData = !inputValue
  //       ? countriesForTable
  //       : countriesForTable.filter((value) => {
  //           return value.country
  //             .toLowerCase()
  //             .includes(inputValue.toLowerCase());
  //         });
  //     console.log(tableData);
  //     setTabledDataWithSum({
  //       data: tableData,
  //       continent: "World",
  //     });
  //   }

  //   if (continent !== "All") {
  //     let filtered = countriesForTable.filter((value) => {
  //       return value.continent.toLowerCase().includes(continent.toLowerCase());
  //     });
  //     const tableData = !inputValue
  //       ? filtered
  //       : filtered.filter((value) => {
  //           return value.country
  //             .toLowerCase()
  //             .includes(inputValue.toLowerCase());
  //         });
  //     console.log(tableData);
  //     setTabledDataWithSum({
  //       data: tableData,
  //       continent: continent,
  //     });
  //   }
  // };

  return (
    <div style={{ margin: "0 auto", width: "95%" }}>
      <Row>
        <Col span={24}>
          <Row
            style={{ backgroundColor: "rgba(252, 165, 165)" }}
            justify="center"
          >
            <Col span={24}>
              <Title
                style={{ textAlign: "center", padding: " 10px 0 3px" }}
                level={3}
              >
                <TableOutlined /> Table Data:
              </Title>
            </Col>
            <Col span={11}>
              <div style={{ padding: "7px 2px" }}>
                <Input
                  // searchFilter={clickSearchHandlerFunc}
                  filterCriterias={filterCriterias}
                  setInputValue={setFilterCriterias}
                />
              </div>
            </Col>
            <Col>
              <div style={{ padding: " 7px 2px" }}>
                <Button
                  setContinent={setFilterCriterias}
                  filterCriterias={filterCriterias}
                />
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <div>
            <MainTable tableData={tableDataWithSum} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(MyTable);
