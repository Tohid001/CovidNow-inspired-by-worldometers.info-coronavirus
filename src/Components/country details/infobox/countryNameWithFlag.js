import React, { useContext } from "react";
import { UserContext } from "../../Context/Infobox/context";
import "antd/dist/antd.css";
import { Space, Typography } from "antd";
import SkeletonElement from "../../Skeletons/skeletonElement";

const { Title } = Typography;

function CountryNameWithFlag({ country: myCountry }) {
  const { initial, country } = useContext(UserContext);
  const { isDataLoaded, countryInfo: info } = initial;

  return (
    <div>
      <Space align="center" size={20}>
        <SkeletonElement
          type="avatar"
          url={isDataLoaded ? info.today.countryInfo.flag : null}
        />
        {!isDataLoaded ? (
          <SkeletonElement type="title" />
        ) : (
          <Title level={3}>{country}</Title>
        )}
      </Space>
    </div>
  );
}

export default CountryNameWithFlag;
