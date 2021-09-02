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
      // render,
      // align: "center",
    },
    {
      title: "New Cases",
      dataIndex: "todayCases",
      key: "todayCases",
      // render,
      // align: "center",
    },
    {
      title: "Total Deaths",
      dataIndex: "deaths",
      key: "deaths",
      // render,
      // align: "center",
    },
    {
      title: "New Deaths",
      dataIndex: "todayDeaths",
      key: "todayDeaths",
      // render,
      // align: "center",
    },
    {
      title: "Total Recovered",
      dataIndex: "recovered",
      key: "recovered",
      // render,
      // align: "center",
    },
    {
      title: "New Recovered",
      dataIndex: "todayRecovered",
      key: "todayRecovered",
      // render,
      // align: "center",
    },
    {
      title: "Active Cases",
      dataIndex: "active",
      key: "active",
      // render,
      // align: "center",
    },
    {
      title: "Serious Critical",
      dataIndex: "critical",
      key: "critical",
      // render,
      // align: "center",
    },
    {
      title: "Tot Cases/1M Pop",
      dataIndex: "casesPerOneMillion",
      key: "casesPerOneMillion",
      // render,
      // align: "center",
    },
    {
      title: "Deaths/ 1M Pop",
      dataIndex: "deathsPerOneMillion",
      key: "deathsPerOneMillion",
      // render,
      // align: "center",
    },
    {
      title: "Total Tests",
      dataIndex: "tests",
      key: "tests",
      // render,
      // align: "center",
    },
    {
      title: "tests/1M Pop",
      dataIndex: "testsPerOneMillion",
      key: "testsPerOneMillion",
      // render,
      // align: "center",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      // render,
      // align: "center",
    },
  ];
};
