import React from 'react';

import Spinner from '#rsu/../v2/View/Spinner';

export default {
    title: 'Design|View/Spinner',
};

export const large = () => (
    <Spinner
        size="large"
    />
);
large.story = {
    name: 'large size',
};

export const medium = () => (
    <Spinner
        size="medium"
    />
);
medium.story = {
    name: 'medium size',
};

export const small = () => (
    <Spinner
        size="small"
    />
);
small.story = {
    name: 'small size',
};
