import React from 'react';

import cls from './App.scss';
import Layout from '@/hoc/Layout/Layout';



const App = props => (
    <div className={cls.wrapper}>
        <Layout />
    </div>
);

export default App;
