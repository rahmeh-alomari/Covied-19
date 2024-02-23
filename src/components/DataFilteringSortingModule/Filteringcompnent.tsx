import React, { useState, useEffect, useReducer } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import CustomTable from '../../core/CustomTable';
import { SortingReducer } from './SortingReducer'; 
import { handleSortChange } from './handleSortChange';
import { Button } from '@mui/material';
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
        headerName: 'States',
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



function Filteringcompnent() {
    const [startDate, setStartDate] = useState('');
    const apiUrl = startDate ? `https://api.covidtracking.com/v1/us/${startDate}.json` : ` https://api.covidtracking.com/v1/us/daily.json`;

    const { data, loading, error } = useDataFetching(apiUrl);
    console.log("apiUrlapiUrlapiUrlapiUrlapiUrlapiUrlapiUrlapiUrlapiUrlapiUrlapiUrl", data, apiUrl);
    const [sortState, dispatch] = useReducer(SortingReducer, {
        sortBy: '',
        ascending: true,
    });

    useEffect(() => {
        console.log('New start date:', startDate);
    }, [data, startDate]);

    const handleDateChange = (event: any) => {
        const rawDate = event.target.value;
        const formattedDate = rawDate.replaceAll('-', '');
        setStartDate(formattedDate);
        dispatch({ type: 'TOGGLE_SORT_DATE' });
    };
    const handleSort = (field: string) => {
        handleSortChange(field, dispatch);
    };
    if (data && Array.isArray(data)) {

        if (sortState.sortBy) {
            data.sort((a, b) => {
                const x = a[sortState.sortBy];
                const y = b[sortState.sortBy];
                const sortOrder = sortState.ascending ? 1 : -1;
                return sortOrder * (x - y);
            });
        }
    }

    return (
        <Container >
            <StyledInput
                type="date"
                id="start"
                name="trip-start"
                value={startDate}
                onChange={handleDateChange}
            />
            <Button variant="outlined" onClick={() => handleSort('positive-des')}>Lowest-Positive</Button >
            <Button variant="outlined" onClick={() => handleSort('negative-asc')}>Lowest-Negative</Button >

            {error ? (
                <CustomTable data={"No data found for the selected date"} columns={columns} />
            ) : (
                <CustomTable data={data} columns={columns} />
            )}
        </Container >
    );
}
const Container = styled.div`
padding: 50px;

`;
const StyledInput = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    outline: none; /* Remove outline on focus */
    margin-right:20px
`;


export default Filteringcompnent;
