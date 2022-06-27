import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Registration from './Registration';

const RegAndAuthPage = () => (
  <div className="form__aurh-reg">
    <div className="form__container container">
      <Routes>
        <Route path="reg" element={<Registration />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </div>
  </div>
);

export default RegAndAuthPage;
