import React, { Component } from 'react';
import cls from './SectionVerification.scss';
import VerificationForms from '@/components/main/VerificationForms/VerificationForms';
import Backstep from '@/components/UI/Backstep/Backstep';

export default class SectionVerification extends Component {
    render() {
        return (
            <section className={cls.Verification}>
                <div className={cls.wrapBackstep}>
                    <Backstep {...this.props} />
                </div>
                <VerificationForms url={this.props.location.pathname} />
            </section>
        );
    }
}
