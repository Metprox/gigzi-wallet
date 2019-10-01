import React, { Component } from 'react';
import cls from './Main.scss';
import MainRouter from '@/routers/MainRouter/MainRouter';
class Main extends Component {
    render() {
        return (
            <main className={cls.Main}>
                <MainRouter />
            </main>
        );
    }
}

export default Main;
