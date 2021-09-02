import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import "./table.css";
import { FixedSizeGrid as Grid } from "react-window";
// import ResizeObserver from "rc-resize-observer";
import classNames from "classnames";
import { Table, Statistic } from "antd";

export default function VirtualTable(props) {
  const { columns, scroll } = props;
  // const [tableWidth, setTableWidth] = useState(0);
  // const widthColumnCount = columns.filter(({ width }) => !width).length;
  // const mergedColumns = columns.map((column) => {
  //   // if (column.width) {
  //   //   return column;
  //   // }

  //   return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  // });
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });

  // const resetVirtualGrid = () => {
  //   gridRef.current.resetAfterIndices({
  //     columnIndex: 0,
  //     shouldForceUpdate: true,
  //   });
  // };

  // useEffect(() => resetVirtualGrid, []);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={columns.length}
        columnWidth={107.071}
        // columnWidth={()=>200}
        height={400}
        rowCount={rawData.length}
        rowHeight={70}
        width={1499}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const data = rawData[rowIndex][columns[columnIndex].dataIndex];
          return (
            // <div
            //   className={classNames("virtual-table-cell", {
            //     "virtual-table-cell-last":
            //       columnIndex === mergedColumns.length - 1,
            //   })}
            //   style={style}
            // >
            //   {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
            // </div>

            typeof data === "string" ? (
              <div
                style={{
                  ...style,
                  backgroundColor:
                    rowIndex === 0 ? " rgb(240, 239, 235)" : null,
                  display: "flex",
                  border: "1px solid rgb(201, 199, 193)",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data}
              </div>
            ) : (
              <div
                style={{
                  ...style,
                  border: "1px solid rgb(201, 199, 193)",
                  backgroundColor:
                    rowIndex === 0 ? " rgb(240, 239, 235)" : null,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // wordWrap: "break-word",
                  // wordBreak: "break-word",
                }}
              >
                <Statistic
                  value={data !== 0 && !data ? undefined : data}
                  valueStyle={{
                    fontWeight: "normal",
                    fontSize: "initial",
                    // wordWrap: "break-word",
                    // wordBreak: "break-word",
                  }}
                />
              </div>
            )
          );
        }}
      </Grid>
    );
  };

  return (
    <div style={{ border: "1px solid rgb(201, 199, 193)", width: "1499px" }}>
      <Table
        {...props}
        className="virtual-table"
        columns={columns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </div>
  );
} // Usage
