import React from 'react';
import { Link } from 'react-router-dom';

import cls from './Contact.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import FlexWrap from '@/hoc/FlexWrap/FlexWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';
import FieldText from '@/components/UI/FieldText/FieldText';

const Contact = props => {
    return (
        <div className={cls.Contact}>
            <div className={cls.Title}>
                <ContainerWrap>
                    <h3>Contact data</h3>
                </ContainerWrap>
            </div>
            <div className={cls.Countryes}>
                <ContainerWrap>
                    <div className={cls.flexInputs}>
                        <div className={cls.offsetRight}>
                            <FieldText
                                type="text"
                                label="Country"
                                placeholder="Enter country"
                            />
                        </div>
                        <FieldText
                            type="text"
                            label="City"
                            placeholder="Enter city"
                        />
                    </div>
                </ContainerWrap>
            </div>
            <div className={cls.Addresses}>
                <ContainerWrap>
                    <div className={cls.flexInputs}>
                        <div className={cls.offsetRight}>
                            <FieldText
                                type="email"
                                label="Address"
                                placeholder="Enter address"
                            />
                        </div>
                        <FieldText
                            type="text"
                            label="ZIP-Code"
                            placeholder="Enter ZIP-code"
                        />
                    </div>
                </ContainerWrap>
            </div>
            <div className={cls.Calls}>
                <ContainerWrap>
                    <div className={cls.flexInputs}>
                        <div className={cls.offsetRight}>
                            <FieldText
                                type="email"
                                label="Email address"
                                placeholder="Enter email address"
                            />
                        </div>
                        <FieldText
                            type="tel"
                            label="Mobile phone"
                            placeholder="Phone number"
                        />
                    </div>
                </ContainerWrap>
            </div>
            <div className={cls.btnWrap}>
                <div className={cls.Next}>
                    <Link to="/verification/identity">
                        <ButtonMain type="submit" value="Next" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
