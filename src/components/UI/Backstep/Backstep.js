import React from 'react';

import cls from './Backstep.scss';

const Backstep = props => {
    const fabricRouters = name => {
        switch (name) {
            case 'gigzi':
                return 'Gigzi';
            case 'ethereum':
                return 'Ethereum';
            case 'national':
                return 'National';
            case 'converter':
                return 'Converter';
            case 'debit':
                return 'Debit Cards';
            case 'funding':
                return 'Funding Options';
            case 'redeem':
                return 'Redeem Assets';
            case 'charts':
                return 'Charts';
            case 'contacts':
                return 'Contacts';
            default:
                return '';
        }
    };
    // console.log(props);
    return (
        <div
            className={cls.Backstep}
            onClick={() => {
                props.history.push(`/${localStorage.getItem('route')}`);
            }}
        >
            <h3>Back to {fabricRouters(localStorage.getItem('route'))}</h3>
        </div>
    );
};

export default Backstep;
