import React, { useEffect, useState } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import MenuStatics from '../../core/MeunStatics';

function StateRepository() {
  const { data, loading, error } = useDataFetching('https://api.covidtracking.com/v1/states/info.json');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const extractedData = data.map(({ state, name }: any) => ({ state, name }));
      setFilteredData(extractedData);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <MenuStatics filteredData={filteredData} />
    </div>
  );
}

export default StateRepository;
