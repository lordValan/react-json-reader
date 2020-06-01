import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import JsonReader from '../';

import { ObjectT } from '../../../../constants/types';

import styles from '../index.scss';

const cx = classNames.bind(styles);

function ReaderItem({ name, value }) {
    return (
        <section className={cx('JsonReader__Item')}>
            <span className={cx('JsonReader__Item__Key')}>{name}</span>
            <span className={cx('JsonReader__Item__Value')}>
                {
                    typeof value === ObjectT && value !== null
                        ? <JsonReader name={name} jsonObject={value} isChild />
                        : value
                }
            </span>
        </section>
    );
}

ReaderItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any
}

export default React.memo(ReaderItem);