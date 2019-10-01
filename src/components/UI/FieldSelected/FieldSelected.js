import React, { useState, useEffect, Fragment } from 'react';

import cls from './FieldSelected.scss';
import List from './List/List';

const FieldSelected = props => {
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(1);

    const transformSpan = () => {
        const resum = props.fabricSelected(props.list, selected);
    };

    useEffect(() => {
        transformSpan();
    }, []);

    const classesToggle = [cls.Input, toggle ? cls.active : null].join(' ');

    return (
        <div className={cls.FieldSelected}>
            <p className={cls.label}>{props.label}</p>
            <div className={classesToggle} onClick={() => setToggle(!toggle)}>
                <p className={cls.Holder}>
                    {props.fabricSelected(props.list, selected).value}{' '}
                    {props.fabricSelected(props.list, selected).currency ? (
                        <span className={cls.currency}>
                            {
                                props.fabricSelected(props.list, selected)
                                    .currency
                            }
                        </span>
                    ) : null}
                </p>
                {toggle ? (
                    <List setSelected={setSelected} list={props.list} />
                ) : null}
            </div>
        </div>
    );
};

export default FieldSelected;
