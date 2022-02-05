import React from 'react';

import BaseCurrencyContainer from '../BaseCurrency/BaseCurrencyContainer';
import Converter from './Converter';

const ConverterPage = (props) => {

    const PageItem = !props.baseCurrencyPage.baseCurrencyExchange ? <BaseCurrencyContainer/> : <Converter {...props} />
    return (
        <div>
            { PageItem }
        </div>
    )
}

export default ConverterPage;