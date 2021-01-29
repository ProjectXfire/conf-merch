import React from 'react';
import './index.scss';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const Layout = ({children}) => (
  <div className='Main'>
    <Header />
    {children}
    <Footer />
  </div>
  );

export default Layout;

