
import { fn } from '@storybook/test';
import Header from "./Header";

export default {
    title: "Header/header",
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
}


export const LoggedIn = {
    args: {
        user: {
            name: 'John Doe',
        },
    },
};

export const LoggedOut = {};
