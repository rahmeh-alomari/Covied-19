import  { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function BarChart({ chartData }: any) {
  useEffect(() => {
  }, [chartData]);

  if (!chartData || chartData.length === 0) {
   
    return <div></div>;
  }

  Chart.register({
    id: 'pie',
   
  });
  return (
    <div style={{ width: '50%' }}>

      <Bar data={chartData}  style={{ width: '100%' }}/>
    </div>
  );
}

export default BarChart;
