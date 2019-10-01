import React, { Fragment } from 'react';

import Backdrop from '@/components/UI/Backdrop/Backdrop';
import PopupContact from '@/components/main/PopupContact/PopupContact';

const ShowEdit = props => {
    return (
        <Fragment>
            <div onClick={() => props.setEditContact(false)}>
                <Backdrop />
            </div>
            <PopupContact
                showPopupContact={props.setEditContact}
                title="Edit contact"
                btnName="Save"
                valueName="Alex Barnett"
                valueAddress="0x126bf276ba4c7111dbddbb542718cff678c9b3ce"
                valueNotes="My old friend Alex from Chicago. I need to return him 10,000 USD till next year."
            />
        </Fragment>
    );
};

export default ShowEdit;
