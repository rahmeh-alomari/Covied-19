import React, { useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelectedState } from '../context/GlobalState';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '20%',
    minWidth: 120,
  },
}));

function MenuStatics({ filteredData }: any) {
  const classes = useStyles();
  const { selectedState, setSelectedState } = useSelectedState(); 

  useEffect(() => {
    console.log('Selected state:', selectedState);
  }, [selectedState]);

  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-state-label">Select a state</InputLabel>
        <Select
          labelId="select-state-label"
          id="select-state"
          value={selectedState || ''} 
          onChange={handleStateChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {filteredData.map((state: any) => (
            <MenuItem key={state.state} value={state.state}>
              {state.name} - {state.state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MenuStatics;
