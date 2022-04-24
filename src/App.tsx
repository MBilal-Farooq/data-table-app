import React from 'react';
import './App.css';
import { TableDemo } from './TableDemo';

function App() {

  return (
    <div className="app">
      <div className="app-header">
        <h1>{"Data Table Demo App"}</h1>
      </div>
      <TableDemo></TableDemo>
    </div>
  );
}

export default App;
