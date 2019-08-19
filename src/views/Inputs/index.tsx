import React from 'react';
import {
    _cs,
    listToMap,
} from '@togglecorp/fujs';

import Faram from '@togglecorp/faram';

import VerticalTabs from '#rscv/VerticalTabs';
import MultiViewContainer from '#rscv/MultiViewContainer';

import inputList from './inputList';
import InputDetails from './InputDetails';
import styles from './styles.scss';

interface Props {
    className?: string;
}

interface State {
    faramValues: {};
}

interface FaramSchema {
    fields: {
        [key: string]: [];
    };
}

export default class Inputs extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            faramValues: {
            },
        };

        this.faramSchema = {
            fields: listToMap(inputList, d => d.key, d => []),
        };

        this.views = listToMap(inputList, d => d.key, d => ({
            component: InputDetails,
            rendererParams: () => ({
                title: d.title,
                component: d.component,
                description: d.description,
                componentProps: d.props,
                className: styles.inputDetails,
            }),
        }));

        this.tabs = listToMap(inputList, d => d.key, d => d.title);
    }

    private faramSchema = {};

    private views = {};

    private tabs = {};

    private handleFaramChange = (faramValues: any) => {
        this.setState({ faramValues });
    }

    public render() {
        const { className } = this.props;
        const {
            faramValues,
        } = this.state;

        return (
            <div className={_cs(className, styles.inputs)}>
                <header className={styles.header}>
                    <h2 className={styles.heading}>
                        Input components
                    </h2>
                </header>
                <div className={styles.content}>
                    <VerticalTabs
                        className={styles.tabs}
                        tabs={this.tabs}
                        useHash
                    />
                    <Faram
                        className={styles.faram}
                        value={faramValues}
                        schema={this.faramSchema}
                        onChange={this.handleFaramChange}
                    >
                        <MultiViewContainer
                            views={this.views}
                            useHash
                        />
                    </Faram>
                </div>
            </div>
        );
    }
}
