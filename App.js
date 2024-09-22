// src/App.js

import React, { useState } from 'react';
import JSONInput from './components/JSONInput';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState({});
  const [filterOptions, setFilterOptions] = useState([]);

  return (
    <div className="App">
      <JSONInput setApiResponse={setApiResponse} setFilterOptions={setFilterOptions} />
      {apiResponse && filterOptions.length > 0 && (
        <ResponseDisplay apiResponse={apiResponse} filterOptions={filterOptions} />
      )}
    </div>
  );
}

export default App;
