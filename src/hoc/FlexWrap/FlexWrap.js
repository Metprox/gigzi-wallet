import React from 'react';

const FlexWrap = props => {
    let align = null;
    let justify = null;
    let wrap = null;

    if (props.align == 'start') {
        align = 'flex-start';
    } else if (props.align == 'end') {
        align = 'flex-end';
    } else if (props.align == 'center') {
        align = 'center';
    } else {
        align = 'baseline';
    }

    if (props.justify == 'start') {
        justify = 'flex-start';
    } else if (props.justify == 'end') {
        justify = 'flex-end';
    } else if (props.justify == 'center') {
        justify = 'center';
    } else if (props.justify == 'around') {
        justify = 'space-around';
    } else if (props.justify == 'between') {
        justify = 'space-between';
    } else {
        justify = 'baseline';
    }

    if (props.wrap) {
        wrap = 'wrap';
    } else {
        wrap = 'nowrap';
    }

    const styles = {
        display: 'flex',
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        width: '100%',
        height: '100%',
    };

    return <div style={styles}>{props.children}</div>;
};

export default FlexWrap;
