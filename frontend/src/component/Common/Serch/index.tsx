/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useRef, useState } from 'react';
import Search from 'antd/lib/input/Search';
import { useNavigate } from 'react-router-dom';
import Serch from '../../../assets/Icon/serch';

type SerchComponentType = {
  style?: React.CSSProperties;
  placeholder?: string;
  classAdd?: string;
};

const SerchComponent = ({ style, placeholder = '', classAdd }: SerchComponentType) => {
  const navigator = useNavigate();
  const ref = useRef<any>();
  const [active, setActive] = useState(true);
  const handlerSerch = (value: string) => {
    if (value) {
      navigator(`/serch/${value}`);
    }
  };
  const handlerChange = (e: any) => {
    if (ref.current.input.value === '') {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div className={classAdd}>
      {active ? <Serch /> : ''}
      <Search
        ref={ref}
        bordered={false}
        placeholder={placeholder}
        allowClear
        style={style}
        enterButton="Искать"
        onSearch={handlerSerch}
        onChange={handlerChange}
      />
    </div>
  );
};

export default SerchComponent;
