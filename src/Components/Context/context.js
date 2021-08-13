import React, { createContext, useReducer, useEffect } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = {
  country: "worldwide",
  countryInfo: null,
  countries: [],
  isDataLoaded: false,
  isContinent: false,
  countriesForTable: null,
  isCountriesForTableLoaded: false,
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
    case "setContinent":
      return { ...state, isContinent: value };
    case "setCountriesForTable":
      return { ...state, countriesForTable: value };
    case "tableLoad":
      return { ...state, isCountriesForTableLoaded: value };

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
      await fetch(
        " https://covid-proxy.herokuapp.com/https://disease.sh/v3/covid-19/countries"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("countries");
          console.log(data);
          const countries = data.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
              id: country.countryInfo._id,
              flag: country.countryInfo.flag,
            };
          });
          const countriesForTable = data;
          dispatch({ type: "setCountries", value: countries });
          dispatch({ type: "setCountriesForTable", value: countriesForTable });
        });
    };
    getCountries();
  }, []);

  //get CountryInfos
  useEffect(() => {
    const getCountryInfos = async () => {
      const url =
        country === "worldwide"
          ? " https://covid-proxy.herokuapp.com/https://disease.sh/v3/covid-19/all"
          : ` https://covid-proxy.herokuapp.com/https://disease.sh/v3/covid-19/countries/${country}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("countryinfos ");
          console.log(data);
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
