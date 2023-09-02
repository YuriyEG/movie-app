import React from 'react';
import { Rate } from 'antd';

const Stars = ({ rating }) => (
  <Rate
    count={10}
    style={{ transform: 'scale(85%)', width: '280px', display: 'inline-block' }}
    defaultValue={2.5}
    value={rating}
    onChange={(v) => console.log(v)}
    allowHalf
  />
);

export default Stars;
