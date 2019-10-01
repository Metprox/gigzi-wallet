import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SectionMainGigzi from '@/containers/SectionMainGigzi/SectionMainGigzi';
import SectionMainEthereum from '@/containers/SectionMainEthereum/SectionMainEthereum';
import SectionMainNational from '@/containers/SectionMainNational/SectionMainNational';

import SectionSecondConverter from '@/containers/SectionSecondConverter/SectionSecondConverter';
import SectionSecondDebit from '@/containers/SectionSecondDebit/SectionSecondDebit';
import SectionSecondFunding from '@/containers/SectionSecondFunding/SectionSecondFunding';
import SectionSecondRedeem from '@/containers/SectionSecondRedeem/SectionSecondRedeem';
import SectionSecondCharts from '@/containers/SectionSecondCharts/SectionSecondCharts';
import SectionSecondContacts from '@/containers/SectionSecondContacts/SectionSecondContacts';

import SectionVerification from '@/containers/SectionVerification/SectionVerification';

export default class MainRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact component={SectionMainGigzi} />
                    <Route path="/ethereum" component={SectionMainEthereum} />
                    <Route path="/national" component={SectionMainNational} />
                    <Route
                        path="/converter"
                        component={SectionSecondConverter}
                    />
                    <Route path="/debit" component={SectionSecondDebit} />
                    <Route path="/funding" component={SectionSecondFunding} />
                    <Route path="/redeem" component={SectionSecondRedeem} />
                    <Route path="/charts" component={SectionSecondCharts} />
                    <Route path="/contacts" component={SectionSecondContacts} />
                    <Route
                        path="/verification"
                        component={SectionVerification}
                    />
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        );
    }
}
