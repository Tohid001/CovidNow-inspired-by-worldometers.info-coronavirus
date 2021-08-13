import React from "react";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Spinner({ tip }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        height: "220px",
      }}
    >
      <Spin
        tip={tip}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    </div>
  );
}

export default Spinner;
