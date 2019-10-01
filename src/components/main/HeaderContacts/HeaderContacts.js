import React, { Fragment, useState } from 'react';

import cls from './HeaderContacts.scss';
import Search from '@/components/UI/Search/Search';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupContact from '@/components/main/PopupContact/PopupContact';
import ButtonAdd from '@/components/UI/ButtonAdd/ButtonAdd';
import DescriptionCountList from '@/components/UI/DescriptionCountList/DescriptionCountList';

const HeaderContacts = props => {
    const [addNewContact, setAddNewContact] = useState(false);

    return (
        <Fragment>
            <div className={cls.HeaderContacts}>
                <ContainerWrap>
                    <div className={cls.flex}>
                        <div className={cls.Search}>
                            <Search placeholder="Search by name or address" />
                        </div>
                        <div
                            className={cls.btnWrap}
                            onClick={() => setAddNewContact(true)}
                        >
                            <ButtonAdd
                                value="New contact"
                                disabled={addNewContact}
                            />
                        </div>
                    </div>
                </ContainerWrap>
            </div>
            <DescriptionCountList count={props.countList} value="Contacts" />
            {addNewContact ? (
                <Fragment>
                    <div onClick={() => setAddNewContact(false)}>
                        <Backdrop />
                    </div>
                    <PopupContact
                        showPopupContact={setAddNewContact}
                        title="New contact"
                        btnName="Create"
                    />
                </Fragment>
            ) : null}
        </Fragment>
    );
};

export default HeaderContacts;
