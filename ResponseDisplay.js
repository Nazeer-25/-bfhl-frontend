// src/components/ResponseDisplay.js

import React, { useState } from 'react';
import Select from 'react-select';

function ResponseDisplay({ apiResponse, filterOptions }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = selectedOptions => setSelectedFilters(selectedOptions);

  const getFilteredResponse = () => {
    if (!selectedFilters.length) return null;
    return selectedFilters.map(filter => ({
      label: filter.label,
      value: apiResponse[filter.value].join(', ')
    }));
  };

  return (
    <div>
      <Select
        isMulti
        options={filterOptions.map(option => ({ label: option, value: option }))}
        onChange={handleFilterChange}
        className="multi-select"
        placeholder="Multi Filter"
      />
      <div>
        {getFilteredResponse()?.map(item => (
          <p key={item.label}><b>{item.label}:</b> {item.value}</p>
        ))}
      </div>
    </div>
  );
}

export default ResponseDisplay;
