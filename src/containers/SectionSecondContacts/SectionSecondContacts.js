import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import cls from './SectionSecondContacts.scss';
import HeaderContacts from '@/components/main/HeaderContacts/HeaderContacts';
import TitleContacts from '@/components/main/TitleContacts/TitleContacts';
import ListContacts from '@/components/main/ListContacts/ListContacts';
import SectionContactsEdit from '@/containers/SectionContactsEdit/SectionContactsEdit';

export default class SectionSecondContacts extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'Francis Gordon',
                code: '0xc4ce7b61c02b75a84547884f7039c082c5c7edba',
            },
            {
                id: 2,
                name: 'Dorothy Hogan',
                code: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
            },
            {
                id: 3,
                name: 'Alex Barnett',
                code: '0x126bf276ba4c7111dbddbb542718cff678c9b3ce',
            },
            {
                id: 4,
                name: 'Polly Parks',
                code: '0xde321fe6906acbf5e2ec18447b5e9fe7d6812660',
            },
            {
                id: 5,
                name: 'Carrie Pratt',
                code: '0xa62142888aba8370742be823c1782d17a0389da1',
            },
            {
                id: 6,
                name: 'Mitchell Singleton',
                code: '0xc361f4200dedd6059f8f343052e3182c5fd15188',
            },
            {
                id: 7,
                name: 'Francis Gordon',
                code: '0xde321fe6906acbf5e2ec18447b5e9fe7d6812660',
            },
            {
                id: 8,
                name: 'Douglas Dunn',
                code: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
            },
            {
                id: 9,
                name: 'Greffi Paul',
                code: '0xde321fe6906acbf5e2eygl12c5e9fe7d6812660',
            },
            {
                id: 10,
                name: 'Jim Cupper',
                code: '0x5ed8acke6b63b4566afce3ad7ac2f4fd7e1b8fad9f',
            },
        ],
    };

    componentDidMount() {
        localStorage.setItem('route', 'contacts');
    }

    render() {
        const { list } = this.state;
        return (
            <Switch>
                <Route exact path="/contacts">
                    <section className={cls.Contacts}>
                        <h1>Contacts</h1>
                        <HeaderContacts countList={list.length} />
                        <TitleContacts />
                        <ListContacts list={list} />
                    </section>
                </Route>
                <Route path="/contacts/edit" component={SectionContactsEdit} />
            </Switch>
        );
    }
}
