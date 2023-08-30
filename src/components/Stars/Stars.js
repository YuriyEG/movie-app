import React from 'react';
import { Rate } from 'antd';

const thisValue = 8;
const Stars = () => <Rate disabled count={10} style={{ transform: 'scale(85%)' }} defaultValue={2} value={thisValue} />;

export default Stars;
