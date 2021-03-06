import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

import ConverterExchange from './ConverterExchange';

import { setRateForElem, setExchangeRate, setBaseCurrency, setSelectOptions } from '../../redux/exchangeRateReducer';

class ConverterExchangeContainer extends Component {

    componentDidMount(){
        console.log(this.props)
        axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/${this.props.baseCurrencyPage.baseCurrencyExchange}`)
            .then(res => {
                console.log(res.data)
                this.props.setExchangeRate(res.data)
                this.props.setSelectOptions(res.data)
                this.props.setRateForElem(res.data)
                this.props.setBaseCurrency(this.props.baseCurrencyPage.baseCurrencyExchange)
            })
            
    }

    componentDidUpdate(){
        if(this.props.exchangeRatePage.baseCurrency !== this.props.exchangeRatePage.exchangeRate.base_code){
            axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/${this.props.exchangeRatePage.baseCurrency}`)
            .then(res => {
                this.props.setExchangeRate(res.data)
                this.props.setRateForElem(res.data)
            })
        }
    }

    render(){
        return (
            <ConverterExchange {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        exchangeRatePage: state.exchangeRatePage,
        baseCurrencyPage: state.baseCurrencyPage
    }
}

export default connect(mapStateToProps, {
    setRateForElem,
    setSelectOptions,
    setExchangeRate,
    setBaseCurrency
})(ConverterExchangeContainer)