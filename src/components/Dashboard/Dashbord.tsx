
import { GlobalProvider, useSelectedState } from '../../context/GlobalState'; 
import StatisticsDisplay from '../StatisticsDisplay/StatisticsDisplay';
import StateRepository from '../StateSelectionDropdown/StateRepository';
import HistoricalData from '../HistoricalDataChart/HistoricalData';
import styled from "styled-components";

function Dashboard() {
  const Container = styled.div` padding:0px 100px;
`;
  return (
    <GlobalProvider >
      <Container>
        <StateRepository />
        <StatisticsDisplay />
        <HistoricalData />
      </Container>     
    </GlobalProvider>
  );
}

export default Dashboard;
