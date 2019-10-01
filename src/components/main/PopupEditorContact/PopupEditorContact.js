import React from 'react';
import { Link } from 'react-router-dom';

import cls from './PopupEditorContact.scss';
import Copied from '@/components/UI/Copied/Copied';

const PopupEditorContact = props => {
    return (
        <div className={cls.PopupEditorContact}>
            <ul className={cls.List}>
                <li>
                    <p
                        className={cls.copy}
                        onClick={(e) => props.handlerIsCopied(e)}
                    >
                        Copy address
                    </p>
                </li>
                <li>
                    <Link to="/contacts/edit">
                        <p className={cls.edit}>Edit contact</p>
                    </Link>
                </li>
                <li>
                    <p className={cls.delete}>Delete</p>
                </li>
            </ul>
        </div>
    );
};

export default PopupEditorContact;
