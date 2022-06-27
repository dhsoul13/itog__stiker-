/* eslint-disable consistent-return */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneAdvertisementPage from '../../component/Page/OneAdvertisementPage';
import { useSelectorGet } from '../../hooks/useDateAdd';
import { cardInfo } from '../../helpers/data';
import { addData } from '../../store/slice/DataSlice';

const index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelectorGet('Data', 'Data');
  useEffect(() => {
    if (!data.length) {
      const fun = async () => {
        try {
          await setTimeout(() => {
            const result = cardInfo;
            const data1 = result;
            dispatch(addData(data1));
          }, 1000);
        } catch (err) {
          return err;
        }
      };
      fun();
    }
  }, []);
  return <OneAdvertisementPage data={data} id={id} />;
};

export default index;
