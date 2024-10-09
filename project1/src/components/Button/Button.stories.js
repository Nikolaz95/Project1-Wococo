import { fn } from '@storybook/test';

import Button from "./Button";

export default {
    title: "Button/button",
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn() },
}

export const Default = {
    args: {
        primary: true,
        label: 'Button',
        size: "large",
    },
}

export const NotDefault = {
    args: {
        label: 'Button',
    },
}

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Medium = {
    args: {
        size: 'medium',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
