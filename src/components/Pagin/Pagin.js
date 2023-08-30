import React from 'react';
import { Pagination } from 'antd';
import './Pagin.css';

const Pagin = () => {
  return (
    <div className="pagination">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default Pagin;
