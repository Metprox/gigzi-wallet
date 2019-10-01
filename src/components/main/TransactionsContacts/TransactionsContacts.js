import React, { useState } from 'react';

import cls from './TransactionsContacts.scss';
import Search from '@/components/UI/Search/Search';
import NoTransaction from './NoTransaction/NoTransaction';
import TransactionList from './TransactionList/TransactionList';
import TransactionMore from './TransactionMore/TransactionMore';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import Export from '@/components/UI/Export/Export';
import Filter from '@/components/UI/Filter/Filter';
import Calendar from '@/components/UI/Calendar/Calendar';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import TransactionFilter from './TransactionFilter/TransactionFilter';

const TransactionsContacts = props => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const classesSearch = [
        cls.Search,
        props.bigSearch ? cls.WidthSearch : null,
    ].join(' ');

    return (
        <div className={cls.TransactionsContacts}>
            <ContainerWrap>
                <header className={cls.Header}>
                    <h2>Transactions</h2>
                    {props.hiddenExport ? null : <Export />}
                </header>
                <div className={cls.Controls}>
                    <div className={classesSearch}>
                        <Search placeholder="Search" />
                    </div>
                    <div className={cls.Calendar}>
                        <Calendar />
                    </div>
                    <div
                        className={cls.Filter}
                        onClick={() => setToggleFilter(!toggleFilter)}
                    >
                        <Filter />
                    </div>
                    {toggleFilter ? (
                        <TransactionFilter setToggleFilter={setToggleFilter} />
                    ) : null}
                </div>
            </ContainerWrap>
            <div className={cls.Months}>
                <ContainerWrap>
                    <FlexWrap align="center" justify="between">
                        <p>1 November - 30 November</p>
                        {props.visibleFilterWallet ? (
                            <div className={cls.FilterWallet}>
                                <p>Usd</p>
                            </div>
                        ) : null}
                    </FlexWrap>
                </ContainerWrap>
            </div>
            {props.activeCard ? (
                <React.Fragment>
                    <TransactionList
                        activePopup={props.activePopup}
                        handlerPopup={props.handlerPopup}
                        listTransaction={props.listTransaction}
                    />
                    <TransactionMore />
                </React.Fragment>
            ) : (
                <NoTransaction />
            )}
        </div>
    );
};

export default TransactionsContacts;
