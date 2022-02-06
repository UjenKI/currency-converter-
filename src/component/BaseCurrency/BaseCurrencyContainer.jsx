import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import BaseCurrency from './BaseCurrency';

import { setBaseCurrencyExchange, setExchangeRateOptions, setBaseSelectOptions } from '../../redux/baseCurrencyReducer';

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

export default connect(mapStateToProps, {
    setBaseCurrencyExchange,
    setExchangeRateOptions,
    setBaseSelectOptions
})(BaseCurrencyContainer);