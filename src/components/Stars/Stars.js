import React from 'react';
import { Rate } from 'antd';

const Stars = ({ rating, showValue }) => (
  <Rate
    count={10}
    style={{ transform: 'scale(85%)', width: '280px', display: 'inline-block' }}
    defaultValue={2.5}
    value={rating}
    onChange={showValue}
    allowHalf
  />
);

export default Stars;
