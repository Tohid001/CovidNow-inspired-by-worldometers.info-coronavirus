import { render } from "./renderNumber";
import Title from "./titleComponent";

export const Columns = (page) => {
  return [
    // {
    //   title: <Title value="#" />,
    //   dataIndex: "sr no.",
    //   key: "sr no.",
    //   render: (value, item, index) => (
    //     <div style={{ margin: "auto -30px" }}>
    //       <small>{index ? index : null}</small>
    //     </div>
    //   ),
    //   fixed: "left",
    //   align: "center",
    //   // width: 20,
    // },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: 107.071,
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
      // fixed: "left",
      // align: "center",
      // width: "100%",
    },
    {
      title: "Total Cases",
      dataIndex: "cases",
      key: "cases",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "New Cases",
      dataIndex: "todayCases",
      key: "todayCases",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Total Deaths",
      dataIndex: "deaths",
      key: "deaths",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "New Deaths",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Total Recovered",
      dataIndex: "recovered",
      key: "recovered",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "New Recovered",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Active Cases",
      dataIndex: "active",
      key: "active",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Serious Critical",
      dataIndex: "critical",
      key: "critical",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Tot Cases/1M Pop",
      dataIndex: "casesPerOneMillion",
      key: "casesPerOneMillion",
      // render,
      // align: "center",
      width: 107.071,
    },
    {
      title: "Deaths/ 1M Pop",
      dataIndex: "deathsPerOneMillion",
      key: "deathsPerOneMillion",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Total Tests",
      dataIndex: "tests",
      key: "tests",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "tests/1M Pop",
      dataIndex: "testsPerOneMillion",
      key: "testsPerOneMillion",
      width: 107.071,
      // render,
      // align: "center",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      width: 107.071,
      // render,
      // align: "center",
    },
  ];
};
