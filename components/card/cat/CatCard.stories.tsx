import type { Meta, StoryObj } from '@storybook/react';
import CatCard, { type ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Alex',
  time: '2h ago',
};

const meta = {
  title: 'Card/CatCard',
  component: CatCard,
  argTypes: {},
} satisfies Meta<typeof CatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: base,
};
