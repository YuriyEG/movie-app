import React from 'react';
import { Pagination } from 'antd';
import './Pagin.css';

const Pagin = ({ getDataDebounced, inputValue, page }) => {
  const change = (curPage) => {
    getDataDebounced(inputValue, curPage);
  };
  return (
    <div className="pagination">
      <Pagination defaultCurrent={page} onChange={change} total={50} />
    </div>
  );
};

export default Pagin;
