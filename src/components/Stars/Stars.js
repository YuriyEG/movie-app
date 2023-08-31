import React from 'react';
import { Rate } from 'antd';

const thisValue = 8;
const Stars = () => (
  <Rate
    disabled
    count={10}
    style={{ transform: 'scale(85%)', width: '280px', display: 'inline-block' }}
    defaultValue={2}
    value={thisValue}
  />
);

export default Stars;
