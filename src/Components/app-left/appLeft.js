import React, { useContext } from "react";
import HeaderContainer from "../headerContainer";
import InfoBoxContainer from "../infobox/infoBoxContainer";
import { UserContext } from "../Context/context";

function AppLeft() {
  const { countryInfo } = useContext(UserContext);
  return (
    <div>
      <HeaderContainer />
      {countryInfo && <InfoBoxContainer />}
    </div>
  );
}

export default AppLeft;
