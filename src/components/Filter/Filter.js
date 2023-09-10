import React, { useState } from 'react';

const Filter = ({ setMode }) => {
  const [searchOn, setSearchOn] = useState(true);

  let searchStyle = 'filter__search';
  if (searchOn) {
    searchStyle += ' filter__checked';
  }

  let rateStyle = 'filter__rated';
  if (!searchOn) {
    rateStyle += ' filter__checked';
  }

  const filterToggle = (e) => {
    if (e.target.getAttribute('name') === 'search' && searchOn !== true) {
      setSearchOn(true);
      setMode(true);
    }
    if (e.target.getAttribute('name') === 'rated' && searchOn === true) {
      setSearchOn(false);
      setMode(false);
    }
  };
  return (
    <div className="filter-wrapper">
      <div className="filter">
        <span className={searchStyle} onClick={filterToggle} name="search">
          Search
        </span>
        <span className={rateStyle} onClick={filterToggle} name="rated">
          Rated
        </span>
      </div>
    </div>
  );
};

export default Filter;
