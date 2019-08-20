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
    title: React.ReactNode;
    description: React.ReactNode;
    component: React.ElementType;
    usage?: React.ReactNode;
    props: {
        faramElementName: string;
        [key: string]: unknown;
    };
    groupKey: string;
}

interface Option {
    key: string;
    label: string;
    color?: string;
}

const options: Option[] = [
    { key: '1', label: 'Option 1', color: '#ef9a9a' },
    { key: '2', label: 'Option 2', color: '#ef5350' },
    { key: '3', label: 'Option 3', color: '#e53935' },
    { key: '4', label: 'Option 4', color: '#c62828' },
    { key: '5', label: 'Option 5', color: '#7f0000' },
];

const fruits: Option[] = [
    { key: '1', label: 'Apricot' },
    { key: '2', label: 'Apple' },
    { key: '3', label: 'Mango' },
    { key: '4', label: 'Banana' },
    { key: '5', label: 'Pineapple' },
    { key: '6', label: 'Orange' },
    { key: '7', label: 'Coconut' },
    { key: '8', label: 'Lime' },
    { key: '9', label: 'Papaya' },
    { key: '10', label: 'Grape' },
    { key: '11', label: 'Watermelon' },
    { key: '12', label: 'Plum' },
    { key: '13', label: 'Pear' },
    { key: '14', label: 'Peach' },
    { key: '15', label: 'Lemon' },
    { key: '16', label: 'Avocado' },
];

const vegetables: Option[] = [
    { key: '1', label: 'Asparagus' },
    { key: '2', label: 'Black Beans' },
    { key: '3', label: 'Chick Peas' },
    { key: '4', label: 'Kidney Beans' },
    { key: '5', label: 'Broccoli' },
    { key: '6', label: 'Cabbage' },
    { key: '7', label: 'Cauliflower' },
    { key: '8', label: 'Spinach' },
    { key: '9', label: 'Lettuce' },
    { key: '10', label: 'Mushroom' },
    { key: '11', label: 'Nettle' },
    { key: '12', label: 'Okra' },
    { key: '13', label: 'Carrot' },
    { key: '14', label: 'Radish' },
    { key: '15', label: 'Turnip' },
    { key: '16', label: 'Cucumber' },
    { key: '17', label: 'Squash' },
    { key: '18', label: 'Pumpkin' },
    { key: '19', label: 'Gourd' },
    { key: '20', label: 'Tomato' },
    { key: '21', label: 'Potato' },
];

