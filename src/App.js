import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './component/Header/Header';
import ConverterContainer from './component/Converter/ConverterContainer';
import ConverterExchangeContainer from './component/CurrentExchange/ConverterExchangeContainer';
// import BaseCurrencyContainer from './component/BaseCurrency/BaseCurrencyContainer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App app__wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="exchange__wrapper">
          <Routes>
            <Route exact path='/' element = {<ConverterContainer/>} />
            <Route exact path='/converter' element = {<ConverterContainer/>} />
            <Route exact path='/currentExchange' element = { <ConverterExchangeContainer/> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    // <BaseCurrencyContainer/>
  )
}

export default App;
