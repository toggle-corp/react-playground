import React from 'react';

import Button from '#rsu/../v2/Action/Button';

// TODO: with smallHorizontalPadding and smallVerticalPadding

export default {
    title: 'Design|Input/Button',
};

export const primary = () => (
    <Button
        buttonType="button-primary"
    >
        Primary Button
    </Button>
);
primary.story = {
    name: 'primary',
};

export const accent = () => (
    <Button
        buttonType="button-accent"
    >
        Accent Button
    </Button>
);
accent.story = {
    name: 'accent',
};

export const danger = () => (
    <Button
        buttonType="button-danger"
    >
        Danger Button
    </Button>
);
danger.story = {
    name: 'danger',
};

export const warning = () => (
    <Button
        buttonType="button-warning"
    >
        Warning Button
    </Button>
);
warning.story = {
    name: 'warning',
};

export const success = () => (
    <Button
        buttonType="button-success"
    >
        Success Button
    </Button>
);
success.story = {
    name: 'success',
};

export const defaultButton = () => (
    <Button>
        Default Button
    </Button>
);
defaultButton.story = {
    name: 'default',
};

export const iconButton = () => (
    <Button
        iconName="share"
    >
        Share Button
    </Button>
);
iconButton.story = {
    name: 'with icon',
};

export const disabled = () => (
    <Button
        disabled
    >
        Disabled Button
    </Button>
);
disabled.story = {
    name: 'disabled',
};

export const pending = () => (
    <Button
        pending
    >
        Pending Button
    </Button>
);
pending.story = {
    name: 'pending',
};

export const transparent = () => (
    <Button
        transparent
    >
        Transparent Button
    </Button>
);
transparent.story = {
    name: 'transparent',
};
