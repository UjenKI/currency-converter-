import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import Converter from './Converter';
import ConverterPage from './ConverterPage';

import { changeValidateErrorAC, changeToggleFetchingAC, updateOutputValueAC, updateInputValueAC, setExchangeRateAC, setInputCurrencyAC, setOutputCurrencyAC, setSelectOptionsAC} from '../../redux/converterReducer';

class ConverterContainer extends Component {

    componentDidMount(){
        axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/${this.props.baseCurrencyPage.baseCurrencyExchange}`)
            .then(res => {
                console.log(res.data)
                this.props.setExchangeRate(res.data);
                this.props.setSelectOptions(res.data.conversion_rates);
                // console.log(this.props)
            })
    }

    componentDidUpdate(){
        if(this.props.converterPage.inputCurrency !== this.props.converterPage.exchangeRate.base_code){
            axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/${this.props.converterPage.inputCurrency}`)
            .then(res => {
                this.props.setExchangeRate(res.data)
            })
        }
    }

    render(){
        return (
            <ConverterPage {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        converterPage: state.converterPage,
        baseCurrencyPage: state.baseCurrencyPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValidateError: () => {
            dispatch(changeValidateErrorAC());
        },
        changeToggleFetching: () => {
            dispatch(changeToggleFetchingAC());
        },
        setExchangeRate: (exchangeRate) => {
            dispatch(setExchangeRateAC(exchangeRate));
        },
        setInputCurrency: (inputCurrency) => {
            dispatch(setInputCurrencyAC(inputCurrency));
        },
        setOutputCurrency: (outputCurrency) => {
            dispatch(setOutputCurrencyAC(outputCurrency));
        },
        updateInputValue: (inputValue) => {
            dispatch(updateInputValueAC(inputValue));
        },
        updateOutputValue: (inputValue) => {
            dispatch(updateOutputValueAC(inputValue));
        },
        setSelectOptions: (options) => {
            dispatch(setSelectOptionsAC(options));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConverterContainer);