/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { Children } from 'react';

type FormType = {
  children: React.ReactNode;
  handleSubmit: any;
  onSubmit: (data: any) => void;
};
const Form: React.FC<FormType> = ({ children, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
);
export default Form;
