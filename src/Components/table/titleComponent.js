import React from "react";

function TitleComponent({ value }) {
  return (
    <div
      style={{
        // margin: "auto -15px",
        wordWrap: "normal",
        wordBreak: "normal",
        width: "100px",
      }}
    >
      {value}
    </div>
  );
}

export default TitleComponent;
