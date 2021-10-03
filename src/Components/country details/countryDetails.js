import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { UserContext } from "../Context/Infobox/context";
import "antd/dist/antd.css";
import { Typography, Row, Col, Select, Avatar, Skeleton } from "antd";

import CountryNameWithFlag from "./infobox/countryNameWithFlag";
import InfoBox from "./infobox/infobox";
import StatCard from "./infobox/StatCard";

function CuntryDetails({ country }) {
  /////////////////////////

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
    <div style={{ padding: "5px" }}>
      {/* <Row gutter0={[16, 24]}>
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
              <Row justify="center" gutter={[{ xs: 7, sm: 7, md: 20 }, 10]}>
                <Col xs={{ span: 8 }} sm={{ span: 5 }} md={{ span: 5 }}>
                  <InfoBox
                    title="Cases"
                    cases={isDataLoaded ? info.today.todayCases : null}
                    total={isDataLoaded ? info.today.cases : null}
                  />
                </Col>
                <Col xs={{ span: 8 }} sm={{ span: 5 }} md={{ span: 5 }}>
                  <InfoBox
                    title="Recovered"
                    cases={isDataLoaded ? info.today.todayRecovered : null}
                    total={isDataLoaded ? info.today.recovered : null}
                  />
                </Col>
                <Col xs={{ span: 8 }} sm={{ span: 5 }} md={{ span: 5 }}>
                  <InfoBox
                    title="Deaths"
                    cases={isDataLoaded ? info.today.todayDeaths : null}
                    total={isDataLoaded ? info.today.deaths : null}
                  />
                </Col>
                <Col span={24}>
                  <Row justify="center">
                    <Col xs={{ span: 24 }} sm={{ span: 15 }} md={{ span: 15 }}>
                      <StatCard />
                    </Col>
                  </Row>
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
