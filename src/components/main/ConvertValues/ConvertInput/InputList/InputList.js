import React, { useState } from 'react';

import cls from './InputList.scss';
import InputItem from './InputItem/InputItem';

const InputList = ({ isToggle, setIsToggle, list, setRightCurrency }) => {
    return (
        <div className={cls.InputList}>
            {isToggle
                ? list.map(currency => {
                      return (
                          <InputItem
                              name={currency.name}
                              icon={currency.icon}
                              id={currency.id}
                              key={currency.id}
                              setIsToggle={setIsToggle}
                              setRightCurrency={setRightCurrency}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default InputList;
