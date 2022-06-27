/* eslint-disable no-unused-vars */
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

type WrapperType = {
  children: React.ReactNode;
};
const Wrapper = () => (
  <Layout>
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </Layout>
);

export default Wrapper;
