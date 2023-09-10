import React from 'react';

const SearchForm = ({ getDataHandler, setSavedValue }) => {
  const operateData = (e) => {
    getDataHandler(e.target.value);
    setSavedValue(e.target.value);
  };
  return (
    <div className="searchform__wrapper">
      <input type="text" onChange={operateData} placeholder="Type to search..." className="searchform" />
    </div>
  );
};

export default SearchForm;
