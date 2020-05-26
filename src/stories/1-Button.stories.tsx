import React from 'react';
// import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button >Hello Button</Button>;

export const Emoji = () => (
  <Button >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
