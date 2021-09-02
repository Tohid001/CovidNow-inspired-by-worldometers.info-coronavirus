import { render } from "./renderNumber";
import Title from "./titleComponent";

export const Columns = (page) => {
  const columnWidth = 1499 / 14;
  return [
    {
      title: "#",
      dataIndex: "oneCasePerPeople",
      key: "oneCasePerPeople",
      // render: (value, item, index) => (
      //   <div style={{ margin: "auto -30px" }}>
      //     <small>{index ? index : null}</small>
      //   </div>
      // ),
      // fixed: "left",
      // align: "center",
      width: 40,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: columnWidth,
      // render: (value, item, index) => (
      //   <div
      //     style={{
      //       margin: "auto -15px",
      //       wordWrap: "break-word",
      //       wordBreak: "break-word",
      //       width: "100px",
      //     }}
      //   >
      //     {value}
      //   </div>
      // ),
      fixed: "left",
      // align: "center",
      // width: "100%",
    },
    {
      title: "Total Cases",
      dataIndex: "cases",
      key: "cases",
      width: columnWidth,
      sorter: (a, b) => a.cases - b.cases,
      // render,
      // align: "center",
    },
    {
      title: "New Cases",
      dataIndex: "todayCases",
      key: "todayCases",
      width: columnWidth,
      sorter: (a, b) => a.todayCases - b.todayCases,
      // render,
      // align: "center",
    },
    {
      title: "Total Deaths",
      dataIndex: "deaths",
      key: "deaths",
      width: columnWidth,
      sorter: (a, b) => a.deaths - b.deaths,
      // render,
      // align: "center",
    },
    {
      title: "New Deaths",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
      width: columnWidth,
      sorter: (a, b) => a.todayDeaths - b.todayDeaths,
      // render,
      // align: "center",
    },
    {
      title: "Total Recovered",
      dataIndex: "recovered",
      key: "recovered",
      width: columnWidth,
      sorter: (a, b) => a.recovered - b.recovered,
      // render,
      // align: "center",
    },
    {
      title: "New Recovered",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
      width: columnWidth,
      sorter: (a, b) => a.todayRecovered - b.todayRecovered,
      // render,
      // align: "center",
    },
    {
      title: "Active Cases",
      dataIndex: "active",
      key: "active",
      width: columnWidth,
      sorter: (a, b) => a.active - b.active,
      // render,
      // align: "center",
    },
    {
      title: "Serious Critical",
      dataIndex: "critical",
      key: "critical",
      width: columnWidth,
      sorter: (a, b) => a.critical - b.critical,
      // render,
      // align: "center",
    },
    {
      title: "Tot Cases/1M Pop",
      dataIndex: "casesPerOneMillion",
      key: "casesPerOneMillion",
      sorter: (a, b) => a.casesPerOneMillion - b.casesPerOneMillion,
      // render,
      // align: "center",
      width: columnWidth,
    },
    {
      title: "Deaths/ 1M Pop",
      dataIndex: "deathsPerOneMillion",
      key: "deathsPerOneMillion",
      width: columnWidth,
      sorter: (a, b) => a.deathsPerOneMillion - b.deathsPerOneMillion,
      // render,
      // align: "center",
    },
    {
      title: "Total Tests",
      dataIndex: "tests",
      key: "tests",
      width: columnWidth,
      sorter: (a, b) => a.tests - b.tests,
      // render,
      // align: "center",
    },
    {
      title: "tests/1M Pop",
      dataIndex: "testsPerOneMillion",
      key: "testsPerOneMillion",
      width: columnWidth,
      sorter: (a, b) => a.testsPerOneMillion - b.testsPerOneMillion,
      // render,
      // align: "center",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      width: columnWidth,
      sorter: (a, b) => a.population - b.population,
      // render,
      // align: "center",
    },
  ];
};
