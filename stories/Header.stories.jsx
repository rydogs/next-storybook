import React from 'react';

import Header from '../components/header';

export default {
    title: 'Example/Header',
    component: Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.parameters = {
    initialUser: {
        isLoading: false,
        user: {
            email: 'john@doe.com',
            email_verified: true,
            nickname: 'Joe',
            picture: 'https://picsum.photos/200',
            sub: 'mock:johndoe',
            updated_at: '2021-04-02T12:42:42.042Z',
        }
    }
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
