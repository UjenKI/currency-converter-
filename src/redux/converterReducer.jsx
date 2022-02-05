const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const UPDATE_OUTPUT_VALUE = 'UPDATE_OUTPUT_VALUE';
const SET_EXCHANGE_RATE = 'SET_EXCHANGE_RATE';
const SET_INPUT_CURRENCY = 'SET_INPUT_CURRENCY';
const SET_OUTPUT_CURRENCY = 'SET_OUTPUT_CURRENCY';
const SET_SELECT_OPTIONS = 'SET_SELECT_OPTIONS';
const CHANGE_TOGGLE_FETCHING = 'CHANGE_TOGGLE_FETCHING';
const CHANGE_VALIDATE_ERROR = 'CHANGE_VALIDATE_ERROR';

let initialState = {
    exchangeRate: {},
    selectOptions: [],
    inputAmountMoney: '',
    outputAmountMoney: '',
    inputCurrency: 'UAH',
    outputCurrency: '',
    isCheckedBase: false,
    toggleFetching: false,
    isValidationError: false
}

const converterPageReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_TOGGLE_FETCHING: {
            return {
                ...state,
                toggleFetching: !state.toggleFetching
            }
        }
        case UPDATE_INPUT_VALUE: {
            return {
                ...state,
                inputAmountMoney: action.amountMoney
            }
        }
        case UPDATE_OUTPUT_VALUE: {
            return {
                ...state,
                outputAmountMoney: action.amountMoney
            }
        }
        case SET_EXCHANGE_RATE: {
            return {
                ...state,
                exchangeRate: {...action.exchangeRate}
            }
        }
        case SET_INPUT_CURRENCY: {
            return {
                ...state,
                inputCurrency: action.inputCurrency
            }
        }
        case SET_OUTPUT_CURRENCY: {
            return {
                ...state,
                outputCurrency: action.outputCurrency
            }
        }
        case SET_SELECT_OPTIONS: {

            const rates = action.options;

            console.log(rates);

            let options = []

            for(let key in rates.conversion_rates){
                options.push(key);
            }

            return {
                ...state,
                selectOptions: [...options]
            }
        }
        case CHANGE_VALIDATE_ERROR: {
            return {
                ...state,
                isValidationError: !state.isValidationError
            }
        }
        default: {
            return state
        }
    }
}

export const changeValidateErrorAC = () => ({type: CHANGE_VALIDATE_ERROR});
export const changeToggleFetchingAC = () => ({type: CHANGE_TOGGLE_FETCHING});
export const setSelectOptionsAC = (options) => ({type: SET_SELECT_OPTIONS, options});
export const updateInputValueAC = (amountMoney) => ({type: UPDATE_INPUT_VALUE, amountMoney});
export const updateOutputValueAC = (amountMoney) => ({type: UPDATE_OUTPUT_VALUE, amountMoney});
export const setExchangeRateAC = (exchangeRate) => ({type: SET_EXCHANGE_RATE, exchangeRate});
export const setInputCurrencyAC = (inputCurrency) => ({type: SET_INPUT_CURRENCY, inputCurrency});
export const setOutputCurrencyAC = (outputCurrency) => ({type: SET_OUTPUT_CURRENCY, outputCurrency});

export default converterPageReducer;