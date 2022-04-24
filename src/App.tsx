import React from 'react';
import ProductTableTestData from './api/ProductTableTestData';
import './App.css';
import DataTable, { ColumnType } from './dataTable/DataTable';

function App() {

  const columns: Array<ColumnType> = ProductTableTestData.Columns;
  const rows = ProductTableTestData.Rows;

  return (
    <div className="app">
      <div className="app-header">
        <h1>{"Data Table Demo App"}</h1>
      </div>
      <div className="table-block">
        <DataTable columns={columns} rows={rows} onRowClick={(rowData, _index) => console.log(rowData)}></DataTable>
      </div>
    </div>
  );
}

export default App;
