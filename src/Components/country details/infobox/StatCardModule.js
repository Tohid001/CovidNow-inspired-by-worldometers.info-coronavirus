import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "./infoBox.css";
import "antd/dist/antd.css";
import { Typography, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import SkeletonElement from "../../Skeletons/skeletonElement";

const { Title } = Typography;

function StatCardModule({ title, data1, data2, color, divider }) {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;
  return !isDataLoaded ? (
    <div className="content">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
    </div>
  ) : (
    <div className="content">
      <p
        style={{
          color,
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        {Intl.NumberFormat("en-US").format(data1)}
      </p>
      <p
        style={{
          fontSize: 14,
          fontWeight: 400,
          marginBottom: "-1px",
          textAlign: "center",
          marginTop: "-17px",
          // wordBreak: "break-all",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default StatCardModule;