const inputList: InputElement[] = [
    // Text inputs
    {
        key: 'textInput',
        title: 'Text Input',
        description: 'Used to enter short length text',
        component: TextInput,
        props: {
            label: 'Name',
            faramElementName: 'textInput',
        },
        groupKey: 'Common',
    },
    {
        key: 'searchInput',
        title: 'Search Input',
        description: 'Similar to Text Input but used for search.',
        component: SearchInput,
        props: {
            label: 'Search User',
            faramElementName: 'searchInput',
            showHintAndError: false,
        },
        groupKey: 'Common',
    },
    {
        key: 'textArea',
        title: 'Text Area',
        description: 'Used to enter long length text',
        component: TextArea,
        props: {
            label: 'Remarks',
            faramElementName: 'textArea',
            rows: 7,
        },
        groupKey: 'Common',
    },
    {
        key: 'formattedTextArea',
        title: 'Formatted Text Area',
        description: 'Similar to Text Area but with an additional format button',
        component: FormattedTextArea,
        props: {
            label: 'Remarks',
            faramElementName: 'formattedTextArea',
            rows: 7,
        },
        groupKey: 'Common',
    },
    {
        key: 'numberInput',
        title: 'Number Input',
        description: 'Useful to enter number',
        component: NumberInput,
        props: {
            label: 'Age',
            faramElementName: 'numberInput',
        },
        groupKey: 'Common',
    },
    {
        key: 'checkbox',
        title: 'Checkbox',
        description: 'Used to select/deselect an item',
        component: Checkbox,
        props: {
            label: 'I agree with the terms and condition.',
            faramElementName: 'checkbox',
        },
        groupKey: 'Common',
    },
    {
        key: 'colorInput',
        title: 'Color Input',
        description: 'Used to select a color with a helper popup with different color modes.',
        component: ColorInput,
        props: {
            label: 'Color',
            faramElementName: 'colorInput',
        },
        groupKey: 'Common',
    },

    // Date inputs
    {
        key: 'dateInput',
        title: 'Date Input',
        description: 'Used to select a date from either manual entry or through a popup.',
        component: DateInput,
        props: {
            label: 'Published Date',
            faramElementName: 'dateInput',
        },
        groupKey: 'Date',
    },
    {
        key: 'dateFilter',
        title: 'Date Filter',
        description: 'Used to select a range of date along with some predefined ranges.',
        component: DateFilter,
        props: {
            label: 'Date Range',
            faramElementName: 'dateFilter',
        },
        groupKey: 'Date',
    },
    {
        key: 'datePicker',
        title: 'Date Picker',
        description: 'Used to select date from calendar',
        component: DatePicker,
        props: {
            label: 'Birthday',
            faramElementName: 'datePicker',
        },
        groupKey: 'Date',
    },

    // Time inputs
    {
        key: 'timeInput',
        title: 'Time Input',
        description: 'Used to select time',
        component: TimeInput,
        props: {
            label: 'Check-in time',
            faramElementName: 'timeInput',
        },
        groupKey: 'Time',
    },
    {
        key: 'timeFilter',
        title: 'Time Filter',
        description: 'Used to select exact time or a range of time',
        component: TimeFilter,
        props: {
            label: 'Tea break',
            faramElementName: 'timeFilter',
        },
        groupKey: 'Time',
    },


    // Single select
    {
        key: 'scaleInput',
        title: 'Scale Input',
        description: 'Used to select items depicted in color scale',
        component: ScaleInput,
        props: {
            label: 'Severity',
            faramElementName: 'scaleInput',
            options,
        },
        groupKey: 'Selection',
    },
    {
        key: 'radioInput',
        title: 'Radio Input',
        description: 'Used to select one and only one item from a set.',
        component: RadioInput,
        props: {
            faramElementName: 'radioInput',
            name: 'Fruit', // unique name
            // label: 'Fruit',
            options: fruits.slice(0, 5),
        },
        groupKey: 'Selection',
    },
    {
        key: 'segmentInput',
        title: 'Segment Input',
        description: 'Similar to Radio Input but only visually different',
        component: SegmentInput,
        props: {
            label: 'Fruit',
            faramElementName: 'segmentInput',
            options: fruits.slice(0, 5),
        },
        groupKey: 'Selection',
    },
    {
        key: 'selectInput',
        title: 'Select Input',
        description: 'Used to select an item from list of items',
        component: SelectInput,
        props: {
            label: 'Fruit',
            faramElementName: 'selectInput',
            options: fruits,
        },
        groupKey: 'Selection',
    },
    {
        key: 'searchSelectInput',
        title: 'Search Select Input',
        description: 'Similar to Select Input but list is only populated after search',
        component: SearchSelectInput,
        props: {
            label: 'Fruit',
            faramElementName: 'searchSelectInput',
            options: fruits,
        },
        groupKey: 'Selection',
    },

    // Multi select
    {
        key: 'listSelection',
        title: 'List Selection',
        description: 'Used to select one or more items from a set.',
        component: ListSelection,
        props: {
            label: 'Vegetables',
            faramElementName: 'listSelection',
            options: vegetables.slice(0, 5),
        },
        groupKey: 'Multi Selection',
    },
    {
        key: 'multiSelectInput',
        title: 'Multi Select Input',
        description: 'Used to select one or more item from list of items',
        component: MultiSelectInput,
        props: {
            label: 'Vegetables',
            faramElementName: 'multiSelectInput',
            options: vegetables,
        },
        groupKey: 'Multi Selection',
    },
    {
        key: 'searchMultiSelectInput',
        title: 'Search multi select input',
        description: 'Similar to Multi Select Input but list is only populated after search',
        component: SearchMultiSelectInput,
        props: {
            label: 'Vegetables',
            faramElementName: 'searchMultiSelectInput',
            options: vegetables,
        },
        groupKey: 'Multi Selection',
    },
    {
        key: 'selectInputWithList',
        title: 'Select input with list',
        description: 'Similar to Multi Select Input and additionally, selected items are listed separately',
        component: SelectInputWithList,
        props: {
            label: 'Vegetables',
            faramElementName: 'selectInputWithList',
            options: vegetables,
        },
        groupKey: 'Multi Selection',
    },

    // Misc inputs
    {
        key: 'rangeFilter',
        title: 'Range filter',
        description: 'Used to select start and end of range',
        component: RangeFilter,
        props: {
            label: 'Range',
            faramElementName: 'rangeFilter',
            options,
        },
        groupKey: 'Misc',
    },

    {
        key: 'rawFileInput',
        title: 'Raw File Input',
        description: 'Used to upload file',
        component: RawFileInput,
        props: {
            faramElementName: 'rawFileInput',
            children: 'Select a file',
        },
        groupKey: 'Misc',
    },

];

export default inputList;
