import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Select, Avatar } from "antd";
// import { useEffect, useState } from "react";

const { Title } = Typography;
const { Option } = Select;

function HeaderContainer() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);

  const selectRef = useRef(null);

  //for selection
  useEffect(() => {
    const countryInfos = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/countries"
          : `https://disease.sh/v3/covid-19/countries/${country}`;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCountryInfo(data);
        });

      document.title = `data from ${
        country !== "worldwide"
          ? <Avatar src={country.flag} /> +
            new Intl.DisplayNames(["en"], { type: "region" }).of(country)
          : "worldwide"
      }`;
      console.log(document.title);
    };
    country !== undefined && country && countryInfos();
  }, [country]);

  //for dropdown
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
              id: country.countryInfo._id,
              flag: country.countryInfo.flag,
            };
          });
          setCountries(countries);
        });
    };
    getCountries();
  }, [countries]);

  return (
    <>
      <div style={{ width: "700px", marginTop: "20px" }}>
        <Row
          style={{
            marginLeft: "25px",
          }}
          gutter={50}
        >
          <Col span={8}>
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
            <Select
              showSearch
              placeholder="search to select a country"
              style={{ width: "222px", margin: "0px" }}
              // filterOption={(input, option) =>
              //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              // }
              value={country || undefined}
              size="large"
              onChange={(value) => {
                console.log(value);
                setCountry(value);
              }}
              ref={selectRef}
              onSelect={() => {
                selectRef.current.blur();
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
      {countryInfo && <p> {JSON.stringify(countryInfo)}</p>}
    </>
  );
}

export default HeaderContainer;
