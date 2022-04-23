import React from 'react';
import ProductTableTestData from './api/ProductTableTestData';
import './App.css';
import DataTable, { ColumnType } from './dataTable/DataTable';

function App() {

  const columns: Array<ColumnType> = ProductTableTestData.Columns;
  const rows = ProductTableTestData.Rows;

  return (
    <div>
      <div className="App-header">
        <h1>{"Data Table Demo App"}</h1>
      </div>
      <DataTable columns={columns} rows={rows} onRowClick={(rowData, _index) => console.log(rowData)}></DataTable>
    </div>
  );
}

export default App;
