import React from 'react';
import LazyLoad from 'react-lazyload';
import Loader from '../loader';

import style from './ConverterExchange.module.css';

const ConverterExchange = (props) => {

    const state = props.exchangeRatePage;
    // const loader = state.isFetching ? <Loader /> : null;

    const rateItem = state.rateForElem.map(item => <LazyLoad height={200}><li className={style.list__item}><div><p><span>1</span> {state.baseCurrency}</p></div><div><p><span>{item[1]}</span> {item[0]}</p></div></li></LazyLoad>)
    
    const options = state.selectOptions.map(item => <option key={item.id} value={item}>{item}</option>)

    let getBaseCurrencyValue = (e) => {
        let selected = e.target.value;
        props.setBaseCurrency(selected);
    }

    return (
        <div className={style.exchangeRate__wrapper}>
            <h1>Current exchange rate</h1>
            <div className={style.exchange__rate}>
                <p>select current currency:</p>
                <div className={style.exchange__rate__list}>
                    <select onChange={ getBaseCurrencyValue } name="exchangeRate" id="exchangeRate">
                        { options }
                    </select>
                </div>
            </div>
            <button className={style.refresh__exchange}>Refresh exchange rate</button>
            <div className={style.rates__list}>
                <ul>
                    {rateItem}
                </ul>
            </div>
        </div>
        
    )
}

export default ConverterExchange;
