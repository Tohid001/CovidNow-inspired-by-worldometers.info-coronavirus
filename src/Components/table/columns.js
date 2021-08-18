import { render } from "./renderNumber";

export const Columns = (page) => {
  return [
    {
      title: "#",
      dataIndex: "sr no.",
      key: "sr no.",
      render: (value, item, index) => (page - 1) * 20 + index + 1,
      fixed: "left",
    },
    {
      title: " Country",
      dataIndex: "country",
      key: "country",
      fixed: "left",
      // width: "100%",
    },
    { title: "Total Cases", dataIndex: "cases", key: "cases", render },
    { title: "New Cases", dataIndex: "todayCases", key: "todayCases", render },
    { title: "Total Deaths", dataIndex: "deaths", key: "deaths", render },
    {
      title: "New Deaths",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
      render,
    },
    {
      title: "Total Recovered",
      dataIndex: "recovered",
      key: "recovered",
      render,
    },
    {
      title: "New Recovered",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
      render,
    },
    { title: "Active Cases", dataIndex: "active", key: "active", render },
    {
      title: "Serious Critical",
      dataIndex: "critical",
      key: "critical",
      render,
    },
    {
      title: "Tot Cases/1M Pop",
      dataIndex: "casesPerOneMillion",
      key: "casesPerOneMillion",
      render,
    },
    {
      title: "Deaths/1M Pop",
      dataIndex: "deathsPerOneMillion",
      key: "deathsPerOneMillion",
      render,
    },
    { title: "Total Tests", dataIndex: "tests", key: "tests", render },
    {
      title: "tests/1M Pop",
      dataIndex: "testsPerOneMillion",
      key: "testsPerOneMillion",
      render,
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      render,
    },
  ];
};

// export const columns =
