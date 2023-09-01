import React from 'react';
import './SearchForm.css';

const SearchForm = ({ getDataHandler }) => {
  return (
    <div className="searchform__wrapper">
      <input
        type="text"
        onChange={(e) => getDataHandler(e.target.value)}
        placeholder="Type to search..."
        className="searchform"
      />
    </div>
  );
};

export default SearchForm;
