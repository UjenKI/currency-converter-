import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

import ConverterExchange from './ConverterExchange';

import { setRateForElemAC, setExchangeRateAC, setBaseCurrencyAC, setSelectOptionsAC } from '../../redux/exchangeRateReducer';

class ConverterExchangeContainer extends Component {

    componentDidMount(){
        console.log(this.props)
        axios.get(`https://v6.exchangerate-api.com/v6/7120f8b4af81731db296136f/latest/${this.props.exchangeRatePage.baseCurrency}`)
            .then(res => {
                console.log(res.data)
                this.props.setExchangeRate(res.data)
                this.props.setSelectOptions(res.data)
                this.props.setRateForElem(res.data)
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
        exchangeRatePage: state.exchangeRatePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRateForElem: (rateForElem) => {
            dispatch(setRateForElemAC(rateForElem))
        },
        setSelectOptions: (rates) => {
            dispatch(setSelectOptionsAC(rates))
        },
        setExchangeRate: (exchangeRate) => {
            dispatch(setExchangeRateAC(exchangeRate))
        },
        setBaseCurrency: (baseCurrency) => {
            dispatch(setBaseCurrencyAC(baseCurrency))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConverterExchangeContainer)