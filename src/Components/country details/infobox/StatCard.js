import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "./infoBox.css";
import "antd/dist/antd.css";
import { Card, Typography, Row, Col } from "antd";

import SkeletonElement from "../../Skeletons/skeletonElement";
import GraphSwitch from "./switch";
import ShowStat from "./showStat";
import ShowPie from "./showPie";

const { Title } = Typography;

function StatCard() {
  const [showGraph, setShowGraph] = useState(false);

  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  const titles = isDataLoaded
    ? {
        totalCases: `Total Cases (${(
          (info.today.cases / info.today.population) *
          100
        ).toFixed(2)}% of the population)`,
        totalRecovered: `Total Recovered / Discharged (${(
          (info.today.recovered / info.today.cases) *
          100
        ).toFixed(2)}%)`,
        totalDeaths: `Total Deaths (${(
          (info.today.deaths / info.today.cases) *
          100
        ).toFixed(2)}%)`,
        totalActiveCases: `Active Cases/ Currently Infected (${(
          (info.today.active / info.today.cases) *
          100
        ).toFixed(2)}%)`,
      }
    : null;

  return (
    <div>
      <Card
        headStyle={{
          padding: "0px",
          // margin: "-15px  0 0 0",
          borderStyle: "none",
        }}
        bodyStyle={{ padding: "0px 3px 2px 3px" }}
        style={{
          borderRadius: "10px",
          backgroundColor: isDataLoaded ? "rgb(232, 233, 237)" : null,
        }}
        bordered={isDataLoaded ? false : true}
        title={
          <div className="cardTitle">
            {!isDataLoaded ? (
              <SkeletonElement type="title" />
            ) : (
              <Title level={5}>Quick Stat</Title>
            )}
          </div>
        }
      >
        <GraphSwitch showGraphHandler={setShowGraph} />
        {showGraph ? <ShowPie /> : <ShowStat titles={titles} />}
      </Card>
    </div>
  );
}

export default StatCard;
