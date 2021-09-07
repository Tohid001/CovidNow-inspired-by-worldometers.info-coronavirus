import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function InputBox({ searchFilter }) {
  const [inputValue, setinputValue] = useState(null);

  const debouncFunc = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const onChangeHandler = async (e) => {
    await setinputValue(e.target.value);
    debouncFunc(searchFilter, 300)(inputValue);
  };

  return (
    <Input
      placeholder="filter by country..."
      prefix={<SearchOutlined />}
      value={inputValue}
      onChange={(e) => {
        onChangeHandler(e);
      }}
    />
  );
}

export default InputBox;
