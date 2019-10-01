import React, { Component, createRef } from 'react';
import cls from './SectionSecondCharts.scss';
import Pagination from '@/components/UI/Pagination/Pagination';
import Search from '@/components/UI/Search/Search';
import GigziCardsSmall from '@/components/common/GigziCardsSmall/GigziCardsSmall';
import Chart from '@/components/main/Chart/Chart';

const ref = React.createRef();
const classesLeft = [cls.Left, false ? cls.Disabled : null].join(' ');
const classesRight = [cls.Right, false ? cls.Disabled : null].join(' ');

export default class SectionSecondCharts extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: 'gzb',
            },
            {
                id: 2,
                name: 'gzs',
            },
            {
                id: 3,
                name: 'gzg',
            },
            {
                id: 4,
                name: 'gzp',
            },
            {
                id: 5,
                name: 'eth',
            },
            {
                id: 6,
                name: 'usd',
            },
            {
                id: 7,
                name: 'eur',
            },
        ],
        chartData: {},
    };

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun',
                    'Mon',
                ],
                data: [100, 200, 300],
                datasets: [
                    {
                        label: 'Gigzi Black GZB',
                        fill: false,
                        lineTension: 0,
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 0,
                        pointHoverRadius: 2.5,
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(75,192,192,1)',
                        pointHoverBorderWidth: 1.5,
                        pointRadius: 0,
                        pointHitRadius: 10,
                        data: [100, 200, 300],
                    },
                    {
                        label: 'Gigzi Black GZB',
                        fill: false,
                        lineTension: 0,
                        borderColor: '#202A31',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 0,
                        pointHoverRadius: 2.5,
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderColor: 'rgba(75,192,192,1)',
                        pointHoverBorderWidth: 1.5,
                        pointRadius: 0,
                        pointHitRadius: 10,
                        data: [0, 150, 70],
                    },
                ],
            },
        });
    }

    componentDidMount() {
        localStorage.setItem('route', 'charts');
        this.getChartData();
    }
    render() {
        const { cards } = this.state;
        return (
            <section className={cls.Charts}>
                <header className={cls.Header}>
                    <h1>Charts</h1>
                    <div className={cls.CardsSetting}>
                        <div className={cls.SearchWrap}>
                            <Search placeholder="Search" />
                        </div>
                        <div className={cls.wrapPagination}>
                            <div className={cls.Pagination}>
                                <div
                                    className={classesLeft}
                                    onClick={() =>
                                        ref.current.slickPrev()
                                    }
                                />
                                <div
                                    className={classesRight}
                                    onClick={() =>
                                        ref.current.slickNext()
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </header>
                <GigziCardsSmall ref={ref} cards={cards} />
                <Chart
                    chartData={this.state.chartData}
                    displayTitle={false}
                    displayLegend={true}
                    legendPosition="top left"
                />
            </section>
        );
    }
}
