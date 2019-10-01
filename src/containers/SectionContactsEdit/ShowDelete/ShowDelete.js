import React, { Fragment } from 'react';

import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupDeleteContact from '@/components/main/PopupDeleteContact/PopupDeleteContact';

const ShowDelete = props => {
    return (
        <Fragment>
            <div onClick={() => props.setDeleteContact(false)}>
                <Backdrop />
            </div>
            <PopupDeleteContact />
        </Fragment>
    );
};

export default ShowDelete;
