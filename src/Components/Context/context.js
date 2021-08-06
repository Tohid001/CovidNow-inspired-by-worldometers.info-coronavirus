import React, { createContext, useReducer, useEffect } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = {
  country: "worldwide",
  countryInfo: null,
  countries: [],
  isDataLoaded: false,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "setCountry":
      return { ...state, country: value };
    case "setCountryInfo":
      return { ...state, countryInfo: value };
    case "setCountries":
      return { ...state, countries: value };
    case "dataLoad":
      return { ...state, isDataLoaded: value };

    default:
      return state;
  }
};

function UserProvider(props) {
  const [data, dispatch] = useReducer(reducer, initialState);
  const { country, countryInfo, countries, isDataLoaded } = data;

  //get all countries
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
              id: country.countryInfo._id,
              flag: country.countryInfo.flag,
            };
          });
          dispatch({ type: "setCountries", value: countries });
        });
    };
    getCountries();
  }, []);

  //get CountryInfos
  useEffect(() => {
    const getCountryInfos = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${country}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "setCountryInfo", value: data });
        });
      const countryName =
        country !== "worldwide"
          ? new Intl.DisplayNames(["en"], { type: "region" }).of(country)
          : "worldwide";
      document.title = `${countryName} stat`;

      dispatch({ type: "dataLoad", value: true });
    };
    getCountryInfos();
  }, [country, dispatch]);

  return (
    <Provider
      value={{
        ...data,
        dispatch,
      }}
    >
      {props.children}
    </Provider>
  );
}
export { UserProvider, Consumer as UserConsumer, Context as UserContext };
