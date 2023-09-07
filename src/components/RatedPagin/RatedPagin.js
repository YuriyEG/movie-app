import React from 'react';
import { Pagination } from 'antd';
import './RatedPagin.css';

const RatedPagin = ({ getDataDebounced, page, totalPages }) => {
  const change = (curPage) => {
    getDataDebounced(curPage);
  };

  return (
    <div className="pagination">
      <Pagination defaultCurrent={page} onChange={change} total={totalPages} pageSize={1} showSizeChanger={false} />
    </div>
  );
};

export default RatedPagin;
