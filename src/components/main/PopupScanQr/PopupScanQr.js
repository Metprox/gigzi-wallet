import React, { useEffect } from 'react';
import cls from './PopupScanQr.scss';
import Close from '@/components/UI/Close/Close';

const PopupScanQr = props => {
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, []);

    return (
        <div className={cls.PopupScanQr}>
            <h1>Scan Qr code</h1>
            <p>
                Scan QR code to copy recepient wallet address in field
                automatically
            </p>
            <img src="../../../assets/images/qrcode.png" alt="qr code"/>
            <div
                className={cls.wrapClose}
                onClick={() => props.handlerDisabled(false)}
            >
                <Close />
            </div>
        </div>
    );
};
export default PopupScanQr;
