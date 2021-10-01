import React, { useRef, useContext } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "antd/dist/antd.css";
import { Card, Typography, Row, Col, Switch, Space } from "antd";

import SkeletonElement from "../../Skeletons/skeletonElement";

function GraphSwitch({ showGraphHandler }) {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  const switchRef = useRef(null);

  return !isDataLoaded ? (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <SkeletonElement type="switch" />
    </div>
  ) : (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "0px 5px 0px 4px",
          margin: "-8px 0px 10px 0px",
        }}
      >
        <Space align="center" size={4}>
          <Switch
            style={{ marginTop: "-4px" }}
            ref={switchRef}
            size="small"
            // checkedChildren={<small>Show stat</small>}
            // unCheckedChildren={<small>Show graph</small>}
            onChange={(checked) => {
              switchRef.current.blur();
              showGraphHandler(checked);
            }}
          />
          <small
            style={{
              display: "inline-block",
              fontWeight: "600",
              verticalAlign: "middle",
              marginTop: "-4px",
            }}
          >
            Show chart
          </small>
        </Space>
      </div>
    </div>
  );
}

export default GraphSwitch;
