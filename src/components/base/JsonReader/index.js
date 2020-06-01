import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ReaderItem from './ReaderItem';

import styles from './index.scss';

const cx = classNames.bind(styles);

const handleItemRender = ([ key, value ]) => {
    return <ReaderItem key={key} name={key} value={value} />;
}

function JsonReader({ jsonObject, isChild, name }) {
    const jsonObjectEntries = useMemo(() => Object.entries(jsonObject), [ jsonObject ]);
    const hasEntries = jsonObjectEntries && jsonObjectEntries.length;    

    if (!hasEntries && !isChild) return <p className={cx('EmptyMessage')}>Json Object is empty</p>;

    return (
        <section className={cx('JsonReader')}>
            {jsonObjectEntries.map(handleItemRender)}
        </section>
    );
}

JsonReader.propTypes = {
    name: PropTypes.string,
    jsonObject: PropTypes.object,
    isChild: PropTypes.bool
}

JsonReader.defaultProps = {
    jsonObject: {},
    isChild: false
}

export default React.memo(JsonReader);