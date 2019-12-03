import { configure, addParameters } from '@storybook/react';

import { addIcon } from '#rscg/Icon';
import { iconNames } from '#constants';

import { initializeStyles } from '#rsu/styles';
import styleProperties from '#constants/styleProperties';

Object.keys(iconNames).forEach((key) => {
    addIcon('font', key, iconNames[key]);
});

initializeStyles(styleProperties);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

// Option defaults:
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    storySort: undefined,
  },
});
