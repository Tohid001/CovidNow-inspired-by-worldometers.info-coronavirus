import React, { useState } from "react";
import { Button } from "antd";

function MyButton({ type, continent, clickHandler }) {
  //   const [isDisabled, setDisabled] = useState(false);
  return (
    <Button
      type="primary"
      shape="round"
      //   disabled={isDisabled}
      onclick={() => {
        // setDisabled(true);
        clickHandler(continent);
      }}
    >
      {continent}
    </Button>
  );
}

export default MyButton;
