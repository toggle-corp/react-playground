import React from 'react';

import Checkbox from '#rsci/Checkbox';
import ColorInput from '#rsci/ColorInput';
import DateFilter from '#rsci/DateFilter';
import DateInput from '#rsci/DateInput';
import DatePicker from '#rsci/DatePicker';
import FormattedTextArea from '#rsci/FormattedTextArea';
import ListSelection from '#rsci/ListSelection';
import MultiSelectInput from '#rsci/MultiSelectInput';
import NumberInput from '#rsci/NumberInput';
import RadioInput from '#rsci/RadioInput';
import RangeFilter from '#rsci/RangeFilter';
import RawFileInput from '#rsci/RawFileInput';
import ScaleInput from '#rsci/ScaleInput';
import SearchInput from '#rsci/SearchInput';
import SearchMultiSelectInput from '#rsci/SearchMultiSelectInput';
import SearchSelectInput from '#rsci/SearchSelectInput';
import SegmentInput from '#rsci/SegmentInput';
import SelectInput from '#rsci/SelectInput';
import SelectInputWithList from '#rsci/SelectInputWithList';
import TextArea from '#rsci/TextArea';
import TextInput from '#rsci/TextInput';
import TimeFilter from '#rsci/TimeFilter';
import TimeInput from '#rsci/TimeInput';

export interface InputElement {
    key: string;
    title: string | React.ElementType;
    description: string | React.ElementType;
    component: React.ElementType;
    usage?: string | React.ElementType;
    props: {
        faramElementName: string;
        [key: string]: any;
    };
}

interface Option {
    key: string;
    label: string;
    color: string;
}

const options: Option[] = [
    { key: 'option1', label: 'Option 1', color: '#ef9a9a' },
    { key: 'option2', label: 'Option 2', color: '#ef5350' },
    { key: 'option3', label: 'Option 3', color: '#e53935' },
    { key: 'option4', label: 'Option 4', color: '#c62828' },
    { key: 'option5', label: 'Option 5', color: '#7f0000' },
];

const optionKeySelector = (d: Option) => d.key;
const optionLabelSelector = (d: Option) => d.label;
const optionColorSelector = (d: Option) => d.color;

const inputList: InputElement[] = [
    {
        key: 'checkbox',
        title: 'Checkbox',
        description: 'Checkboxes allow the user to select one or more items from a set.',
        component: Checkbox,
        props: {
            label: 'Check me',
            faramElementName: 'checkbox',
        },
    },
    {
        key: 'colorInput',
        title: 'Color input',
        description: 'Color input lets user to select a color with a helper popup with different color modes.',
        component: ColorInput,
        props: {
            label: 'Select a color',
            faramElementName: 'colorInput',
        },
    },
    {
        key: 'dateFilter',
        title: 'Date filter',
        description: 'Date filter is used to select a range of date along with some predefined ranges.',
        component: DateFilter,
        props: {
            label: 'Select a date range',
            faramElementName: 'dateFilter',
        },
    },
    {
        key: 'dateInput',
        title: 'Date input',
        description: 'Date input lets user to select a date from either manual entry or through a helper popup.',
        component: DateInput,
        props: {
            label: 'Select a date',
            faramElementName: 'dateInput',
        },
    },
    {
        key: 'datePicker',
        title: 'Date picker',
        description: 'Date picker',
        component: DatePicker,
        props: {
            faramElementName: 'datePicker',
        },
    },
    {
        key: 'formattedTextArea',
        title: 'Formatted text area',
        description: 'Formatted text area',
        component: FormattedTextArea,
        props: {
            label: 'Enter text',
            faramElementName: 'formattedTextArea',
        },
    },
    {
        key: 'listSelection',
        title: 'List selection',
        description: 'List selection',
        component: ListSelection,
        props: {
            label: 'Select option(s)',
            faramElementName: 'listSelection',
            options,
        },
    },
    {
        key: 'multiSelectInput',
        title: 'Multi select input',
        description: 'Multi select input',
        component: MultiSelectInput,
        props: {
            label: 'Select option(s)',
            faramElementName: 'multiSelectInput',
            options,
        },
    },
    {
        key: 'numberInput',
        title: 'Number input',
        description: 'Number input',
        component: NumberInput,
        props: {
            label: 'Enter a number',
            faramElementName: 'numberInput',
        },
    },
    {
        key: 'radioInput',
        title: 'Radio input',
        description: 'Radio input',
        component: RadioInput,
        props: {
            faramElementName: 'radioInput',
            name: 'radioInput',
            options,
        },
    },
    {
        key: 'rangeFilter',
        title: 'Range filter',
        description: 'Range filter',
        component: RangeFilter,
        props: {
            label: 'Select option',
            faramElementName: 'rangeFilter',
            options,
        },
    },
    {
        key: 'rawFileInput',
        title: 'Raw file input',
        description: 'Raw file input',
        component: RawFileInput,
        props: {
            faramElementName: 'rawFileInput',
            children: 'Select a file',
        },
    },
    {
        key: 'scaleInput',
        title: 'Scale input',
        description: 'Scale input',
        component: ScaleInput,
        props: {
            label: 'Select an option',
            faramElementName: 'scaleInput',
            options,
        },
    },
    {
        key: 'searchInput',
        title: 'Search input',
        description: 'Search input',
        component: SearchInput,
        props: {
            label: 'Search',
            faramElementName: 'searchInput',
            showHintAndError: false,
        },
    },
    {
        key: 'searchMultiSelectInput',
        title: 'Search multi select input',
        description: 'Search multi select input',
        component: SearchMultiSelectInput,
        props: {
            label: 'Search',
            faramElementName: 'searchMultiSelectInput',
            options,
        },
    },
    {
        key: 'searchSelectInput',
        title: 'Search select input',
        description: 'Search select input',
        component: SearchSelectInput,
        props: {
            label: 'Search',
            faramElementName: 'searchSelectInput',
            options,
        },
    },
    {
        key: 'segmentInput',
        title: 'Segment input',
        description: 'Segment input',
        component: SegmentInput,
        props: {
            label: 'Select an option',
            faramElementName: 'segmentInput',
            options,
        },
    },
    {
        key: 'selectInput',
        title: 'Select input',
        description: 'Select input',
        component: SelectInput,
        props: {
            label: 'Select an option',
            faramElementName: 'selectInput',
            options,
        },
    },
    {
        key: 'selectInputWithList',
        title: 'Select input with list',
        description: 'Select input with list',
        component: SelectInputWithList,
        props: {
            label: 'Select option(s)',
            faramElementName: 'selectInputWithList',
            options,
        },
    },
    {
        key: 'textArea',
        title: 'Textarea',
        description: 'Textarea',
        component: TextArea,
        props: {
            label: 'Enter text',
            faramElementName: 'textArea',
        },
    },
    {
        key: 'textInput',
        title: 'Text input',
        description: 'Text input',
        component: TextInput,
        props: {
            label: 'Enter text',
            faramElementName: 'textInput',
        },
    },
    {
        key: 'timeFilter',
        title: 'Time filter',
        description: 'Time filter',
        component: TimeFilter,
        props: {
            label: 'Select a duration',
            faramElementName: 'timeFilter',
        },
    },
    {
        key: 'timeInput',
        title: 'Time input',
        description: 'Time input',
        component: TimeInput,
        props: {
            label: 'Select a time',
            faramElementName: 'timeInput',
        },
    },
];

export default inputList;
