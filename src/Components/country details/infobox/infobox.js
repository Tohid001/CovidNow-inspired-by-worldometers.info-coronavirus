import React, { useContext } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "./infoBox.css";
import "antd/dist/antd.css";
import { Card, Typography, Statistic } from "antd";
import SkeletonElement from "../../Skeletons/skeletonElement";

const { Title } = Typography;

function Infobox({ title, cases, total }) {
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
        bodyStyle={{ padding: "0px" }}
        style={{
          // border: ".5px solid white",
          borderRadius: "10px",
          backgroundColor: isDataLoaded
            ? title == "Cases"
              ? "rgb(138, 182, 235)"
              : title == "Recovered"
              ? "rgb(140, 230, 180"
              : "rgb(237, 180, 180)"
            : null,

          // backgroundColor: "red",
        }}
        bordered={isDataLoaded ? false : true}
        title={
          <div className="cardTitle">
            {!isDataLoaded ? (
              <SkeletonElement type="title" />
            ) : (
              <Title level={5}>{` ${title}:`}</Title>
            )}
          </div>
        }
      >
        <div className="content-container">
          <div className="content c-1">
            {!isDataLoaded ? (
              <SkeletonElement type="title" />
            ) : (
              <Title level={5} style={{ fontSize: 15, marginBottom: "-3px" }}>
                Today
              </Title>
            )}
            {!isDataLoaded ? (
              <SkeletonElement type="text" />
            ) : (
              <Statistic
                value={cases}
                valueStyle={{ fontWeight: "normal", fontSize: 15 }}
              />
            )}
          </div>
          <div className="content c-2">
            {!isDataLoaded ? (
              <SkeletonElement type="title" />
            ) : (
              <div>
                <Title level={5} style={{ fontSize: 15, marginBottom: "-3px" }}>
                  Total
                </Title>
              </div>
            )}
            {!isDataLoaded ? (
              <SkeletonElement type="text" />
            ) : (
              <Statistic
                value={total}
                valueStyle={{ fontWeight: "normal", fontSize: 15 }}
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Infobox;
