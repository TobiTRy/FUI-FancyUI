// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDateInput from '../FancyDateInput';
import { SVGCheckMark } from '@/components/icons/SVGCheckMark';

// Define metadata for the story
const meta = {
  component: FancyDateInput,
  parameters: {
    docs: {
      description: {
        component:
          '`FancyDateInput` is a customizable date input component for React applications, encapsulating functionality such as displaying an icon, a label, system messages, and handling various input states like active, disabled, and filled. It´s designed to provide a richer user experience compared to standard date inputs.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'Label for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      description: 'Theme type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'Layer of the input',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      defaultValue: {
        summary: 4,
      },
    },
    systemMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: '',
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    icon: {
      description: 'Icon for the input',
    },
    isActive: {
      description: 'Active state of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'Type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'date',
      },
    },
    transparentBackground: {
      description: 'Transparent background of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
} satisfies Meta<typeof FancyDateInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    placeholder: new Date().toLocaleDateString(),
    themeType: 'primary',
    layer: 2,
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an error message',
      type: 'error',
    },
  },
};

export const WithSuccessState: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an success message',
      type: 'success',
    },
  },
};

export const WithInfoState: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an info message',
      type: 'info',
    },
  },
};
