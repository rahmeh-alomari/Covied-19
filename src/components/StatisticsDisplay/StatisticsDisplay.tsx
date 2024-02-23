import { useState, useEffect } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import CustomTable from '../../core/CustomTable';
import BarChart from '../../core/Chart/Bar';
import { useSelectedState } from '../../context/GlobalState';
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

function StatisticsDisplay() {
  const { selectedState } = useSelectedState();
  const [chartData, setChartData] = useState<any>(null); 
  const apiUrl = selectedState ? `https://api.covidtracking.com/v1/states/${selectedState.toLowerCase()}/current.json` : `https://api.covidtracking.com/v1/us/current.json`;
  const { data, loading, error } = useDataFetching(apiUrl);

  useEffect(() => {
    if (data) {
      let transformedData;
  
      if (Array.isArray(data)) {
        const firstElement = data[0] || {};
        transformedData = [
          { id: 1, value: firstElement.pending || 0, label: 'Pending' },
          { id: 2, value: firstElement.positive || 0, label: 'Positive' },
          { id: 3, value: firstElement.negative || 0, label: 'Negative' },
        ];
      } else {
      
        transformedData = [
          { id: 1, value: data.pending || 0, label: 'Pending' },
          { id: 2, value: data.positive || 0, label: 'Positive' },
          { id: 3, value: data.negative || 0, label: 'Negative' },
        ];
      }
      const newChartData = {
        labels: transformedData.map(item => item.label),
        datasets: [
          {
            label: 'Data',
            data: transformedData.map(item => item.value),
            backgroundColor: ['red', 'green', 'blue'], 
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
    <Container >
      <CustomTable data={data} columns={columns} />
      <BarChart chartData={chartData} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding: 50px;
`;
export default StatisticsDisplay;
