import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};
