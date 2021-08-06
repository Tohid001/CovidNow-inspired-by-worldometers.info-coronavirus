import React, { useContext } from "react";
import InfoBoxTitle from "./infoBoxTitle";
import { UserContext } from "../Context/context";
import "antd/dist/antd.css";
import { Skeleton, Card, Typography, Statistic } from "antd";

function Infobox({ title, cases, total }) {
  const { isDataLoaded } = useContext(UserContext);
  return (
    <Card title={<InfoBoxTitle content={title} />} hoverable>
      <Skeleton loading={!isDataLoaded} active>
        <Statistic title="Today" value={cases} />
        <Statistic title="Total" value={total} />
      </Skeleton>
    </Card>
  );
}

export default Infobox;
