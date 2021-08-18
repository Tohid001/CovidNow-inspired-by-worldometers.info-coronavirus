import { Table, Typography } from "antd";

const { Text } = Typography;

export const summaryFunc = (pageData) => {
  let totalCases = 0;
  let totalNewCases = 0;
  let totalDeaths = 0;
  let totalNewDeaths = 0;
  let totalRecovered = 0;
  let totalNewRecovered = 0;
  let totalActiveCases = 0;
  let totalSeriousCritical = 0;

  pageData.forEach(
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

  return (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>

        <Table.Summary.Cell>Total</Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalCases}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalNewCases}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalDeaths}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalNewDeaths}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalRecovered}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalNewRecovered}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalActiveCases}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <Text>{totalSeriousCritical}</Text>
        </Table.Summary.Cell>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>
        <Table.Summary.Cell>{null}</Table.Summary.Cell>
      </Table.Summary.Row>
    </>
  );
};
