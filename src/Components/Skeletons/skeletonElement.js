import React from "react";
import "./skeleton.css";

function SkeletonElement({ type, url, width }) {
  return !url ? (
    <div
      className={`skeleton ${!width ? type : null}`}
      style={{ width: width || null }}
    ></div>
  ) : (
    <img src={url} className={`skeleton ${type}`} />
  );
}

export default SkeletonElement;
