/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Button } from 'antd';

type ButtonComponentType = {
  style?: React.CSSProperties;
  onClick?: any;
  title?: string;
  className?: string;
  data?: any;
  disable?: any;
  svg?: any;
};

const ButtonComponent = ({
  style,
  onClick,
  title,
  className = 'header__button',
  data,
  disable,
  svg,
}: ButtonComponentType) => {
  const a = 1;
  return (
    <Button
      className={className}
      style={style}
      onClick={onClick}
      data-filter={data}
      disabled={disable}>
      {title}
      {svg}
    </Button>
  );
};

export default ButtonComponent;
