import React from 'react';
import { Link } from 'react-router-dom';

import cls from './PopupFundingManageEdit.scss';

const PopupFundingManageEdit = props => {
    return (
        <div className={cls.PopupFundingManageEdit}>
            <ul className={cls.List}>
                <li>
                    <Link to="/funding/edit">
                        <p className={cls.edit}>Edit</p>
                    </Link>
                </li>
                <li className={cls.delete}>
                    <p>Delete</p>
                </li>
            </ul>
        </div>
    );
};

export default PopupFundingManageEdit;
