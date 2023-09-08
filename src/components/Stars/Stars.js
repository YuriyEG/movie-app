import React from 'react';
import { Rate } from 'antd';

const Stars = ({ rating, rateById }) => (
  <Rate
    count={10}
    style={{ transform: 'scale(85%)', width: '280px', display: 'inline-block' }}
    value={rating}
    onChange={rateById}
    allowHalf
  />
);

export default Stars;
