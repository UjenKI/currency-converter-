const SET_EXCHANGE_RATE = 'SET_EXCHANGE_RATE';
const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';
const SET_SELECT_OPTIONS_CURRENCY = 'SET_SELECT_OPTIONS_CURRENCY';
const SET_RATE_FOR_ELEM = 'SET_RATE_FOR_ELEM';
const SET_TOGGLE_FETCHING = 'SET_TOGGLE_FETCHING';

let initialState = {
    exchangeRate: {},
    selectOptions: [],
    rateForElem: [],
    baseCurrency: 'USD',
    isFetching: true
}

const exchangeRatePageReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_EXCHANGE_RATE: {
            return {
                ...state,
                exchangeRate: {...action.exchangeRate}
            }
        }
        case SET_BASE_CURRENCY: {
            return {
                ...state,
                baseCurrency: action.baseCurrency
            }
        }
        case SET_RATE_FOR_ELEM: {
            const rateObj = Object.entries(action.rateForElem.conversion_rates)
            let arrRes = [];
            rateObj.map(item => arrRes.push(item))
            return {
                ...state,
                rateForElem: [...arrRes]
            }
        }
        case SET_SELECT_OPTIONS_CURRENCY: {
            const rates = action.rates;
            let keys = [];

            for(let key in rates.conversion_rates){
                keys.push(key)
            }

            return {
                ...state,
                selectOptions: [...keys]

            }
        }
        case SET_TOGGLE_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
        default: {
            return state
        }
    }
}

export const setRateForElemAC = (rateForElem) => ({type: SET_RATE_FOR_ELEM, rateForElem})
export const setSelectOptionsAC = (rates) => ({type:SET_SELECT_OPTIONS_CURRENCY, rates});
export const setExchangeRateAC = (exchangeRate) => ({type: SET_EXCHANGE_RATE, exchangeRate});
export const setBaseCurrencyAC = (baseCurrency) => ({type: SET_BASE_CURRENCY, baseCurrency});
export const setToggleFetchingAC = (isFetching) => ({ type: SET_TOGGLE_FETCHING, isFetching });

export default exchangeRatePageReducer;