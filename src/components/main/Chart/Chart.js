import React from 'react';
import { Line } from 'react-chartjs-2';

import cls from './Chart.scss';
import DatesList from '@/components/UI/DatesList/DatesList';
import ContainerWrap from '@/hoc/ContainerWrap/ContainerWrap';

const Chart = props => {
    return (
        <div className={cls.Chart}>
            <div className={cls.DatesWrap}>
                <ContainerWrap>
                    <DatesList />
                </ContainerWrap>
            </div>
            <Line
                data={props.chartData}
                options={{
                    title: {
                        display: props.displayTitle,
                        text: 'Title Gigzi',
                        fontSize: 25,
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition,
                    },
                }}
            />
        </div>
    );
};

export default Chart;
