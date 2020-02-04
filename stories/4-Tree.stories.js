import React, { useState } from 'react';

import TreeInput from '#rsu/../v2/Input/TreeInput';

import styles from './styles.scss';

// TODO: with smallHorizontalPadding and smallVerticalPadding

export default {
    title: 'Design|Input/TreeInput',
};

export function Primary(props) {
    const [value, setValue] = useState([]);

    const options = [
        { key: 1, parentKey: undefined, label: 'edibles' },
        { key: 2, parentKey: 1, label: 'fruits' },
        { key: 3, parentKey: 1, label: 'vegetables' },
        { key: 4, parentKey: 1, label: 'grains' },
        { key: 5, parentKey: 2, label: 'apple' },
        { key: 6, parentKey: 2, label: 'mango' },
        { key: 7, parentKey: 5, label: 'green' },
        { key: 8, parentKey: 5, label: 'red' },
        { key: 9, parentKey: undefined, label: 'veggies' },
        { key: 10, parentKey: 9, label: 'cauliflower' },
        { key: 11, parentKey: 9, label: 'broccoli' },
        { key: 12, parentKey: undefined, label: 'drinks' },
    ];

    return (
        <TreeInput
            className={styles.tree}
            label="Today's menu"
            keySelector={item => item.key}
            parentKeySelector={item => item.parentKey}
            labelSelector={item => item.label}
            options={options}
            value={value}
            onChange={setValue}
        />
    );
}
Primary.story = {
    name: 'primary',
};
