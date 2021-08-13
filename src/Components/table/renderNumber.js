import "antd/dist/antd.css";
import { Typography, Statistic } from "antd";

export const render = (number, record, index) => {
  return <Statistic value={number} />;
};
