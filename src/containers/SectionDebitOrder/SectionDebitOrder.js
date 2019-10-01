import React from 'react';
import { Switch, Route } from 'react-router-dom';

import cls from './SectionDebitOrder.scss';
import Backstep from '@/components/UI/Backstep/Backstep';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import DebitOrderCard from '@/components/main/DebitOrderCard/DebitOrderCard';
import SectionDebitFees from '@/containers/SectionDebitFees/SectionDebitFees';

const SectionDebitOrder = props => {
    return (
        <Switch>
            <Route path="/debit/order" exact>
                <div className={cls.SectionDebitOrder}>
                    <div className={cls.backstep}>
                        <Backstep {...props} />
                    </div>
                    <div className={cls.Title}>
                        <ContainerWrap>
                            <h6>Order a card</h6>
                        </ContainerWrap>
                    </div>
                    <DebitOrderCard />
                </div>
            </Route>
            <Route path="/debit/order/fees" component={SectionDebitFees} />
        </Switch>
    );
};

export default SectionDebitOrder;
