import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import cls from './FieldTextAmount.scss';

const FieldTextAmount = ({ label, value, onChange, currency, placeholder }) => {
    const [format, setFormat] = useState('#');
    const funcReplace = str => {
        const result = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        return result;
    };

    // const checkFormatValue = val => {
    //     const str = val.replace(/\s/g, '');
    //     const result = str.length;

    //     if (result % 3 == 0 && result != 0) {
    //         console.log(result % 3 == 0 && result != 0);

    //     }
    // };
    function splitIt(number, separator) {
        number += '';
        separator = separator == undefined ? ' ' : separator;

        var result = '',
            arr = [];

        for (var i = 0; i < number.length; i++) {
            arr.push(number[i]);

            if ((i - number.length) % 3 == 0 && i != 0) {
                arr[i] = separator + arr[i];
            }

            result += arr[i];
        }
        // const argv = result.replace(/\d/g, '#');
        // console.log(result)
        return result;
    }


    return (
        <label className={cls.FieldTextAmount}>
            <p className={cls.label}>{label}</p>
            <NumberFormat
                value={value}
                thousandSeparator={' '}
                onChange={e => {
                    onChange(e.target.value);
                }}
                placeholder={placeholder}
            />
            <div className={cls.block}>
                <span className={cls.currency}>{funcReplace(currency)}</span>
            </div>
        </label>
    );
};

export default FieldTextAmount;
