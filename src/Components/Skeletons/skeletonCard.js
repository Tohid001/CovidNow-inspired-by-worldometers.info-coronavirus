import React from "react";
import "antd/dist/antd.css";
import { Card, Space } from "antd";
import SkeletonElement from "./skeletonElement";

function SkeletonCard() {
  return (
    <div>
      <Card
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SkeletonElement type="title" />
          </div>
        }
      >
        <div style={{ display: " flex", flexDirection: "column" }}>
          <div
            style={{
              // border: "1px solid red",
              marginBottom: "15px",
              width: " 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
          </div>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SkeletonCard;
