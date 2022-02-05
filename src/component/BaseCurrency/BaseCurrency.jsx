import React from 'react';

import style from './BaseCurrency.module.css';

const BaseCurrency = (props) => {
    const state = props.baseCurrencyPage;

    const setBaseCurrency = (e) => {
        const base = e.target.value;
        props.setBaseCurrencyExchange(base);
        console.log(props)
    }


    const Options = state.baseSelectOptions.map((item, i) => {
        return (
            <option key={i} value={item}>{item}</option>
        )
    });

    return (
        <div className={style.base__wrapper}>
            <select onChange={ setBaseCurrency } name="exchangeRate" id="exchangeRate">
                { Options }
            </select>
        </div>
    )
}

export default BaseCurrency;