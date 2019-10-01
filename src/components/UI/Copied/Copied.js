import React, { useEffect, useState } from 'react';
import cls from './Copied.scss';

const Copied = props => {
    // const [x, setX] = useState(window.clientX);
    // const [y, setY] = useState(window.clientY);

    return (
        <div className={cls.Copied} style={{ top: props.y, left: props.x }}>
            <p>Copied</p>
        </div>
    );
};
export default Copied;
