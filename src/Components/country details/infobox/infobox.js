import React, { useContext, useState, useEffect } from "react";
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
        // headStyle={{
        //   padding: "0px",
        //   // margin: "-15px  0 0 0",
        //   borderStyle: "none",
        // }}
        bodyStyle={{ padding: "8px 0 2px 0" }}
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
        // title={
        //   <div className="cardTitle">
        //     {!isDataLoaded ? (
        //       <SkeletonElement type="title" />
        //     ) : (
        //       <Title level={5}>{` Today ${title}:`}</Title>
        //     )}
        //   </div>
        // }
      >
        <div>
          <div className="content">
            {!isDataLoaded ? (
              <SkeletonElement type="title" />
            ) : (
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  marginBottom: "-1px",
                  textAlign: "center",
                  // wordBreak: "break-all",
                }}
              >
                {window.innerWidth > 370 ? (
                  `New ${title}`
                ) : (
                  <span>
                    New<br></br>
                    {`${title}`}
                  </span>
                )}
              </p>
            )}
            {!isDataLoaded ? (
              <SkeletonElement type="text" />
            ) : (
              <Statistic
                value={cases}
                valueStyle={{ fontWeight: "bold", fontSize: 15 }}
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Infobox;
