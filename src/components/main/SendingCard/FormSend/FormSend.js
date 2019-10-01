import React, { useState, useEffect } from 'react';

import cls from './FormSend.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import SendingAddressList from '../SendingAddressList/SendingAddressList';
import User from '@/assets/svg/sendingIcons/user.svg';
import Dollar from '@/assets/svg/sendingIcons/dollar.svg';
import Gigzi from '@/assets/svg/icons/gigzi.svg';
import Ethereum from '@/assets/svg/icons/ethereumIcon.svg';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupScanQr from '@/components/main/PopupScanQr/PopupScanQr';
import QrSvg from '@/assets/svg/icons/qr-scan.svg';

const FormSend = ({
    listActive,
    setListActive,
    Currency,
    offFirstAmount,
    placeholder,
    svg,
    handlerConfirm,
}) => {
    const [list, setList] = useState([
        {
            id: 1,
            name: 'Alex Anderson',
        },
        {
            id: 2,
            name: 'Alex Bareentt',
        },
        {
            id: 3,
            name: 'Alex Barrnett',
        },
    ]);
    const [address, setAddress] = useState('');
    const [isScanQr, setIsScanQr] = useState(false);
    useEffect(() => {
        document.addEventListener('click', handlerFormSencList, false);
        return () => {
            document.removeEventListener('click', handlerFormSencList, false);
        };
    }, []);

    function handlerFormSencList(event) {
        console.log(event.target.className);
        if (event.target.className !== cls.UserIcon) {
            if (event.target.className !== cls.AddressLabel) {
                if (event.target.className !== cls.AddressBlock) {
                    if (event.target.className !== cls.AddressInput) {
                        setListActive(false);
                    }
                }
            }
        }
    }

    function fabricSvg(icon) {
        switch (icon) {
            case 'gigzi':
                return <Gigzi style={{ width: 20 }} />;
            case 'ethereum':
                return <Ethereum />;
            default:
                return '';
        }
    }

    return (
        <form className={cls.FormSend} onSubmit={e => e.preventDefault()}>
            <div
                className={cls.Address}
                style={offFirstAmount ? { marginTop: '57px' } : null}
            >
                <div className={cls.flexLabel}>
                    <p className={cls.AddressLabel}>Address</p>
                    <div
                        className={cls.scanQR}
                        onClick={() => setIsScanQr(true)}
                    >
                        <QrSvg />
                        Scan QR code
                    </div>
                </div>
                <label className={cls.AddressBlock}>
                    <input
                        className={cls.AddressInput}
                        type="text"
                        placeholder="Enter address or search by name"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <div
                    className={cls.UserIcon}
                    onClick={() => setListActive(!listActive)}
                >
                    <div className={listActive ? cls.ActiveList : null}>
                        <User />
                    </div>
                </div>
                {listActive && (
                    <SendingAddressList list={list} setAddress={setAddress} />
                )}
            </div>
            <div className={cls.Amount}>
                <div className={cls.AmountFlex}>
                    <p>Amount</p>
                    <div className={cls.MoreLess}>
                        <a href="#">Min</a>
                        <a href="#">Max</a>
                    </div>
                </div>
                {!offFirstAmount && (
                    <label>
                        {fabricSvg(svg)}
                        <input type="text" placeholder={placeholder} />
                        <div className={cls.Currency}>
                            <div>
                                <p>{Currency}</p>
                            </div>
                        </div>
                    </label>
                )}
                <label>
                    <Dollar />
                    <input type="text" placeholder="United states dollar" />
                    <div className={cls.Currency}>
                        <div>
                            <p>Usd</p>
                        </div>
                    </div>
                </label>
            </div>
            <div
                className={cls.Comment}
                style={offFirstAmount ? { marginBottom: '78px' } : null}
            >
                <p>Comment</p>
                <input type="text" placeholder="Enter comment" />
            </div>
            <div className={cls.Submit}>
                <p>For that transaction fees will be taken</p>
                <div className={cls.btn} onClick={() => handlerConfirm(true)}>
                    <ButtonMain
                        type="submit"
                        value="Confirm"
                        disabled={false}
                    />
                </div>
            </div>
            <div style={{ display: isScanQr ? 'block' : 'none' }}>
                <div onClick={() => setIsScanQr(false)}>
                    <Backdrop />
                </div>
                <PopupScanQr handlerDisabled={setIsScanQr} />
            </div>
        </form>
    );
};

export default FormSend;
