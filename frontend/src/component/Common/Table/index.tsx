/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-children-prop */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { Menu, Table, Dropdown, Button, Checkbox, Radio } from 'antd';
import DropdownButton from 'antd/lib/dropdown/dropdown-button';
import Search from 'antd/lib/input/Search';
import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Backet from '../../../assets/Icon/backet';
import Eye from '../../../assets/Icon/eye';
import Filter from '../../../assets/Icon/filter';
import Pencil from '../../../assets/Icon/pencil';

const TableCompanent = ({ data }: any) => {
  const [visible, setVisible] = useState(false);
  const handleDelete = (key: React.Key) => {};
  const [rendData, setRendData] = useState<any>([]);
  const [constData, setConstData] = useState<any>([]);
  const [filterState, setFilterState] = useState<any>({
    tag: [],
    c: true,
  });
  useMemo(() => {
    if (data.length) {
      const newMas = data.map((el: any) => ({
        key: el.id,
        title: el.title,
        tag: el.teg,
        date: el.date,
        published: el.published,
      }));
      setRendData(newMas);
      setConstData(newMas);
    } else {
      setRendData([]);
      setConstData([]);
    }
  }, [data]);

  const columns: any = [
    {
      title: 'Название объявления',
      dataIndex: 'title',
      key: 'title',
      sorter: (a: any, b: any) => {
        console.log(a, b);
        return b.key - a.key;
      },
      //   render: (titlet: any) => {
      //     <>title</>;
      //   },
    },
    {
      title: 'Категория',
      dataIndex: 'tag',
      key: 'tag',
      //   render: (tag: any) => {
      //     <h2>tag</h2>;
      //   },
    },
    {
      title: 'Дата публикации',
      dataIndex: 'date',
      key: 'date',
      //   render: (date: any) => {
      //     <h2>date</h2>;
      //   },
    },
    {
      title: 'Публикация',
      dataIndex: 'published',
      key: 'published',
      render: (published: any) => (published ? 'Да' : 'Нет'),
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (action: any, record: any) => {
        const menu = (
          <Menu
            className="addAdvertisement__menu-fil"
            items={[
              {
                label: (
                  <NavLink
                    to={`/advertisements/${record.key}`}
                    className="addAdvertisement__link-show">
                    <span>
                      <Eye />
                    </span>
                    <h2>Посмотреть</h2>
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink
                    to={`/advertisement/add/${record.key}`}
                    className="addAdvertisement__link-show">
                    <span>
                      <Pencil />
                    </span>
                    <h2>Редактировать</h2>
                  </NavLink>
                ),
                key: '1',
              },
              {
                label: (
                  <NavLink
                    to={`/advertisements/delete/${record.key}`}
                    className="addAdvertisement__link-show">
                    <span>
                      <Backet />
                    </span>
                    <h2>Удалить</h2>
                  </NavLink>
                ),
                key: '3',
              },
            ]}
          />
        );

        return <DropdownButton overlay={menu} className="addAdvertisement__menu-fil-el" />;
      },
    },
  ];
  const cheackBoxTag = (checkedValues: any) => {
    setFilterState({
      tag: checkedValues,
      published: filterState.published,
    });
  };
  const cheackBoxPublish = (e: any) => {
    setFilterState({
      tag: filterState.tag,
      published: !!e.target.value,
    });
  };
  const filterHandlerAdd = () => {
    const datas = constData.filter((el: any) =>
      el.published === filterState.published && filterState.tag.includes(el.tag) ? el : ''
    );
    setRendData(datas);
  };
  const filterHandlerRemove = () => {
    setRendData(constData);
  };
  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };
  const handleMenuClick = (e: any) => {
    if (e.key === '3') {
      setVisible(false);
    }
  };
  const filter = (
    <Menu onClick={handleMenuClick} className="addAdvertisement__menu-sub-ul">
      <Menu.Item key="1" className="addAdvertisement__menu-sub-li a">
        <div>
          <h2 className="addAdvertisement__menu-sub-title">Категория</h2>
          <Checkbox.Group onChange={cheackBoxTag}>
            <Checkbox value="Автомобили">Автомобили</Checkbox>
            <Checkbox value="Аксессуары">Аксессуары</Checkbox>
            <Checkbox value="Одежда">Одежда</Checkbox>
            <Checkbox value="Мебель">Мебель</Checkbox>
            <Checkbox value="Спорт">Спорт</Checkbox>
            <Checkbox value="Техника">Техника</Checkbox>
            <Checkbox value="Товары для дома">Товары для дома</Checkbox>
          </Checkbox.Group>
        </div>
      </Menu.Item>
      <Menu.Item key="2" className="addAdvertisement__menu-sub-li b">
        <div>
          <h2 className="addAdvertisement__menu-sub-title">Опубликовано</h2>
          <Radio.Group onChange={cheackBoxPublish}>
            <Radio value={1}>Да</Radio>
            <Radio value={0}>Нет</Radio>
          </Radio.Group>
        </div>
      </Menu.Item>
      <Menu.Item key="3" className="addAdvertisement__menu-sub-li c">
        <div className="addAdvertisement__button-container">
          <Button
            type="primary"
            onClick={filterHandlerAdd}
            className="addAdvertisement__button-add">
            Применить
          </Button>
          <Button onClick={filterHandlerRemove} className="addAdvertisement__button-remove">
            Сбросить
          </Button>
        </div>
      </Menu.Item>
    </Menu>
  );
  const SerchHandler = (e: any) => {
    const word = e.target.value;
    const datas = constData.filter((el: any) =>
      el.title.toLowerCase().includes(word.toLowerCase())
    );
    setRendData(datas);
  };
  return (
    <div>
      <div className="addAdvertisement__forms">
        <div className="addAdvertisement__filter">
          <div className="addAdvertisement__filter-c">
            <Search
              placeholder="Найти объявления"
              allowClear
              enterButton
              style={{ width: 403, minHeight: '100%' }}
              onChange={SerchHandler}
              bordered={false}
            />
            <Dropdown
              overlay={filter}
              trigger={['hover']}
              visible={visible}
              onVisibleChange={handleVisibleChange}
              className="addAdvertisement-sub">
              <Button className="addAdvertisement__sub-button">
                <span>Фильтровать</span>
                <Filter />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <Table
        columns={columns}
        className="table"
        dataSource={rendData}
        pagination={{
          showLessItems: true,
          position: ['topRight'],
          simple: true,
          className: 'paggination',
        }}
      />
    </div>
  );
};

export default TableCompanent;
