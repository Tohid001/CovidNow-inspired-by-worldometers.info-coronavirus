import "antd/dist/antd.css";
import { Typography, Statistic } from "antd";

export const render = (number, record, index) => {
  return (
    <div style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
      <Statistic
        value={number !== 0 && !number ? " " : number}
        valueStyle={{
          fontWeight: "normal",
          fontSize: "initial",
          // wordWrap: "break-word",
          // wordBreak: "break-word",
        }}
      />
    </div>
  );
};
// style={{ wordWrap: "break-word", wordBreak: "break-word" }}
