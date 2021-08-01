import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Select } from "antd";
// import { useEffect, useState } from "react";

const { Title } = Typography;
const { Option } = Select;

function HeaderContainer() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [selection, setSelection] = useState(false);
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    const countryInfo = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/countries"
          : `https://disease.sh/v3/covid-19/countries/${country}`;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCountryInfo(data);
          console.log(countryInfo);
          setSelection(false);
        });
    };
    countryInfo();
  }, [selection]);

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
            };
          });
          setCountries(countries);
        });
    };
    getCountries();
  }, [countries]);

  return (
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
            style={{ width: 200, margin: "0px" }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            value={country || undefined}
            onChange={(value) => {
              console.log(value);
              setCountry(value);
              setSelection(true);
            }}
            placeholder="search to select"
          >
            <Option value="worlwide">Worldwide</Option>
            {countries.map((country) => (
              <Option key={country.id} value={country.value}>
                {country.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      ,
    </div>
  );
}

export default HeaderContainer;
