import React from "react";
import "./skeleton.css";

function SkeletonElement({ type, url }) {
  return !url ? (
    <div className={`skeleton ${type}`}></div>
  ) : (
    <img src={url} className={`skeleton ${type}`} />
  );
}

export default SkeletonElement;
