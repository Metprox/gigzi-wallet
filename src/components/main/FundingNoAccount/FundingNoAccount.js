import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './FundingNoAccount.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const FundingNoAccount = props => {
    return (
        <div className={cls.FundingNoAccount}>
            <div className={cls.Container}>

                <h6>No payment accounts found</h6>
                <p className={cls.description}>
                    Add your bank account information to get started
                </p>
                <NavLink className={cls.addBtn} to="/funding/add">
                    <ButtonMain type="submit" value="Add a payment account" />
                </NavLink>
            </div>
        </div>
    );
};

export default FundingNoAccount;
