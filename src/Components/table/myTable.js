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
    <div>
      <Row>
        <Col>
          <Button
            setContinent={setFilterCriterias}
            filterCriterias={filterCriterias}
          />
        </Col>
        <Col span={24}>
          <Input
            // searchFilter={clickSearchHandlerFunc}
            filterCriterias={filterCriterias}
            setInputValue={setFilterCriterias}
          />
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

export default React.memo(MyTable);
