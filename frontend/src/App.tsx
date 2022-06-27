/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Wrapper from './component/Common/Wrapper';
import RegAndAuthContainer from './Container/RegAndAuthContainer';
import MainContainer from './Container/MainContainer';
import ErrorContainer from './Container/ErrorContainer';
import AuthHOC from './component/HOC/AuthHock';
import OneAdvertisementContainer from './Container/OneAdvertisementContainer';
import AddAdvertisementContainer from './Container/AddAdvertisementContainer';
import FormAddAdvertisement from './Container/FormAddAdvertisement';
import SerchContainer from './Container/SerchContainer';
import { refreshRequest } from './helpers/Request';
import { addAuth } from './store/slice/AuthSlice';
import SpinCastom from './component/Common/Spin';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const res = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/auth/refresh', {
        withCredentials: true,
      });
      const data = await response.data;
      localStorage.setItem('token', data.accessToken);
      const dataset = {
        isAdmin: data.user.isAdmin,
        name: data.user.name,
        email: data.user.email,
        id: data.user.id,
      };
      dispatch(addAuth(dataset));
    } catch (e) {
      return e;
    }
  };
  useEffect(() => {
    res();
  }, []);

  return (
    <>
      {loading ? (
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<MainContainer />} />
            <Route path="advertisements/:id" element={<OneAdvertisementContainer />} />
            <Route path="form/*" element={<RegAndAuthContainer />} />
            <Route
              path="advertisement"
              element={
                <AuthHOC>
                  <AddAdvertisementContainer />
                </AuthHOC>
              }
            />
            <Route
              path="advertisement/add/*"
              element={
                <AuthHOC>
                  <FormAddAdvertisement />
                </AuthHOC>
              }
            />
            <Route
              path="advertisement/add/:id"
              element={
                <AuthHOC>
                  <FormAddAdvertisement />
                </AuthHOC>
              }
            />
            <Route path="serch/:title" element={<SerchContainer />} />
            <Route path="*" element={<ErrorContainer />} />
          </Route>
        </Routes>
      ) : (
        <div className="main__spiner">
          <SpinCastom />
        </div>
      )}
    </>
  );
};
export default App;
