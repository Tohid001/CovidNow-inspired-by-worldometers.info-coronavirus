import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

import "./chart.css";

import ChartModule from "./ChartModule";
import { Pie, Line, Doughnut } from "react-chartjs-2";

function Chart() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const checkScreenWidth = () => {
    // [1516, 366, 768, 1516].includes(window.innerWidth) &&
    setScreenWidth(window.innerWidth);
    // console.log(screenWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  const title1 = "1";
  const title2 = "2";

  const labels1 = ["Tested negative", "Total cases"];
  const labels2 = [
    "Recovered/Discharged",
    "Total Deaths",
    "Currently infected",
  ];

  const bgColor1 = [" rgb(209, 138, 6)", "rgb(138, 182, 235)"];
  const bgColor2 = [
    " rgb(52, 186, 113)",
    "rgb(204, 80, 80)",
    "rgb(125, 130, 127)",
  ];

  const data1 = isDataLoaded
    ? [info.today.population - info.today.cases, info.today.cases]
    : null;
  const data2 = isDataLoaded
    ? [info.today.recovered, info.today.deaths, info.today.active]
    : null;

  return (
    <div
      style={{ borderRadius: "5px", backgroundColor: " rgb(255, 255, 255)" }}
    >
      <Row justify="center" gutter={[0, 0]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 10 }}
          xl={{ span: 9 }}
        >
          <ChartModule
            data={data1}
            bgColor={bgColor1}
            title={title1}
            labels={labels1}
            // radius={60}
            width="100%"
            height={screenWidth >= 1516 ? "27vh" : "26vh"}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 10 }}
          xl={{ span: 9 }}
        >
          <ChartModule
            data={data2}
            bgColor={bgColor2}
            title={title2}
            labels={labels2}
            // radius={60}
            width="100%"
            // height={
            //   window.innerWidth >= 768 || window.innerWidth <= 1142
            //     ? "27vh"
            //     : "25vh"
            // }
            height={
              screenWidth <= 366
                ? "29vh"
                : screenWidth > 366 && screenWidth < 768
                ? "26vh"
                : screenWidth > 768 && screenWidth < 1516
                ? "28vh"
                : "27vh"
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default Chart;

// ? "29vh"
// : screenWidth > 366 || screenWidth < 768
// ? "26vh"
// : "2vh"
