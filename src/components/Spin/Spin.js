import React from 'react';
import { Spin } from 'antd';

const LoadingSpin = () => (
  <div>
    <Spin
      size="large"
      style={{
        transform: 'scale(200%)',
        position: 'absolute',
        left: '50%',
        top: '150px',
      }}
    />
  </div>
);

export default LoadingSpin;
