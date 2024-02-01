import type { Meta, StoryObj } from '@storybook/react';

import { AlignedLabel } from '@/components/atoms/AlignedLabel';
import { TAlignedLabelWithAllProps } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: AlignedLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The input label wich is aligned left or centered. <br> - the alignment is set by the $align prop. <br> - the color changes depending on the $isActive prop',
      },
    },
  },
  argTypes: {
    align: {
      options: ['left', 'center'],
      control: { type: 'radio' },
    },
    systemMessageType: {
      description: 'The system message type',
      control: { type: 'select' },
    },
    layer: {
      description: 'The layer of the component',
      control: { type: 'range', min: 1, max: 10 },
    },
    themeType: {
      description: 'The theme type of the component',
      control: { type: 'select' },
    },
    typography: {
      description: 'The typography props of the component',
      control: { type: 'object' },
    },
    size: {
      description: 'The size of the component',
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AlignedLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    size: 'md',
  },
  render: (args: TAlignedLabelWithAllProps) => <AlignedLabel {...args} />,
};
