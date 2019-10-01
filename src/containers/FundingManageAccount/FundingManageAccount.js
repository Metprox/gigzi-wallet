import React from 'react';
import { NavLink } from 'react-router-dom';

import cls from './FundingManageAccount.scss';
import BackstepFundingBtns from '@/components/UI/BackstepFundingBtns/BackstepFundingBtns';
import ButtonAdd from '@/components/UI/ButtonAdd/ButtonAdd';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DescriptionCountList from '@/components/UI/DescriptionCountList/DescriptionCountList';
import FundingManageTitleList from '@/components/main/FundingManageTitleList/FundingManageTitleList';
import FundingManageList from '@/components/main/FundingManageList/FundingManageList';

const FundingManageAccount = props => {
    return (
        <div className={cls.FundingManageAccount}>
            <div className={cls.backstep}>
                <BackstepFundingBtns {...props} />
            </div>
            <div className={cls.Body}>
                <div className={cls.Header}>
                    <ContainerWrap>
                        <div className={cls.HeaderFlex}>
                            <h6>Payment accounts</h6>
                            <NavLink className={cls.link} to="/funding/add">
                                <ButtonAdd value="Add account" />
                            </NavLink>
                        </div>
                    </ContainerWrap>
                </div>
                <DescriptionCountList count={2} value="Account" />
                <FundingManageTitleList />
                <FundingManageList />
            </div>
        </div>
    );
};

export default FundingManageAccount;
