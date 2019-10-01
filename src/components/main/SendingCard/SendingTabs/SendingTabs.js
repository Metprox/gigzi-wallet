import React from 'react';

import cls from './SendingTabs.scss';
import SendingTab from './SendingTab/SendingTab';

const SendingTabs = props => {
    return (
        <div className={cls.SendingTabs}>
            <SendingTab
                name="Send"
                formToggle={props.formToggle}
                handlerToggleTab={props.handlerToggleTab}
                bool={true}
            />
            <SendingTab
                name="Receive"
                formToggle={!props.formToggle}
                handlerToggleTab={props.handlerToggleTab}
                bool={false}
            />
        </div>
    );
};

export default SendingTabs;
