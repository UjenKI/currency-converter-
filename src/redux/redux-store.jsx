import { createStore, combineReducers } from 'redux';

import converterReducer from './converterReducer';
import exchangeRatePageReducer from './exchangeRateReducer';

let reducers = combineReducers({
    converterPage: converterReducer,
    exchangeRatePage: exchangeRatePageReducer
})

let store = createStore(reducers);

window.store = store;

export default store;