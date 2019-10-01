import React from 'react';

import cls from './ConvertAmount.scss';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';
import ButtonMain from '@/components/UI/ButtonMain/ButtonMain';

const ConvertAmount = props => {
    return (
        <div className={cls.ConvertAmount}>
            <ContainerWrap>
                <p className={cls.Title}>Converting that amount you receive</p>
                <div className={cls.Equal}>
                    <p>125.000000 gzb =</p>
                    <p>
                        22.687500<span>Eth</span>
                    </p>
                </div>
                <p className={cls.DescriptionBtn}>
                    For that transaction fees will be taken
                </p>
                <div className={cls.btn} onClick={() => props.handlerConverting(true)}>
                    <ButtonMain type="submit" value="Convert" />
                </div>
            </ContainerWrap>
        </div>
    );
};

export default ConvertAmount;
