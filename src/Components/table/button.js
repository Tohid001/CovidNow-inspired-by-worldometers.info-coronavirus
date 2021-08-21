import React, { useState } from "react";
import { Button } from "antd";

function MyButton({ type, continent, clickHandler }) {
  //   const [isDisabled, setDisabled] = useState(false);
  console.log("button rendering");
  return (
    <Button
      type="primary"
      shape="round"
      //   disabled={isDisabled}
      onClick={(e) => {
        // setDisabled(true);
        console.log(continent);
        clickHandler(continent);
      }}
    >
      {continent}
    </Button>
  );
}

export default MyButton;
