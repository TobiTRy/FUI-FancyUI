// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import MenueItem from '../MenuItem';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: MenueItem,
  title: 'components/atoms/MenuItem',
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Component: The MenueItem is only a Box with some styles you can use it to build your own MenueList or something else',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 3),
    sizeC: {
      description: 'The size of the divider',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: {
        summary: 'md',
      },
    },
    align: {
      description: 'The alignment of the content',
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      defaultValue: {
        summary: 'center',
      },
    },
    as: {
      description: 'The HTML tag to use',
      control: { type: 'select' },
      options: ['button', 'a'],
      defaultValue: {
        summary: 'button',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof MenueItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <MenueItem {...args}>
      <span>Some Content</span>
      {args.children}
    </MenueItem>
  ),
  args: {},
};
