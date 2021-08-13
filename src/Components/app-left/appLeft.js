import React, { useContext } from "react";
import Spinner from "../spinner";
import HeaderContainer from "../headerContainer";
import InfoBoxContainer from "../infobox/infoBoxContainer";
import MainTAble from "../table/mainTable";
import { UserContext } from "../Context/context";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function AppLeft() {
  const { countryInfo, countriesForTable } = useContext(UserContext);
  return (
    <div>
      <HeaderContainer />
      {countryInfo ? (
        <InfoBoxContainer />
      ) : (
        <Spinner tip="Loading Primary Infos..." />
      )}
      {countriesForTable ? (
        <MainTAble />
      ) : (
        <Spinner tip="Loading Detailed Infos..." />
      )}
    </div>
  );
}

export default AppLeft;
