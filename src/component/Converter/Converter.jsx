import React from 'react';

import style from './Converter.module.css';

const Converter = (props) => {

    let state = props.converterPage;

    let options = state.selectOptions.map(item => <option key={item.id}>{item}</option>);

    const resetData = () => {
        props.updateInputValue('')
        props.setInputCurrency('')
        props.setOutputCurrency('')
    }

    let getInputDataValue = (e) => {

        // resetData();

        let inputAmountMoney = e.target.value;

        if(state.isValidationError === true) {
            props.changeValidateError()
        }

        const splitValueInput = inputAmountMoney.split(" ");

        const splitValue = splitValueInput.map(item => item.toUpperCase())
        
        if(splitValue.length < 3 ) return;

        if(isNaN(+splitValue[0])) return;
        
        if(splitValue[1].length < 3 && splitValue[3].length < 3) {
            return;
        } else {
            const arr = state.selectOptions;
            const res = splitValue.map((item) => {
                let number = parseInt(item);
                return number
            }).filter(num => !isNaN(num))
            console.log(res);

            props.updateInputValue(res[0])

            if(arr.includes(splitValue[1])){
                props.setInputCurrency(splitValue[1])
            } 
            if(arr.includes(splitValue[3])){
                props.setOutputCurrency(splitValue[3])
            } 
        }
    }

    let updateOutputAmountMoney = (e) => {
        let outputAmountMoney = e.target.value;
        props.updateOutputValue(outputAmountMoney);
    }

    let getProps = () => {
        console.log(props)
    }

    const exchangeAmountMoney = () => {

        if ( state.inputAmountMoney === '' || state.inputAmountMoney === null ||
             state.inputCurrency === '' || state.inputCurrency === null ||
             state.outputCurrency === '' || state.outputCurrency === null ) {
                props.changeValidateError();
            }


        const inputAmount = state.inputAmountMoney;

        props.changeToggleFetching();
        
        for (let key in state.exchangeRate.conversion_rates){
            if(key === state.outputCurrency){
                const exchangeRateValue = state.exchangeRate.conversion_rates[key];
                const res = inputAmount * exchangeRateValue;
                props.updateOutputValue(res);
            }
        }



        getProps()

    }

    return (
        <div className={style.converter__wrapper}>
            <h1>Converter</h1>
            <div className={style.converter}>
                <div className={state.isValidationError == false ? style.converter__item : style.converter__item__error}>
                    <label htmlFor="inputValue">Base:</label>
                    <input id="inputValue" className={state.isValidationError == false ? '' : style.validate_error} onChange={ getInputDataValue } type="text" placeholder="Enter the amount of money" />
                </div>
                <button onClick={exchangeAmountMoney} className={style.exchange__btn}>CONVERT</button>
                <div className={style.converter__item}>
                    {/* <select name="exchangeValue" id="outputValue">
                        {options}
                    </select> */}
                    <input onChange={ updateOutputAmountMoney } type="text" value={state.outputAmountMoney} placeholder="Result amount of money"/>
                </div>
            </div>
        </div>
    )
}

export default Converter;