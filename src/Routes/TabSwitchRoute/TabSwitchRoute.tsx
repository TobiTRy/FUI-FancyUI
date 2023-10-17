import React from 'react';

import FancyTabSwitch from '../../Components/UI/Molecules/FancyTabSwitch/FancyTabSwitch';
import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { css } from 'styled-components';
import { FancyCard } from '../../lib';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

const switchValues = [
  { key: '1', value: 'Tab 1', label: 'Tab 1 djkjk dklkdd' },
  { key: '2', value: 'Tab 2', label: 'Tab 2' },
  { key: '3', value: 'Tab 3', label: 'Tab 3' },
];
const switchValues1 = [
  { key: '1', value: 'Tab 1', label: 'Tab 1 asksk aklsaklskl klaskl aklas aklkl  asuiasuiui uiasui asiuui asuiausi u asasuaui suaiausu asuusau isasuus ', icon: Icon},
  { key: '2', value: 'Tab 2', label: 'Tab 2', icon: Icon },
  { key: '3', value: 'Tab 3', label: 'Tab 3', icon: Icon },
];
const switchValues2 = [
  { key: '1', value: 'Tab 1', icon: Icon },
  { key: '2', value: 'Tab 2', icon: Icon },
  { key: '3', value: 'Tab 3', icon: Icon },
  { key: '4', value: 'Tab 1', icon: Icon },
  { key: '5', value: 'Tab 2', icon: Icon },
  { key: '6', value: 'Tab 3', icon: Icon },
];

export default function TabSwitchRoute() {
  const [test, setTest] = React.useState('1');

  return (
    <FancyCard layer={1}>
      <DesignWrapper>
        <DesignArea
          title="TabSwitch"
          style={css`
            flex-direction: column;
          `}
        >
        </DesignArea>
        <DesignArea
          title="TabSwitch"
          style={css`
            flex-direction: column;
          `}
        >
          <FancyTabSwitch
            wide
            size='sm'
            label="test"
            outlined
            rounded="xxl"
            layer={5}
            values={switchValues1}
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />
          <FancyTabSwitch
            label="test"
            values={switchValues1}
            themeType="transparent"
            size="sm"
            rounded="md"
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />

          <FancyTabSwitch
            label="test"
            wide
            outlined
            rounded="complete"
            size="sm"
            themeType="transparent"
            values={switchValues1}
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />
          <FancyTabSwitch
            label="test"
            size="sm"
            themeType="transparent"
            values={switchValues2}
            rounded={'complete'}
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />

          <FancyTabSwitch

            label="test"
            size="md"
            values={switchValues1}
            rounded={'xxxl'}
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />
          <FancyTabSwitch
            size="lg"
            label="test"
            wide
            outlined
            direction='vertical'
            values={switchValues}
            rounded={'xxl'}
            currentSelect={test}
            handler={(id: string) => setTest(id)}
          />
        </DesignArea>
        <DesignArea
          title="TabSwitch"
          style={css`
            flex-direction: column;
          `}
        >
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}
