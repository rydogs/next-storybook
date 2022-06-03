import React from 'react';

import Profile from '../components/profile';

export default {
    title: 'Example/Profile',
    component: Profile
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
    user: {
        email: 'john@doe.com',
        email_verified: true,
        nickname: 'Joe',
        picture: 'https://picsum.photos/200',
        sub: 'mock:johndoe',
        updated_at: '2021-04-02T12:42:42.042Z',
    }
}