// src/components/JSONInput.js

import React, { useState } from 'react';

function JSONInput({ setApiResponse, setFilterOptions }) {
  const [jsonInput, setJsonInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      const response = await fetch('http://localhost:3000/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsedData)
      });
      const responseData = await response.json();
      setApiResponse(responseData);
      setFilterOptions(Object.keys(responseData).filter(key => key !== 'is_success' && key !== 'user_id'));
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <label>API Input:</label>
      <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} rows="4" cols="50"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default JSONInput;
