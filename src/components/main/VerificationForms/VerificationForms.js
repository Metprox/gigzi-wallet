import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import cls from './VerificationForms.scss';
import Contact from './Contact/Contact';
import Identity from './Identity/Identity';
import Personal from './Personal/Personal';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';

const VerificationForms = props => {
    const fabricsPath = url => {
        switch (url) {
            case '/verification':
                return 1;
            case '/verification/contact':
                return 2;
            case '/verification/identity':
                return 3;
            default:
                return '';
        }
    };
    return (
        <div className={cls.VerificationForms}>
            <div className={cls.Container}>
                <FlexWrap align="center" justify="between">
                    <h2>Verification</h2>
                    <span>{fabricsPath(props.url)} of 3 step</span>
                </FlexWrap>
            </div>
            <Switch>
                <Route path="/verification/" exact component={Personal} />
                <Route path="/verification/contact" component={Contact} />
                <Route path="/verification/identity" component={Identity} />
                <Redirect to="/verification" />
            </Switch>
        </div>
    );
};

export default VerificationForms;
