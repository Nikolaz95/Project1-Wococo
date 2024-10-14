import { fn } from '@storybook/test';
import Btn from "./Btn";


export default {
    title: "exemple2/button",
    component: Btn,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn() },
}


export const Default2 = {
    args: {
        primary: true,
        label: 'Button',
        size: "large",
    },
}

export const NotDefault2 = {
    args: {
        label: 'Button',
    },
}

export const Large2 = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Medium2 = {
    args: {
        size: 'medium',
        label: 'Button',
    },
};

export const Small2 = {
    args: {
        size: 'small',
        label: 'Button',
    },
};