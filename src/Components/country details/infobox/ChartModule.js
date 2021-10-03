import React from "react";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import "./chart.css";

function ShowPieModule({
  data,
  bgColor,
  labels,
  title,
  width,
  height,
  radius,
}) {
  return (
    <div
      style={{
        // display: "flex",
        // border: " 1px solid red",
        // borderRadius: "5px",
        position: "relative",
        // margin: " auto",
        height: height,
        width: width,
        // minWidth: "0px",
      }}
      className="chart-container"
    >
      <Doughnut
        // width={300}
        // height={200}
        options={{
          // radius: radius,
          maintainAspectRatio: false,
          animation: { animateScale: true, animateRotate: true },
          plugins: {
            // title: {
            //   position: "top",
            //   display: true,
            //   text: title,
            //   color: "black",
            //   font: { size: 14 },
            // },
            legend: {
              position: "bottom",
              align: "center",
              fullSize: false,
              labels: {
                boxWidth: 10,
                color: " black",
                font: { size: 12 },
                padding: 5,
                textAlign: "center",
              },
            },
          },
        }}
        data={{
          labels: labels,
          //   hoverBorderWidth: 10,
          //   hoverBorderColor: " rgb(38, 76, 36)",

          datasets: [
            {
              data: data,
              backgroundColor: bgColor,
              hoverBorderWidth: 1,
              hoverBorderColor: "rgb(38, 36, 36)",
              spacing: 0,
            },
          ],
        }}
      />
    </div>
  );
}

export default ShowPieModule;
