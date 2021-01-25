import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { HelloWorld, HelloWorldProps } from './Code';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
};

const Template: Story<HelloWorldProps> = args => <HelloWorld {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  code: 'console.log("hello world")',
  color: 'blue',
};

export const Secondary = Template.bind({});
Secondary.args = {
  code: 'print("hello world")',
  color: 'red',
};
