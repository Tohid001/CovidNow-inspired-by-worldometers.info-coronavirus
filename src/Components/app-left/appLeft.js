import React, { useContext, useEffect, useState } from "react";
import Spinner from "../spinner";
import HeaderContainer from "../headerContainer";

import MyTable from "../table/myTable";
import { UserContext } from "../Context/context";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Dummy from "./dummy";

function AppLeft() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("I am appleft");
  //   }, 3000);
  // });
  const { countryInfo, countriesForTable } = useContext(UserContext);
  return (
    <div>
      <HeaderContainer />
      {/* {countryInfo ? (
        <InfoBoxContainer />
      ) : (
        <Spinner tip="Loading Primary Infos..." />
      )} */}
      {countriesForTable ? (
        <MyTable />
      ) : (
        <Spinner tip="Loading Detailed Infos..." />
      )}
    </div>
  );
}

export default AppLeft;
