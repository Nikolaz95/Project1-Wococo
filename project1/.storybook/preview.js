import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS, // Default Storybook viewports
      mobileSmall: {
        name: 'Mobile Small',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      mobileLarge: {
        name: 'Mobile Large',
        styles: {
          width: '425px',
          height: '880px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};
