// import React, { useState } from "react";
// import { Button } from "antd";

// function MyButton({ type, continent, clickHandler }) {
//   //   const [isDisabled, setDisabled] = useState(false);
//   console.log("button rendering");
//   return (
//     <Button
//       type="primary"
//       shape="round"
//       //   disabled={isDisabled}
//       onClick={(e) => {
//         // setDisabled(true);
//         console.log(continent);
//         clickHandler(continent);
//       }}
//     >
//       {continent}
//     </Button>
//   );
// }

// export default MyButton;

import React, { useState } from "react";
import { Radio } from "antd";

function MyButton({ continents, clickHandler }) {
  const [value, setValue] = useState("All");
  console.log("button rendering");

  const options = continents.map((value) => {
    // console.log(value);
    return { label: value, value: value };
  });
  return (
    <Radio.Group
      value={value}
      optionType="button"
      buttonStyle="solid"
      options={options}
      onChange={(e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        clickHandler(e.target.value);
      }}
    ></Radio.Group>
  );
}

export default React.memo(MyButton);
