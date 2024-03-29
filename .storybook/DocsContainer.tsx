// DocsContainer.tsx

import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import { themes } from '@storybook/theming';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import themeStore from '../src/design/theme/themeStore/themeStore';
import storyBookThemeLight from './storyBookThemeLight';
import storyBookThemeDark from './storyBookThemeDark';

const channel = addons.getChannel();

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const getTheme = themeStore((state) => state.theme);
  const [isDark, setDark] = useState(true);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel]);

  return (
    <BaseContainer theme={isDark ? storyBookThemeDark : storyBookThemeLight} context={context}>
      <ThemeProvider theme={getTheme}>{children}</ThemeProvider>
    </BaseContainer>
  );
};
