import React from 'react';

import cls from './SendingTab.scss';

const SendingTab = ({ name, formToggle, handlerToggleTab, bool }) => {
    return (
        <div className={cls.SendingTab}>
            <button
                className={formToggle ? cls.ActiveTab : null}
                onClick={() => handlerToggleTab(bool)}
            >
                {name}
            </button>
        </div>
    );
};

export default SendingTab;
