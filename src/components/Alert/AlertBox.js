import React from 'react';
import { Alert, Space } from 'antd';

const AlertBox = ({ message, type }) => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message={message} type={type} />
  </Space>
);

export default AlertBox;
