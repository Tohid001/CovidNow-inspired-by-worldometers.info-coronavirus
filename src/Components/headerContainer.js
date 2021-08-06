import React, { useEffect, useRef, useContext } from "react";
import { UserContext } from "./Context/context";
import "antd/dist/antd.css";
import { Typography, Row, Col, Select, Avatar, Skeleton } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

function HeaderContainer() {
  const { isDataLoaded, country, countryInfo, countries, dispatch } =
    useContext(UserContext);

  const selectRef = useRef(null);

  return (
    <>
      <div>
        <Row justify="space-between">
          <Col>
            <Title
              level={3}
              style={{
                textAlign: "center",
                verticalAlign: "center",
                margin: "0px",
              }}
            >
              Covid 19 tracker
            </Title>
          </Col>
          <Col>
            {/* <Skeleton
              loading={!isDataLoaded}
              active
              // size="default"
              // shape="circle"
            >
              <Avatar
                src={`${
                  country === "worldwide"
                    ? "https://www.kindpng.com/picc/m/300-3004852_education-globe-earth-vector-globe-icon-hd-png.png"
                    : countries.flag
                }`}
              />
            </Skeleton> */}
            <Select
              showSearch
              placeholder="search to select a country"
              style={{ width: "200px", margin: "0px" }}
              // filterOption={(input, option) =>
              //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              // }
              value={country}
              size="medium"
              onChange={(value) => {
                console.log(value);
                dispatch({ type: "setCountry", value: value });
              }}
              ref={selectRef}
              onSelect={() => {
                selectRef.current.blur();
                dispatch({ type: "dataLoad", value: false });
              }}
              optionLabelProp="label"
              optionFilterProp="label"
            >
              <Option value="worldwide" title="hello" label="worldwide">
                Worldwide
              </Option>
              {countries.map((country) => (
                <Option
                  key={country.id}
                  value={country.value}
                  label={` ${country.value} ${country.name}`}
                >
                  <div>
                    <Avatar src={country.flag} />
                    {` ${country.name}`}
                  </div>
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HeaderContainer;
