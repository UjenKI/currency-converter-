import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let reRenderComponent = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}


reRenderComponent();
reportWebVitals();
