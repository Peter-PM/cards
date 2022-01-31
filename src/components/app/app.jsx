import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Popup from '../popup/popup';
import './app.module.scss';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <Popup/>
    </>
  );
}

export default App;
