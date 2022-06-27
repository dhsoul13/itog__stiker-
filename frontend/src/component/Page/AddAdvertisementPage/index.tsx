import React from 'react';
import { useNavigate } from 'react-router-dom';
import Plus from '../../../assets/Icon/plus';
import { useSelectorGet } from '../../../hooks/useDateAdd';
import ButtonComponent from '../../Common/Button';
import Menu from '../../Common/Menu';
import TableCompanent from '../../Common/Table';

type AddAdvertisementPageType = {
  data: any;
};
const AddAdvertisementPage = ({ data }: AddAdvertisementPageType) => {
  const navigate = useNavigate();
  const { isAdmin } = useSelectorGet('Auth', 'Auth');
  const handler = () => {
    if (isAdmin) {
      navigate('/advertisement');
    } else {
      navigate('/advertisement/add');
    }
  };
  return (
    <div className="addAdvertisement__container container">
      <div className="addAdvertisement__content">
        <div className="addAdvertisement__left">
          <Menu />
        </div>
        <div className="addAdvertisement__right">
          <div className="addAdvertisement__right-header">
            <div className="addAdvertisement__right-title">
              <h2>Объявления</h2>
              <span>{`Всего: ${data.length}`}</span>
            </div>
            <div className="addAdvertisement__right-button">
              <ButtonComponent
                title="Добавить"
                onClick={handler}
                svg={<Plus />}
                style={{
                  background: 'rgba(72, 119, 242, 1)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  width: '129px',
                  height: '40px',
                  justifyContent: 'space-between',
                }}
              />
            </div>
          </div>
          <div className="addAdvertisement__right-body">
            <div className="addAdvertisement__right-container">
              <TableCompanent data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdvertisementPage;
