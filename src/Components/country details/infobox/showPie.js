import React, { useContext } from "react";
import { UserContext } from "../../Context/Infobox/context";

import { Pie, Line } from "react-chartjs-2";
import { Tooltip } from "antd";

function ShowPie() {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  const data = isDataLoaded
    ? [info.today.recovered, info.today.deaths, info.today.active]
    : null;

  return (
    <div>
      <Pie
        options={{ legend: { position: "bottom" } }}
        data={{
          labels: [
            "Recovered/Discharged",
            "Total Deaths",
            "Currently infected",
          ],
          datasets: [
            {
              data,
              backgroundColor: [
                " rgb(52, 186, 113)",
                "rgb(204, 80, 80)",
                "rgb(125, 130, 127)",
              ],
              hoverBorderWidth: [4, 4, 4],
              hoverBorderColor: [
                " rgb(38, 36, 36)",
                "rgb(38, 36, 36)",
                "rgb(38, 36, 36)",
              ],
            },
          ],
        }}
        options={{ tooltip: { enabled: true } }}
      />
    </div>
  );
}

export default ShowPie;
