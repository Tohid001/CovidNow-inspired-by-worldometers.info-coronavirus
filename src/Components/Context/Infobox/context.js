import React, { createContext, useReducer, useEffect } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = {
  initial: { isDataLoaded: false, countryInfo: null },
  country: null,
  //   countryInfo: null,
  //   countries: [],
  //   isDataLoaded: false,
  //   isContinent: false,
  //   countriesForTable: null,
  //   isCountriesForTableLoaded: false,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "setInitial":
      return { ...state, initial: value };
    case "setCountry":
      return { ...state, country: value };
    // case "setCountryInfo":
    //   return { ...state, countryInfo: value };
    // case "setCountries":
    //   return { ...state, countries: value };
    // case "dataLoad":
    //   return { ...state, isDataLoaded: value };
    // case "setContinent":
    //   return { ...state, isContinent: value };
    // case "setCountriesForTable":
    //   return { ...state, countriesForTable: value };
    // case "tableLoad":
    //   return { ...state, isCountriesForTableLoaded: value };

    default:
      return state;
  }
};

function UserProvider(props) {
  const [data, dispatch] = useReducer(reducer, initialState);
  const { country, countryInfo, countries, isDataLoaded } = data;

  //get all countries
  //   useEffect(() => {
  //     const getCountries = async () => {
  //       await fetch("https://disease.sh/v3/covid-19/countries")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           // console.log("countries");
  //           // console.log(data);
  //           const countries = data.map((country) => {
  //             return {
  //               name: country.country,
  //               value: country.countryInfo.iso2,
  //               id: country.countryInfo._id,
  //               flag: country.countryInfo.flag,
  //             };
  //           });
  //         //   const countriesForTable = data;
  //           dispatch({ type: "setCountries", value: countries });
  //         //   dispatch({ type: "setCountriesForTable", value: countriesForTable });
  //         });
  //     };
  //     getCountries();
  //   }, []);

  //get CountryInfos
  useEffect(() => {
    const getCountryInfos = async () => {
      const url_1 =
        country === "worldwide"
          ? " https://disease.sh/v3/covid-19/all"
          : ` https://disease.sh/v3/covid-19/countries/${country}`;
      const url_2 =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/all?yesterday=yesterday"
          : ` https://disease.sh/v3/covid-19/countries/${country}?yesterday=yesterday`;

      //   Promise.all([fetch(url_1),fetch(url_2)]).then((res)=> res.forEach((item)=>item.json()))

      const promise1 = await fetch(url_1).then((res) => res.json());
      const promise2 = await fetch(url_2).then((res) => res.json());
      const datas = await Promise.all([promise1, promise2]);
      const dataObjects = datas.reduce(
        (acc, cur, index) => ({
          ...acc,
          [index == 0 ? "today" : "yesterday"]: cur,
        }),
        {}
      );

      console.log(dataObjects);

      // const data = await fetch(url_1).then((res) => res.json());
      // .then((data) => {
      //   // console.log("countryinfos ");
      //   // console.log(data);
      //   dispatch({ type: "setCountryInfo", value: data });
      // });
      //   const countryName =
      //     country !== "worldwide"
      //       ? new Intl.DisplayNames(["en"], { type: "region" }).of(country)
      //       : "worldwide";
      //   document.title = `${countryName} data`;

      dispatch({
        type: "setInitial",
        value: { isDataLoaded: true, countryInfo: dataObjects },
      });
    };
    country && getCountryInfos();
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
