/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../../component/Page/Main';
import { cardInfo } from '../../helpers/data';
import { addData } from '../../store/slice/DataSlice';
import { useSelectorGet } from '../../hooks/useDateAdd';

const MainContainer = () => {
  const data = useSelectorGet('Data', 'Data');
  const dispatch = useDispatch();
  useEffect(() => {
    const fun = async () => {
      try {
        await setTimeout(() => {
          const result = cardInfo;
          const data = result;
          dispatch(addData(data));
        }, 1000);
      } catch (err) {
        return err;
      }
    };
    fun();
  }, []);

  return <MainPage data={data} />;
};

export default MainContainer;
