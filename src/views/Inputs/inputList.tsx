import Checkbox from '#rsci/Checkbox';
import ColorInput from '#rsci/ColorInput';
import DateFilter from '#rsci/DateFilter';
import DateInput from '#rsci/DateInput';
import DatePicker from '#rsci/DatePicker';
import FormattedTextArea from '#rsci/FormattedTextArea';
import ListInput from '#rsci/ListInput';
import ListSelection from '#rsci/ListSelection';
import MultiSelectInput from '#rsci/MultiSelectInput';
import NumberInput from '#rsci/NumberInput';
import RadioInput from '#rsci/RadioInput';
import RangeFilter from '#rsci/RangeFilter';
import RawFileInput from '#rsci/RawFileInput';
import RawInput from '#rsci/RawInput';
import ReCaptcha from '#rsci/ReCaptcha';
import RemovableListItem from '#rsci/RemovableListItem';
import RotatingInput from '#rsci/RotatingInput';
import ScaleInput from '#rsci/ScaleInput';
import SearchInput from '#rsci/SearchInput';
import SearchMultiSelectInput from '#rsci/SearchMultiSelectInput';
import SearchSelectInput from '#rsci/SearchSelectInput';
import SegmentInput from '#rsci/SegmentInput';
import SelectInput from '#rsci/SelectInput';
import SelectInputWithList from '#rsci/SelectInputWithList';
import SimpleListInput from '#rsci/SimpleListInput';
import TabularSelectInput from '#rsci/TabularSelectInput';
import TextArea from '#rsci/TextArea';
import TextInput from '#rsci/TextInput';
import TimeFilter from '#rsci/TimeFilter';
import TimeInput from '#rsci/TimeInput';
import TreeSelection from '#rsci/TreeSelection';

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
}

const options: Option[] = [
    { key: 'option1', label: 'Option 1' },
    { key: 'option2', label: 'Option 2' },
    { key: 'option3', label: 'Option 3' },
    { key: 'option4', label: 'Option 4' },
    { key: 'option5', label: 'Option 5' },
];

const optionKeySelector = (d: Option) => d.key;
const optionLabelSelector = (d: Option) => d.label;

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
            faramElementName: 'formattedTextArea',
        },
    },
    {
        key: 'listInput',
        title: 'List input',
        description: 'List input',
        component: ListInput,
        props: {
            faramElementName: 'listInput',
        },
    },
    {
        key: 'listSelection',
        title: 'List selection',
        description: 'List selection',
        component: ListSelection,
        props: {
            faramElementName: 'listSelection',
        },
    },
    {
        key: 'multiSelectInput',
        title: 'Multi select input',
        description: 'Multi select input',
        component: MultiSelectInput,
        props: {
            faramElementName: 'multiSelectInput',
        },
    },
    {
        key: 'numberInput',
        title: 'Number input',
        description: 'Number input',
        component: NumberInput,
        props: {
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
            faramElementName: 'rangeFilter',
        },
    },
    {
        key: 'rawFileInput',
        title: 'Raw file input',
        description: 'Raw file input',
        component: RawFileInput,
        props: {
            faramElementName: 'rawFileInput',
        },
    },
    {
        key: 'rawInput',
        title: 'Raw input',
        description: 'Raw input',
        component: RawInput,
        props: {
            faramElementName: 'rawInput',
        },
    },
    {
        key: 'reCaptcha',
        title: 'reCaptcha',
        description: 'reCaptacha',
        component: ReCaptcha,
        props: {
            faramElementName: 'reCaptcha',
        },
    },
    {
        key: 'removableListItem',
        title: 'Removable list item',
        description: 'Removable list item',
        component: RemovableListItem,
        props: {
            faramElementName: 'removableListItem',
        },
    },
    {
        key: 'rotatingInput',
        title: 'Rotating input',
        description: 'Rotating input',
        component: RotatingInput,
        props: {
            faramElementName: 'rotatingInput',
        },
    },
    {
        key: 'scaleInput',
        title: 'Scale input',
        description: 'Scale input',
        component: ScaleInput,
        props: {
            faramElementName: 'scaleInput',
        },
    },
    {
        key: 'searchInput',
        title: 'Search input',
        description: 'Search input',
        component: SearchInput,
        props: {
            faramElementName: 'searchInput',
        },
    },
    {
        key: 'searchMultiSelectInput',
        title: 'Search multi select input',
        description: 'Search multi select input',
        component: SearchMultiSelectInput,
        props: {
            faramElementName: 'searchMultiSelectInput',
        },
    },
    {
        key: 'searchSelectInput',
        title: 'Search select input',
        description: 'Search select input',
        component: SearchSelectInput,
        props: {
            faramElementName: 'searchSelectInput',
        },
    },
    {
        key: 'segmentInput',
        title: 'Segment input',
        description: 'Segment input',
        component: SegmentInput,
        props: {
            faramElementName: 'segmentInput',
        },
    },
    {
        key: 'selectInput',
        title: 'Select input',
        description: 'Select input',
        component: SelectInput,
        props: {
            faramElementName: 'selectInput',
        },
    },
    {
        key: 'selectInputWithList',
        title: 'Select input with list',
        description: 'Select input with list',
        component: SelectInputWithList,
        props: {
            faramElementName: 'selectInputWithList',
        },
    },
    {
        key: 'simpleListInput',
        title: 'Simple list input',
        description: 'Simple list input',
        component: SimpleListInput,
        props: {
            faramElementName: 'simpleListInput',
        },
    },
    {
        key: 'tabularSelectInput',
        title: 'Tabular select input',
        description: 'Tabular select input',
        component: TabularSelectInput,
        props: {
            faramElementName: 'tabularSelectInput',
        },
    },
    {
        key: 'textArea',
        title: 'Textarea',
        description: 'Textarea',
        component: TextArea,
        props: {
            faramElementName: 'textArea',
        },
    },
    {
        key: 'textInput',
        title: 'Text input',
        description: 'Text input',
        component: TextInput,
        props: {
            faramElementName: 'textInput',
        },
    },
    {
        key: 'timeFilter',
        title: 'Time filter',
        description: 'Time filter',
        component: TimeFilter,
        props: {
            faramElementName: 'timeFilter',
        },
    },
    {
        key: 'timeInput',
        title: 'Time input',
        description: 'Time input',
        component: TimeInput,
        props: {
            faramElementName: 'timeInput',
        },
    },
    {
        key: 'treeSelection',
        title: 'Tree selection',
        description: 'Tree selection',
        component: TreeSelection,
        props: {
            faramElementName: 'treeSelection',
        },
    },
];

export default inputList;
