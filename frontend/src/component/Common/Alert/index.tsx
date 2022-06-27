/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import Alert from 'antd/lib/alert';
import style from './style.module.scss';

type AlertCompanentType = {
  messange?: string;
  type?: any;
};

const AlertCompanent = ({ messange = 'Успешная регистрация', type }: AlertCompanentType) => (
  <div className={style.content}>
    <Alert message={messange} type={type} showIcon />
  </div>
);

export default AlertCompanent;
