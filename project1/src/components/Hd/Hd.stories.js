import { fn } from '@storybook/test';
import Hd from "./Hd";


export default {
    title: "exemple2/header",
    component: Hd,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        viewport: { defaultViewport: 'Mobile Small' },
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
            name: 'Nikola Zovko',
        },
    },
};

export const LoggedOut = {};