// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyMenuItem from './FancyMenuItem';

// Define metadata for the story
const meta = {
  component: FancyMenuItem,
  parameters: {
    docs: {
      description: {
        component: 'Template: The FancyMenueItem is a template for a finished Item it used by the FancyMenuList',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'The label of the item',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: 'Logout',
      },
    },
    as: {
      description: 'The as of the item',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: 'button',
      },
    },
    icon: {
      description: 'The icon of the item',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    themeType: {
      description: 'The theme of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the button hover effect',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: '3',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyMenuItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyMenuItem {...args} />,
  args: {
    icon: '👋',
    label: 'Logout',
  },
};
