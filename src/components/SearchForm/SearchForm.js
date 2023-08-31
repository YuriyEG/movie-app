import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="searchform__wrapper">
      <input type="text" placeholder="Type to search..." className="searchform" />
    </div>
  );
};

export default SearchForm;
