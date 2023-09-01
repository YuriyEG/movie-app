import React from 'react';
import { Alert, Space } from 'antd';

const AlertBox = ({ message, type }) => (
  <Space direction="vertical" style={{ width: '100%' }}>
    {/* <Alert message="Success Text" type="success" /> */}
    {/* <Alert message="Info Text" type="info" /> */}
    <Alert message={message} type={type} />
    {/* <Alert message="Error Text" type="error" /> */}
  </Space>
);

export default AlertBox;
