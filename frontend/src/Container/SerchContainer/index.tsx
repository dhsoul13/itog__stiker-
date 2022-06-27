/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import SerchPage from '../../component/Page/SerchPage';
import { cardInfo } from '../../helpers/data';

const SerchContainer = () => {
  const parm = useParams().title;
  const [elems, setElems] = useState<any>([]);
  const [findEl, setFindEl] = useState<any>([]);
  useEffect(() => {
    const fun = async () => {
      try {
        await setTimeout(() => {
          setElems(cardInfo);
          const data = cardInfo.filter((el: any) =>
            el.title.toLowerCase().includes(parm?.toLowerCase()) ? el.title : ''
          );
          setFindEl(data);
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    };
    fun();
  }, []);

  useMemo(() => {
    const data = elems.filter((el: any) =>
      el.title.toLowerCase().includes(parm?.toLowerCase()) ? el.title : ''
    );
    setFindEl(data);
  }, [parm]);

  return <SerchPage data={findEl} />;
};

export default SerchContainer;
