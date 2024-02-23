import React, { useState, useEffect } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import CustomTable from '../../core/CustomTable';
import BarChart from '../../core/Chart/Bar';
import { useSelectedState } from '../../context/GlobalState';
import Datepicker from '../../core/Datepicker';
import { formatDate } from '../../core/formatdate';
import styled from "styled-components";

const columns = [
  {
    field: 'pending',
    headerName: 'Pending',
  },
  {
    field: 'date',
    headerName: 'Date',
  },
  {
    field: 'states',
    headerName: 'states',
  },
  {
    field: 'positive',
    headerName: 'Positive',
  },
  {
    field: 'negative',
    headerName: 'Negative',
  },
];

function HistoricalData() {
  const { selectedState } = useSelectedState();
  const apiUrl = selectedState ? ` https://api.covidtracking.com/v1/states/${selectedState.toLowerCase()}/daily.json` : ` https://api.covidtracking.com/v1/us/daily.json`;
  const { data, loading, error } = useDataFetching(apiUrl);
  const [chartData, setChartData] = useState<any>(null);
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      console.log("data",)
      const transformedData = data.map(item => ({
        date: formatDate(item.date),
        positive: item.positive || 0,
      }));
      const newChartData = {
        labels: transformedData.map(item => item.date),
        datasets: [
          {
            label: 'Positive Cases',
            data: transformedData.map(item => item.positive),
            backgroundColor: 'blue',
          },
        ],
      };
      setChartData(newChartData);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Container >
        <CustomTable data={data} columns={columns} />
        <BarChart chartData={chartData} />
      </Container>
      </>
  );
} const Container = styled.div`
display: flex;
padding: 50px;
`;

export default HistoricalData;
