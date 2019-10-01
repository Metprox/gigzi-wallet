import React, { Fragment, useState } from 'react';

import cls from './Identity.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import VerificationPopup from '../VerificationPopup/VerificationPopup';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import FieldSelected from '@/components/UI/FieldSelected/FieldSelected';

const Identity = props => {
    const [list, setList] = useState([
        { id: 1, value: 'National passport' },
        { id: 2, value: 'Resident permit' },
        { id: 3, value: 'National identity document' },
        { id: 4, value: 'Driver license' },
    ]);
    const [nameFileFront, setNameFileFront] = useState('');
    const [nameFileBack, setNameFileBack] = useState('');
    const [statusFileFront, setStatusFileFront] = useState('Upload');
    const [statusFileBack, setStatusFileBack] = useState('Upload');
    const [btnInProgress, setBtnInProgress] = useState(false);

    const fabricsType = (list, id) => {
        const answer = list.find(item => item.id === id);
        const result = { value: answer.value };
        return result;
    };

    function checkName(event, setFunc) {
        setFunc(event.target.value.replace(/.*\\/, ''));
    }

    function checkUpload(file, setCheckFunc) {
        setCheckFunc('Replace');
    }

    function routeBack() {
        props.history.push(`/${localStorage.getItem('route')}`);
    }

    const classesFileNameFront = [
        cls.NameDoc,
        !!nameFileFront ? cls.ActiveName : null,
    ].join(' ');
    const classesFileNameBack = [
        cls.NameDoc,
        !!nameFileBack ? cls.ActiveName : null,
    ].join(' ');

    return (
        <div className={cls.Identity}>
            <div className={cls.Title}>
                <ContainerWrap>
                    <h3>Identity Documents</h3>
                </ContainerWrap>
            </div>
            <ContainerWrap>
                <div className={cls.wrapFieldSelected}>
                    <FieldSelected
                        label="Type of document"
                        list={list}
                        fabricSelected={fabricsType}
                    />
                </div>
            </ContainerWrap>

            <div className={cls.Documents}>
                <ContainerWrap>
                    <div className={cls.flexDocument}>
                        <div className={cls.offsetRight}>
                            <label>
                                <p className={cls.DescriptionInput}>
                                    Front of document
                                </p>
                                <input
                                    type="file"
                                    onChange={e => {
                                        checkName(e, setNameFileFront);
                                        checkUpload(
                                            nameFileFront,
                                            setStatusFileFront,
                                        );
                                    }}
                                />
                                <div className={cls.BlockDoc}>
                                    <span className={classesFileNameFront}>
                                        {nameFileFront
                                            ? nameFileFront
                                            : 'jpg, tiff or pdf only'}
                                    </span>
                                    <span className={cls.TextDoc}>
                                        {statusFileFront}
                                    </span>
                                </div>
                            </label>
                        </div>
                        <label>
                            <p className={cls.DescriptionInput}>
                                Back of document
                            </p>
                            <input
                                type="file"
                                onChange={e => {
                                    checkName(e, setNameFileBack);
                                    checkUpload(
                                        nameFileBack,
                                        setStatusFileBack,
                                    );
                                }}
                            />
                            <div className={cls.BlockDoc}>
                                <span className={classesFileNameBack}>
                                    {nameFileBack
                                        ? nameFileBack
                                        : 'jpg, tiff or pdf only'}
                                </span>
                                <span className={cls.TextDoc}>
                                    {statusFileBack}
                                </span>
                            </div>
                        </label>
                    </div>
                </ContainerWrap>
            </div>
            <div className={cls.wrapBottomBlock}>
                <div className={cls.FooterNote}>
                    <p>
                        By clicking ‘Verify’ you are committing to the purchase
                        of currency and entering into a legally binding
                        contract, as detailed in our{' '}
                        <span>terms&nbsp;and&nbsp;conditions</span>
                    </p>
                </div>
                <div
                    className={cls.Verify}
                    onClick={() => setBtnInProgress(true)}
                >
                    <ButtonMain type="submit" value="Verify" />
                </div>
            </div>
            {btnInProgress ? (
                <Fragment>
                    <div onClick={routeBack}>
                        <Backdrop />
                    </div>
                    <VerificationPopup routeBack={routeBack} />
                </Fragment>
            ) : null}
        </div>
    );
};

export default Identity;
