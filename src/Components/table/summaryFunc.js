export const summaryFunc = (tableData) => {
  let totalCases = 0;
  let totalNewCases = 0;
  let totalDeaths = 0;
  let totalNewDeaths = 0;
  let totalRecovered = 0;
  let totalNewRecovered = 0;
  let totalActiveCases = 0;
  let totalSeriousCritical = 0;

  tableData.data.forEach(
    ({
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      active,
      critical,
    }) => {
      totalCases += cases;
      totalNewCases += todayCases;
      totalDeaths += deaths;
      totalNewDeaths += todayDeaths;
      totalRecovered += recovered;
      totalNewRecovered += todayRecovered;
      totalActiveCases += active;
      totalSeriousCritical += critical;
    }
  );

  return {
    country: `${tableData.continent}(total)`,
    cases: totalCases,
    todayCases: totalNewCases,
    deaths: totalDeaths,
    todayDeaths: totalNewDeaths,
    recovered: totalRecovered,
    todayRecovered: totalNewRecovered,
    active: totalActiveCases,
    critical: totalSeriousCritical,
  };
};
