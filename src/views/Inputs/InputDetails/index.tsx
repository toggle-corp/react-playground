import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.scss';

interface Props {
    className?: string;
    component: React.ElementType;
    title: string | React.ElementType;
    description?: string | React.ElementType;
    usage?: string | React.ElementType;
    componentProps: {};
}

export default class InputDetails extends React.PureComponent<Props> {
    public render() {
        const {
            className,
            component: Component,
            title,
            description,
            usage,
            componentProps,
        } = this.props;

        return (
            <div className={_cs(styles.inputDetails, className)}>
                <div className={styles.left}>
                    <header className={styles.header}>
                        <h3 className={styles.heading}>
                            { title }
                        </h3>
                        <div className={styles.description}>
                            { description }
                        </div>
                    </header>
                    <div className={styles.content}>
                        <div className={styles.preview}>
                            <Component
                                {...componentProps}
                            />
                        </div>
                        <div className={styles.usage}>
                            { usage }
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <header className={styles.header}>
                        <h4 className={styles.heading}>
                            Properties
                        </h4>
                    </header>
                </div>
            </div>
        );
    }
}
