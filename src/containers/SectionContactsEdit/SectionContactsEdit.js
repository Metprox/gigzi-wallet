import React, { useState } from 'react';

import cls from './SectionContactsEdit.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ButtonText from '@/components/UI/ButtonText/ButtonText';
import Backstep from '@/components/UI/Backstep/Backstep';
import ShowEdit from './ShowEdit/ShowEdit';
import ShowDelete from './ShowDelete/ShowDelete';
import TransactionsContacts from '@/components/main/TransactionsContacts/TransactionsContacts';

const SectionContactsEdit = props => {
    const [listTransaction, setListTransaction] = useState([
        {
            name: 'Received',
            from: 'Gigzi Black',
            to: '',
            statusArrow: 1,
            money: {
                state: true,
                sum: 2495.48,
                sumWallet: 'Gzb',
                usd: 3928.81,
            },
            date: {
                month: 'November',
                day: 3,
                year: 2018,
                time: '14:43',
            },
        },
        {
            name: 'Sent',
            from: 'Gigzi Black',
            to: '',
            statusArrow: 2,
            money: {
                state: false,
                sum: 479.65,
                sumWallet: 'Gzb',
                usd: 643,
            },
            date: {
                month: 'November',
                day: 2,
                year: 2018,
                time: '12:36',
            },
        },
        {
            name: 'Sent Gigzi Black',
            from: 'Gigzi Black',
            to: '',
            statusArrow: 1,
            money: {
                state: true,
                sum: 2495.48,
                sumWallet: 'Gzb',
                usd: 3929.81,
            },
            date: {
                month: 'November',
                day: 2,
                year: 2018,
                time: '09:12',
            },
        },
    ]);
    const [activeCard, setActiveCard] = useState(true);
    const [editContact, setEditContact] = useState(false);
    const [deleteContact, setDeleteContact] = useState(false);
    const [activePopup, setActivePopup] = useState(null);

    const handlerPopupActive = id => {
        setActivePopup(id);
    };

    const handlerCardActive = id => {
        setActivePopup(id);
    };

    return (
        <section className={cls.SectionContactsEdit}>
            <div className={cls.wrapBackstep}>
                <Backstep {...props} />
            </div>
            <header className={cls.Header}>
                <ContainerWrap>
                    <FlexWrap align="center" justify="between">
                        <h2>Alex Barnett</h2>
                        <div className={cls.Btns}>
                            <div
                                className={cls.Edit}
                                onClick={() => setEditContact(true)}
                            >
                                <p>Edit</p>
                            </div>
                            <div
                                className={cls.Delete}
                                onClick={() => setDeleteContact(true)}
                            >
                                <p>Delete</p>
                            </div>
                        </div>
                    </FlexWrap>
                </ContainerWrap>
            </header>
            <div className={cls.Descriptions}>
                <ContainerWrap>
                    <div className={cls.flexDescription}>
                        <div className={cls.Address}>
                            <FlexWrap align="start" justify="between">
                                <p className={cls.Label}>Address</p>
                                <ButtonText value="Copy" />
                            </FlexWrap>
                            <p className={cls.Text}>
                                0x126bf276ba4c7111dbddbb542718cff678c9b3ce
                            </p>
                        </div>
                        <div className={cls.Notes}>
                            <p className={cls.Label}>Notes</p>
                            <p className={cls.Text}>
                                My old friend Alex from Chicago. I need to
                                return him 10,000 USD till next year.
                            </p>
                        </div>
                    </div>
                </ContainerWrap>
            </div>
            <TransactionsContacts
                activeCard={activeCard}
                hiddenExport={true}
                bigSearch={true}
                activePopup={activePopup}
                listTransaction={listTransaction}
                handlerPopup={handlerPopupActive}
                handlerCardActive={handlerCardActive}
            />
            {editContact ? <ShowEdit setEditContact={setEditContact} /> : null}
            {deleteContact ? (
                <ShowDelete setDeleteContact={setDeleteContact} />
            ) : null}
        </section>
    );
};

export default SectionContactsEdit;
