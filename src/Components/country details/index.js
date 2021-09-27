import React, { useEffect, useContext } from "react";

import { UserProvider } from "../Context/Infobox/context";
import { useParams } from "react-router-dom";
import CountryDetails from "./countryDetails";

function Index() {
  const { countryName } = useParams();

  return (
    <UserProvider>
      <CountryDetails country={countryName} />
    </UserProvider>
  );
}

export default Index;
