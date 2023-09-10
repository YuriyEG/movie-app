import React from 'react';

const SearchForm = ({ getDataHandler, setSavedValue }) => {
  return (
    <div className="searchform__wrapper">
      <input
        type="text"
        onChange={(e) => {
          getDataHandler(e.target.value);
          setSavedValue(e.target.value);
        }}
        placeholder="Type to search..."
        className="searchform"
      />
    </div>
  );
};

export default SearchForm;
