const SET_BASE_CURRENCY_EXCHANGE = 'SET_BASE_CURRENCY_EXCHANGE';
const SET_EXCHANGE_RATE_OPTIONS = 'SET_EXCHANGE_RATE_OPTIONS';
const SET_BASE_SELECT_OPTIONS = 'SET_SELECT_OPTIONS';

let initialState = {
    baseCurrencyExchange: '',
    baseExchangeRate: {},
    baseSelectOptions: []
}

const baseCurrencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BASE_CURRENCY_EXCHANGE: {
            return {
                ...state,
                baseCurrencyExchange: action.baseCurrencyExchange
            }
        }
        case SET_EXCHANGE_RATE_OPTIONS: {
            return {
                ...state,
                baseExchangeRate: {...action.baseExchangeRate}
            }
        }
        case SET_BASE_SELECT_OPTIONS: {
            const baseRates = action.baseRates;
            let rates = [];
            for(let key in baseRates.conversion_rates){
                rates.push(key)
            }
            return {
                ...state,
                baseSelectOptions: [...rates]
            }
        }
        default: {
            return state
        }
    }
}

export const setBaseCurrencyExchangeAC = (baseCurrencyExchange) => ({type: SET_BASE_CURRENCY_EXCHANGE, baseCurrencyExchange});
export const setExchangeRateOptionsAC = (baseExchangeRate) => ({type: SET_EXCHANGE_RATE_OPTIONS, baseExchangeRate});
export const setBaseSelectOptionsAC = (baseRates) => ({type: SET_BASE_SELECT_OPTIONS, baseRates});

export default baseCurrencyReducer;