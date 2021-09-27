import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Infobox/context";
import "antd/dist/antd.css";
import { Typography, Row, Col, Select, Avatar, Skeleton } from "antd";

import CountryNameWithFlag from "./infobox/countryNameWithFlag";
import InfoBox from "./infobox/infobox";

function CuntryDetails({ country }) {
  // const [showGraph, setShowGraph] = useState(false);
  const { dispatch, initial } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  useEffect(() => {
    dispatch({ type: "setCountry", value: country });
  }, country);

  // const colSpan_1 = showGraph ? 24 : 12;
  // const colSpan_2 = showGraph ? 12 : 24;
  // const justifyContent = showGraph ? "center" : "start";
  const infoBoxSpan = { xs: 7, sm: 7, md: 7 };

  return (
    <div style={{ padding: "10px" }}>
      {/* <Row gutter={[16, 24]}>
        <Col span={24}>
          <Row justify="center">
            <Col>
              <CountryNameWithFlag />
            </Col>
          </Row>
        </Col>
        <Col span={colSpan_1}>
          <Row justify={justifyContent}>
            <Col span={colSpan_2}>
              <InfoBox
                title="Cases"
                cases={isDataLoaded ? info.todayCases : null}
                total={isDataLoaded ? info.cases : null}
              />
            </Col>
          </Row>
        </Col>
        <Col span={colSpan_1}>
          <Row justify={justifyContent}>
            <Col span={colSpan_2}>
              <InfoBox
                title="Recovered"
                cases={isDataLoaded ? info.todayRecovered : null}
                total={isDataLoaded ? info.recovered : null}
              />
            </Col>
          </Row>
        </Col>
        <Col span={colSpan_1}>
          <Row justify={justifyContent}>
            <Col span={colSpan_2}>
              <InfoBox
                title="Deaths"
                cases={isDataLoaded ? info.todayDeaths : null}
                total={isDataLoaded ? info.deaths : null}
              />
            </Col>
          </Row>
        </Col>
      </Row> */}
      <Row>
        <Col span={24}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Row justify="center">
                <Col>
                  <CountryNameWithFlag />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={{ xs: 7, md: 20 }}>
                <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 4 }}>
                  <InfoBox
                    title="Cases"
                    cases={isDataLoaded ? info.todayCases : null}
                    total={isDataLoaded ? info.cases : null}
                  />
                </Col>
                <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 4 }}>
                  <InfoBox
                    title="Recovered"
                    cases={isDataLoaded ? info.todayRecovered : null}
                    total={isDataLoaded ? info.recovered : null}
                  />
                </Col>
                <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 4 }}>
                  <InfoBox
                    title="Deaths"
                    cases={isDataLoaded ? info.todayDeaths : null}
                    total={isDataLoaded ? info.deaths : null}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </div>

    // <Row></Row>
  );
}

export default CuntryDetails;
