import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Popup from '../popup/popup';
import { useSelector } from 'react-redux';
import { getPopupView } from '../../store/selectors';
import './app.module.scss';

function App() {

  const popupView = useSelector(getPopupView);
  
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      {popupView ? <Popup/> : ''}
    </>
  );
}

export default App;
