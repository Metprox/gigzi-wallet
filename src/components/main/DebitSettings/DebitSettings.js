import React, { useState, Fragment } from 'react';

import cls from './DebitSettings.scss';
import DebitInfo from './DebitInfo/DebitInfo';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupDebitCheck from '@/components/main/PopupDebitCheck/PopupDebitCheck';
import PopupDebitSuccess from '@/components/main/PopupDebitSuccess/PopupDebitSuccess';
import PopupDebitReplacement from '@/components/main/PopupDebitReplacement/PopupDebitReplacement';

const DebitSettings = props => {
    const [isPinCode, setIsPinCode] = useState(false);
    const [isPinCodeSuccess, setIsPinCodeSuccess] = useState(false);
    const [isReplacement, setIsReplacement] = useState(false);
    const [isReplacementSuccess, setIsReplacementSuccess] = useState(false);
    const [isSuspend, setIsSuspend] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [isReportSuccess, setIsReportSuccess] = useState(false);

    return (
        <div className={cls.DebitSettings}>
            <ul className={cls.List}>
                <li>
                    <span>Pin-code</span>
                    <span onClick={() => setIsPinCode(true)}>Change</span>
                </li>
                <li>
                    <span>Suspend card</span>
                    <span onClick={() => setIsSuspend(true)}>Edit</span>
                </li>
                <li>
                    <span>Report lost/stolen</span>
                    <span onClick={() => setIsReport(true)}>Report</span>
                </li>
                <li>
                    <span>Order replacement</span>
                    <span onClick={() => setIsReplacement(true)}>Order</span>
                </li>
            </ul>
            <DebitInfo />
            {isPinCode ? (
                <Fragment>
                    <div onClick={() => setIsPinCode(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitCheck
                        title="Change pin-code"
                        description="New pin-code will be send to your email address"
                        btnCancel="Cancel"
                        btnSuccess="Change"
                        funcStatus={setIsPinCode}
                        funcToSuccess={setIsPinCodeSuccess}
                    />
                </Fragment>
            ) : null}
            {isPinCodeSuccess ? (
                <Fragment>
                    <div onClick={() => setIsPinCodeSuccess(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitSuccess
                        title="Successfully Sent"
                        description="You will receive a new pin-code within 10 minutes"
                        funcOverSuccess={setIsPinCodeSuccess}
                    />
                </Fragment>
            ) : null}
            {isReplacement ? (
                <Fragment>
                    <div onClick={() => setIsReplacement(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitReplacement
                        setIsReplacement={setIsReplacement}
                        setIsReplacementSuccess={setIsReplacementSuccess}
                    />
                </Fragment>
            ) : null}
            {isReplacementSuccess ? (
                <Fragment>
                    <div onClick={() => setIsReplacementSuccess(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitSuccess
                        title="SUCCESS"
                        description="You will receive a card within week."
                        funcOverSuccess={setIsReplacementSuccess}
                    />
                </Fragment>
            ) : null}
            {isSuspend ? (
                <Fragment>
                    <div onClick={() => setIsSuspend(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitCheck
                        title="Suspend card"
                        description="Are you sure you want to suspend card ?"
                        btnCancel="yes"
                        btnSuccess="no"
                        funcStatus={setIsSuspend}
                        // funcToSuccess={setPinCodeSuccess}
                    />
                </Fragment>
            ) : null}
            {isReport ? (
                <Fragment>
                    <div onClick={() => setIsReport(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitCheck
                        title="REPORT LOST/STOLEN"
                        description="Your card will be automatically restored and delivered within a week."
                        btnCancel="Cancel"
                        btnSuccess="Report"
                        funcStatus={setIsReport}
                        funcToSuccess={setIsReportSuccess}
                    />
                </Fragment>
            ) : null}
            {isReportSuccess ? (
                <Fragment>
                    <div onClick={() => setIsPinCodeSuccess(false)}>
                        <Backdrop />
                    </div>
                    <PopupDebitSuccess
                        title="SUCCESS"
                        description="Your card is now blocked. You will receive a  new card within week."
                        funcOverSuccess={setIsReportSuccess}
                    />
                </Fragment>
            ) : null}
        </div>
    );
};

export default DebitSettings;
