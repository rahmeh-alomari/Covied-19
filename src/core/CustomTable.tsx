import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid'; 

interface CustomTableProps {
  data: any;
  columns: GridColDef[];
  paginationConfig?: { page: number; pageSize: number };
  pageSizeOptions?: number[];
}

function CustomTable({ data, columns, paginationConfig = { page: 0, pageSize: 20 }, pageSizeOptions = [10, 20, 30, 40, 50] }: CustomTableProps) {
  if (!data) {
    return <div>No data available</div>;
  }

  if (!Array.isArray(data)) {
    data = [data]; 
  }

  const dataWithIds = data.map((row: any) => ({
    id: row.id || uuidv4(), 
    ...row,
  }));

  return (
    <div style={{ height: 400, width: '60%' }}>
      <DataGrid
        rows={dataWithIds}
        columns={columns}
        initialState={{ pagination: { paginationModel: paginationConfig } }}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
}

export default CustomTable;
