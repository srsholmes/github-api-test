import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: themes.light
  }
});

configure(loadStories, module);
