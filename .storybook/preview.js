import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../src/theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(withKnobs);
// addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// export const decorators = [
//   (Story) => (
//   <>
//   <GlobalStyle />
//   <ThemeProvider theme={theme}>
//   <Story />
//   </ThemeProvider>
//   </>
//   ),
//   ];
