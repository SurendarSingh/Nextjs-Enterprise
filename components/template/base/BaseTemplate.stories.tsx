import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';

const meta = {
  title: 'Template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    sampleTextProp: 'Hello World!',
  },
};
