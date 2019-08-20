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
    faramValues: unknown;
}

interface FaramSchema {
    fields: {
        [key: string]: [];
    };
}

export default class Inputs extends React.PureComponent<Props, State> {
    private static inputGroupKeySelector = (item: string) => {
        const myInput = inputList.find(input => input.key === item);
        if (!myInput) {
            return undefined;
        }
        return myInput.groupKey;
    };

    private static inputGroupRendererParams = (groupKey: string) => ({
        children: groupKey,
    })

    private static inputGroupComparator = () => 0;

    public constructor(props: Props) {
        super(props);

        this.state = {
            faramValues: {
                textInput: 'Hari Prasad',
                searchInput: 'Hari',
                textArea: 'The epic, traditionally ascribed to the Rishi Valmiki, narrates the life of Rama, the legendary prince of the Kosala Kingdom.\n It follows his fourteen-year exile to the forest by his father King Dasharatha, on request of his step-mother Kaikeyi.',
                formattedTextArea: 'The epic, traditionally ascribed\n to the Rishi Valmiki, narrates the life of Rama, the legendary prince of the Kosala Kingdom.\n\n It follows his fourteen-year\n exile to the forest by his father King Dasharatha, on request of his step-mother Kaikeyi.',
                numberInput: 42,
                listSelection: ['1', '3'],
                radioInput: '3',
                segmentInput: '3',
                scaleInput: '3',
                selectInput: '3',
                searchSelectInput: '3',
                multiSelectInput: ['1', '3'],
                searchMultiSelectInput: ['1', '3'],
                selectInputWithList: ['1', '3'],
            },
        };

        this.faramSchema = {
            fields: listToMap(inputList, d => d.key, () => []),
        };

        this.views = listToMap(
            inputList,
            d => d.key,
            d => ({
                component: InputDetails,
                rendererParams: () => ({
                    title: d.title,
                    component: d.component,
                    description: d.description,
                    componentProps: d.props,
                    className: styles.inputDetails,
                }),
            }),
        );

        this.tabs = listToMap(
            inputList,
            d => d.key,
            d => d.title,
        );
    }

    private faramSchema: any;

    private views: {
        [key: string]: {
            component: React.ReactType;
            rendererParams: () => {
                title: React.ReactNode;
                component: React.ReactType;
                description: React.ReactNode;
                componentProps: any;
                className: string;
            };
        };
    };

    private tabs: {
        [key: string]: React.ReactNode;
    };

    private handleFaramChange = (faramValues: unknown) => {
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
                        groupKeySelector={Inputs.inputGroupKeySelector}
                        groupRendererParams={Inputs.inputGroupRendererParams}
                        groupComparator={Inputs.inputGroupComparator}
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
