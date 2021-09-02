import React, { useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import "./table.css";
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import classNames from "classnames";
import { Table, Statistic } from "antd";

export default function VirtualTable(props) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }) => !width).length;
  const mergedColumns = columns.map((column) => {
    // if (column.width) {
    //   return column;
    // }

    return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  });
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

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        // columnWidth={()=>200}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 50}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const data = rawData[rowIndex][mergedColumns[columnIndex].dataIndex];
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
                  display: "flex",
                  border: "1px solid rgb(201, 199, 193)",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                {data}
              </div>
            ) : (
              <div
                style={{
                  ...style,
                  border: "1px solid rgb(201, 199, 193)",
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  // wordWrap: "break-word",
                  // wordBreak: "break-word",
                }}
              >
                <Statistic
                  value={data !== 0 && !data ? " " : data}
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
    <div>
      <ResizeObserver
        onResize={({ width }) => {
          console.log(`tableWidth is ${width}`);
          setTableWidth(width);
        }}
      >
        <Table
          {...props}
          bordered
          className="virtual-table"
          columns={mergedColumns}
          pagination={false}
          components={{
            body: renderVirtualList,
          }}
        />
      </ResizeObserver>
    </div>
  );
} // Usage
