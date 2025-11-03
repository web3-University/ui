import type { Meta, StoryObj } from "@storybook/react";
import { Label, Input, Checkbox } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">邮箱地址</Label>
      <Input id="email" type="email" placeholder="请输入邮箱" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">接受条款和条件</Label>
    </div>
  ),
};
