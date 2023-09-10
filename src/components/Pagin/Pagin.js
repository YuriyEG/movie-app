import React from 'react';
import { Pagination } from 'antd';

const Pagin = ({ getDataDebounced, page, totalPages }) => {
  const change = (curPage) => {
    getDataDebounced(undefined, curPage);
  };

  return (
    <div className="pagination">
      <Pagination defaultCurrent={page} onChange={change} total={totalPages} pageSize={1} showSizeChanger={false} />
    </div>
  );
};

export default Pagin;
