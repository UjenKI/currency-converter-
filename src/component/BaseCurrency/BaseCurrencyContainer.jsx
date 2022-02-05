import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import BaseCurrency from './BaseCurrency';

import { setBaseCurrencyExchangeAC, setExchangeRateOptionsAC, setBaseSelectOptionsAC } from '../../redux/baseCurrencyReducer';

class BaseCurrencyContainer extends Component {

    componentDidMount(){
        axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/AWG`)
            .then(res => {
                this.props.setExchangeRateOptions(res.data);
                this.props.setBaseSelectOptions(res.data);
            })
    }

    render(){
        return(
            <BaseCurrency {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrencyPage: state.baseCurrencyPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBaseCurrencyExchange: (baseCurrencyExchange) => {
            dispatch(setBaseCurrencyExchangeAC(baseCurrencyExchange))
        },
        setExchangeRateOptions: (baseExchangeRate) => {
            dispatch(setExchangeRateOptionsAC(baseExchangeRate))
        },
        setBaseSelectOptions: (baseRates) => {
            dispatch(setBaseSelectOptionsAC(baseRates))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseCurrencyContainer);