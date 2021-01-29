import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const testButton = (args) => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);
  return (
    <Button color={value} {...args}>
      test
    </Button>
  );
};

testButton.args = {
  width: '100px',
  secondary: false,
};

const Template = (args) => <Button {...args}>CLOSE / SAVE</Button>;
const Template1 = (args) => <Button {...args}>Remove</Button>;

export const FirstStory = Template.bind({});

FirstStory.args = {
  width: '500px',
  children: 'elko',
};

export const SecondStory = Template1.bind({});

SecondStory.args = {
  secondary: true,
  width: '200px',
};
