import React from 'react';

import cls from './FormReceive.scss';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import ButtonText from '@/components/UI/ButtonText/ButtonText';

const Receive = props => {
    return (
        <form className={cls.FormReceive}>
            <div className={cls.QrCode}>
                <img src="/assets/svg/sendingIcons/QR-code.png" alt="QR code" />
                <p>
                    Share your QR-code and Gigzi address to receive tokens via
                    Skype, Telegram etc.
                </p>
            </div>
            <div className={cls.Share}>
                <div className={cls.Address}>
                    <p>Your Address</p>
                    <ButtonText value="Copy" />
                </div>
                <input
                    className={cls.ShareInput}
                    type="text"
                    defaultValue="0x974e0a821186b3e0746146e0fbd123158c81a2b80x974e0a821186b3e0746146e0fbd123158c81a2b8"
                    readOnly
                />
                <div className={cls.btn}>

                <ButtonMain type="submit" value="Share" disabled={false} />
                </div>
            </div>
        </form>
    );
};

export default Receive;
