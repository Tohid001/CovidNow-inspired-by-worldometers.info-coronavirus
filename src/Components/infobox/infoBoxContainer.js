import React, { useContext } from "react";
import { UserContext } from "../Context/context";
import InfoBox from "./infobox";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

function InfoBoxContainer() {
  const { countryInfo } = useContext(UserContext);
  return (
    <Row justify="center" gutter={20}>
      <Col>
        <InfoBox
          title="Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
      </Col>
      <Col>
        <InfoBox
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
      </Col>
      <Col>
        <InfoBox
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </Col>
    </Row>
  );
}

export default InfoBoxContainer;
