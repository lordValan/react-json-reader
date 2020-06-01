import React from 'react';
import classNames from 'classnames/bind';

import JsonReader from '../../base/JsonReader';

import jsonObject from '../../../constants/jsonObject';

import styles from './index.scss';

const cx = classNames.bind(styles);

export default function MainPage() {
    return (
        <main className={cx('MainPage')}>
            <section className={cx('MainPage__Wrapper')}>
                <JsonReader jsonObject={jsonObject} />
            </section>
        </main>
    );
}