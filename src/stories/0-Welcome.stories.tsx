import React from 'react';
// import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
// import'@storybook/preset-create-react-app'
export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome  />;

ToStorybook.story = {
  name: 'to Storybook',
};
