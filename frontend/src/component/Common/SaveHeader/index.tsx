import React from 'react';
import { Button, Form } from 'antd';

type SaveHeaderType = {
  title: string;
};

const SaveHeader = ({ title = 'Название товара' }: SaveHeaderType) => (
  <div className="savehaeder__content">
    <h2 className="savehaeder__title">{title}</h2>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
    </Form.Item>
  </div>
);

export default SaveHeader;
