import { createStore, combineReducers } from 'redux';

import converterReducer from './converterReducer';
import exchangeRatePageReducer from './exchangeRateReducer';
import baseCurrencyReducer from './baseCurrencyReducer';

let reducers = combineReducers({
    converterPage: converterReducer,
    exchangeRatePage: exchangeRatePageReducer,
    baseCurrencyPage: baseCurrencyReducer
})

let store = createStore(reducers);

window.store = store;

export default store;