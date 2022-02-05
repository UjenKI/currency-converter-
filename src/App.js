import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './component/Header/Header';
import './App.css';
// import ConverterContainer from './component/Converter/ConverterContainer';
const ConverterContainer = React.lazy(() => import('./component/Converter/ConverterContainer'));
// import ConverterExchangeContainer from './component/CurrentExchange/ConverterExchangeContainer';
const ConverterExchangeContainer = React.lazy(() => import('./component/CurrentExchange/ConverterExchangeContainer'));



const App = () => {
  return (
    <BrowserRouter>
      <div className="App app__wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="exchange__wrapper">
          <Routes>
            <Route exact path='/' element = {<Suspense fallback={<div>LOADING...</div>}><ConverterContainer/></Suspense>} />
            <Route />
            <Route exact path='/converter' element = {<Suspense fallback={<div>LOADING...</div>}><ConverterContainer/></Suspense>} />
            <Route exact path='/currentExchange' element = {<Suspense fallback={<div>LOADING...</div>}><ConverterExchangeContainer/></Suspense>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    // <BaseCurrencyContainer/>
  )
}

export default App;
