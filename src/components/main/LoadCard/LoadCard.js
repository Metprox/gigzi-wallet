import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { fabricAll } from '@/tools/customFunc';
import cls from './LoadCard.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import Settings from '@/assets/svg/icons/settings.svg';
import PopupWalletList from './PopupWalletList/PopupWalletList';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupDebitConfirm from '@/components/main/PopupDebitConfirm/PopupDebitConfirm';
import PopupConfirmSuccess from '@/components/main/PopupConfirmSuccess/PopupConfirmSuccess';
import FieldSelected from '@/components/UI/FieldSelected/FieldSelected';

const LoadCard = props => {
    const [amount, setAmount] = useState('30000');
    const [list, setList] = useState([
        { id: 1, value: '30457.80 USD', currency: 'Wallet Us Dollar' },
        { id: 2, value: '23732.46 USD', currency: 'Wallet Us Dollar' },
        { id: 3, value: '1782.84 GZG', currency: 'Wallet Gigzi Gold' },
        {
            id: 4,
            value: '30464.54 GZP license',
            currency: 'Wallet Gigzi Platinum',
        },
    ]);
    const [isToggleConfirm, setIsToggleConfirm] = useState(false);
    const [isToggleSuccess, setIsToggleSuccess] = useState(false);
    const [isToggleWallet, setIsToggleWallet] = useState(false);

    function handlerSuccess(statusPopup) {
        setIsToggleConfirm(false);
        setSsToggleSuccess(true);
    }

    return (
        <div className={cls.LoadCard}>
            <ContainerWrap>
                <div className={cls.TitleWrap}>
                    <FlexWrap align="center" justify="between">
                        <h6>Load Card</h6>
                        <Link to="/debit/settings">
                            <div className={cls.Settings}>
                                <FlexWrap align="center" justify="between">
                                    <Settings />
                                    <p>Card settings</p>
                                </FlexWrap>
                            </div>
                        </Link>
                    </FlexWrap>
                </div>
                <div className={cls.From}>
                    <FieldSelected
                        label="From wallet"
                        list={list}
                        fabricSelected={fabricAll}
                    />
                </div>
                <div className={cls.Amount}>
                    <p>Amount</p>
                    <div className={cls.AmountValue}>
                        <input
                            type="text"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        <div className={cls.AmountCurrency}>
                            <span>Usd</span>
                        </div>
                    </div>
                </div>
                <p className={cls.DescBtn}>
                    For that transaction fees will be taken
                </p>
                <div
                    className={cls.btnSubmit}
                    onClick={() => setIsToggleConfirm(true)}
                >
                    <ButtonMain type="submit" value="Confirm" />
                </div>
            </ContainerWrap>
            {isToggleConfirm ? (
                <Fragment>
                    <div onClick={() => setIsToggleConfirm(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitConfirm
                        setConfirm={setIsToggleConfirm}
                        setSuccess={setIsToggleSuccess}
                    />
                </Fragment>
            ) : null}
            {isToggleSuccess ? (
                <Fragment>
                    <div onClick={() => setIsToggleSuccess(false)}>
                        <Backdrop />
                    </div>
                    <PopupConfirmSuccess
                        handlerSuccess={setIsToggleSuccess}
                        title="Withdrawn"
                        value="30 000"
                        wallet="usd"
                        hash="51eaf04f9dbbc1417dc97e789edd0c37ecda88bac490434e367ea81b71b7b015"
                    />
                </Fragment>
            ) : null}
        </div>
    );
};

export default LoadCard;
