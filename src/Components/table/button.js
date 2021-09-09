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

// import React, { useState } from "react";
// import { Radio } from "antd";

// function MyButton({ continents, clickHandler }) {
//   const [value, setValue] = useState("All");
//   console.log("button rendering");

//   const options = continents.map((value) => {
//     // console.log(value);
//     return { label: value, value: value };
//   });
//   return (
//     <Radio.Group
//       value={value}
//       optionType="button"
//       buttonStyle="solid"
//       options={options}
//       onChange={(e) => {
//         console.log(e.target.value);
//         setValue(e.target.value);
//         clickHandler(e.target.value);
//       }}
//     ></Radio.Group>
//   );
// }

// export default React.memo(MyButton);

import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";
import { FilterFilled } from "@ant-design/icons";
import { UserContext } from "../Context/context";

function MyButton({ setContinent, filterCriterias }) {
  const { countriesForTable } = useContext(UserContext);
  console.log("buttons rendering");

  const originalContinents = [
    ...new Set(
      countriesForTable.map((value) => {
        return value.continent;
      })
    ),
  ];
  const continents = [
    "All",
    ...originalContinents.filter((value) => {
      return value || null;
    }),
  ];

  const menu = (
    <Menu
      onClick={({ key }) => {
        setContinent({ ...filterCriterias, continent: key, isFiltered: true });
      }}
      selectable
    >
      {continents.map((value) => (
        <Menu.Item key={value}>{value}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} arrow placement="topRight">
      <Button size="small">
        <FilterFilled />
        Button
      </Button>
    </Dropdown>
  );
}

export default React.memo(MyButton);
