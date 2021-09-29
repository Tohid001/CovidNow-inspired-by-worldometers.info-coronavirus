import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "./infoBox.css";
import "antd/dist/antd.css";
import { Card, Typography, Statistic, Row, Col } from "antd";
import StatCardModule from "./StatCardModule";
import SkeletonElement from "../../Skeletons/skeletonElement";

const { Title } = Typography;

function StatCard({ title, cases, total }) {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;
  return (
    <div>
      <Card
        headStyle={{
          padding: "0px",
          // margin: "-15px  0 0 0",
          borderStyle: "none",
        }}
        bodyStyle={{ padding: "8px 0 2px 0" }}
        style={{
          borderRadius: "10px",
          backgroundColor: isDataLoaded ? "rgb(242, 243, 247)" : null,
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
        <div>
          <Row gutter={5}>
            <Col span={24}>
              <Row justify="center">
                <Col>
                  <StatCardModule
                    title="Total Cases"
                    data1={isDataLoaded ? info.today.cases : null}
                    data2={isDataLoaded ? info.yesterday.cases : null}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <StatCardModule
                title="Total Recovered / Discharged"
                data1={isDataLoaded ? info.today.recovered : null}
                data2={isDataLoaded ? info.yesterday.recovered : null}
                color=" rgb(52, 186, 113)"
                divider={true}
              />
            </Col>
            <Col span={8}>
              <StatCardModule
                title="Total Deaths"
                data1={isDataLoaded ? info.today.deaths : null}
                data2={isDataLoaded ? info.yesterday.deaths : null}
                color="rgb(204, 80, 80)"
                divider={true}
              />
            </Col>
            <Col span={8}>
              <StatCardModule
                title="Active Cases/ Currently Infected
                "
                data1={isDataLoaded ? info.today.active : null}
                data2={isDataLoaded ? info.yesterday.active : null}
                color="rgb(125, 130, 127)"
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default StatCard;
