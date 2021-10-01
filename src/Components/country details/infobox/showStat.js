import React, { useContext } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import StatCardModule from "./StatCardModule";

function ShowStat({ titles }) {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  const { totalCases, totalRecovered, totalDeaths, totalActiveCases } =
    isDataLoaded ? titles : {};

  return (
    <div>
      <Row gutter={5}>
        <Col span={24}>
          <Row justify="center">
            <Col span={20}>
              <StatCardModule
                title={isDataLoaded ? totalCases : null}
                data1={isDataLoaded ? info.today.cases : null}
                data2={isDataLoaded ? info.yesterday.cases : null}
              />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <StatCardModule
            title={isDataLoaded ? totalRecovered : null}
            data1={isDataLoaded ? info.today.recovered : null}
            data2={isDataLoaded ? info.yesterday.recovered : null}
            color=" rgb(52, 186, 113)"
            divider={true}
          />
        </Col>
        <Col span={8}>
          <StatCardModule
            title={isDataLoaded ? totalDeaths : null}
            data1={isDataLoaded ? info.today.deaths : null}
            data2={isDataLoaded ? info.yesterday.deaths : null}
            color="rgb(204, 80, 80)"
            divider={true}
          />
        </Col>
        <Col span={8}>
          <StatCardModule
            title={isDataLoaded ? totalActiveCases : null}
            data1={isDataLoaded ? info.today.active : null}
            data2={isDataLoaded ? info.yesterday.active : null}
            color="rgb(107, 110, 108)"
          />
        </Col>
      </Row>
    </div>
  );
}

export default ShowStat;
