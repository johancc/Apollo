import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { Home, HomeProps } from './Home';
import * as NavbarStories from '../../modules/Navbar';

export default {
  title: 'Example/Page',
  component: Home,
};

const Template: Story<HomeProps> = args => <Home {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
};
