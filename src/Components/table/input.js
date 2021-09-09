import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function InputBox({ setInputValue, filterCriterias }) {
  //   const [inputValue, setinputValue] = useState(null);

  // const debouncFunc = (func, timeout = 300) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this);
  //     }, timeout);
  //   };
  // };

  const onChangeHandler = (e) => {
    // debouncFunc(() => {
    //   setInputValue({
    //     ...filterCriterias,
    //     inputValue: e.target.value,
    //     isFiltered: true,
    //   });
    // }, 300)();
    setInputValue({
      ...filterCriterias,
      inputValue: e.target.value,
      isFiltered: true,
    });
  };

  return (
    <Input
      placeholder="filter by country..."
      prefix={<SearchOutlined />}
      value={filterCriterias.inputValue}
      onChange={(e) => {
        onChangeHandler(e);
      }}
    />
  );
}

export default React.memo(InputBox);
