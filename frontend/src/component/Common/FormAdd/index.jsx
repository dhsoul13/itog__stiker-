/* eslint-disable import/order */
/* eslint-disable consistent-return */
/* eslint-disable function-paren-newline */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable quotes */
import React, { useEffect } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Select,
  Input,
  Upload
} from 'antd';
import SaveHeader from '../SaveHeader';
import { useSelectorGet } from '../../../hooks/useDateAdd';
import { tag } from '../../../helpers/data';
import { getDateNow } from '../../../helpers/DateFun';

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const props = {
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  } };

const onFinish = (values) => {
  console.log(values);
};

const FormAdd = ({data}) => {
  const {isAdmin} = useSelectorGet("Auth", "Auth");
  const [forms] = Form.useForm();
  const date = getDateNow();
  const toggleDisabled = (e) => {
    forms.setFieldsValue({published: undefined});
  };
  useEffect(() => {
    const find = tag.find((el) => {
      if (el.title == data.teg) {
        return el.id;
      }
    });
    forms.setFieldsValue({
      name: data.title ? data.title : '',
      price: data.price ? data.price : '',
      text: data.text ? data.text : '',
      phone: data.phone ? data.phone : "",
      place: data.city ? data.city : '',
      select: data.teg ? [`${find.id}`] : 0,
      published: data.published ? data.published : false,
      date: data.date ? data.date : '',

    });
  }, [data]);

  return (
    <div className="container">
      <Form
        onFinish={onFinish}
        className="form-add__form"
        form={forms}
      >
        <div className="form-add__el-1 el">
          <SaveHeader title={data.title} />
        </div>
        <div className="form-add__el-2 el">
          <label className="form-add__label">Название товара</label>
          <Form.Item
            name="name"
            className="form-add__input"
            rules={[{ required: true, message: 'Введите название товара' }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="form-add__price-categ">
          <div className="form-add__el-3 el">
            <label className="form-add__label">Категория</label>
            <Form.Item
              style={{ marginTop: `8px`, height: `64px` }}
              name="select"
              className="form-add__selector"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select style={{ height: `64px` }}>
                <Select.Option value="0">Вся доска</Select.Option>
                <Select.Option value="1">Автомобили</Select.Option>
                <Select.Option value="2">Аксессуары</Select.Option>
                <Select.Option value="3">Мебель</Select.Option>
                <Select.Option value="4">Одежда</Select.Option>
                <Select.Option value="5">Спорт</Select.Option>
                <Select.Option value="6">Техника</Select.Option>
                <Select.Option value="7">Товары для дома</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="form-add__el-4 el">
            <label className="form-add__label">Стоимость</label>
            <Form.Item
              style={{ marginTop: `8px`, height: `64px` }}
              name="price"
              rules={[{ required: true, message: 'Введите цену' }]}>
              <Input className="form-add__input" />
            </Form.Item>
          </div>
        </div>
        <div className="form-add__phone-date">
          <div className="form-add__el-5 el">
            <label className="form-add__label">Телефон</label>
            <Form.Item
              name="phone"
              style={{ marginTop: `8px` }}
              className="form-add__phone"
              rules={[{ required: true, message: 'Укажите номер телефона' }]}
      >
              <Input style={{ width: '100%' }} prefix="7" />
            </Form.Item>
          </div>
          <div className="form-add__el-5-1 el">
            <label className="form-add__label">Дата</label>
            <Form.Item
              name="date"
              style={{ marginTop: `8px` }}
              className="form-add__date"
              rules={[{ required: true, message: 'Укажите дату' }]}
      >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </div>
        </div>
        <div className="form-add__el-6 el">
          <label className="form-add__label">Описание</label>
          <Form.Item
            style={{ marginTop: `8px` }}
            name="text"
            rules={[{ required: true, message: 'Описание объязательно' }]}
      >
            <Input.TextArea maxLength={3000} minLength={10} />
          </Form.Item>
        </div>
        <div className="form-add__el-7 el">
          <label className="form-add__label">Фотография</label>
          <Form.Item
            name="imgs"
            valuePropName="fileList"
            getValueFromEvent={normFile}
      >
            <Upload {...props}>
              <Button>Выбрать файл</Button>
            </Upload>
          </Form.Item>
        </div>
        <div className="form-add__el-8 el">
          <label className="form-add__label">Местоположение</label>
          <Form.Item
            name="place"
            style={{ marginTop: `8px` }}
            rules={[{ required: true, message: 'Введите местоположение' }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="form-add__el-9 el" style={isAdmin ? {paddingBottom: `24px`} : {paddingBottom: `152px` }}>
          <div>
            <h2>Пока не реализованно</h2>
          </div>
        </div>
        {isAdmin ? (
          <div className="form-add__el-10 el">
            <label className="form-add__label">Публикация</label>
            <Form.Item
              name="published"
              style={{ marginTop: `8px` }}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста выберите',
                },
              ]}
      >
              <Radio.Group>
                <Radio value checked>Показать</Radio>
                <Radio value={false} checked>Скрыть</Radio>
                <Button
                  type="link"
                  onClick={toggleDisabled}
                  style={{color: "#2A2F37" }}
                  >
                  Сбросить выбор
                </Button>
              </Radio.Group>
            </Form.Item>
          </div>
        ) : ''}

      </Form>
    </div>
  );
};

export default FormAdd;
