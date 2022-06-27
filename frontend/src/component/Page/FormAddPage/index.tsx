import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useParams } from 'react-router-dom';
import Arrow from '../../../assets/Icon/arrow';
import Menu from '../../Common/Menu';
import FormAdd from '../../Common/FormAdd';
import { cardInfo } from '../../../helpers/data';

type FormAddPageType = {
  isAdmin: boolean;
};
const FormAddPage = ({ isAdmin }: FormAddPageType) => {
  const { id } = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (id) {
      console.log(id);
      setData(cardInfo.find((el) => el.id === Number(id)));
    }
  }, []);
  return (
    <div className="form-add__container container">
      <div className="form-add__content">
        <div className="form-add__left">
          <Menu />
        </div>
        <div className="form-add__right">
          <div className="form-add__back">
            <NavLink to="/advertisement">
              <Arrow />
              <span>Вернуться назад</span>
            </NavLink>
          </div>
          <div className="form-add__form">
            <FormAdd data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPage;
