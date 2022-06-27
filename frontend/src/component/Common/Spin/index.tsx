/* eslint-disable no-import-assign */
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const SpinCastom = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 67, color: '#FFAC28' }} spin />;
  return <Spin indicator={antIcon} />;
};

export default SpinCastom;
