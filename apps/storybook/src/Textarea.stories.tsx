import type { Meta, StoryObj } from "@storybook/react";
import { Textarea, Label } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <Textarea placeholder="请输入内容..." />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">您的消息</Label>
      <Textarea id="message" placeholder="在此输入您的消息..." />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Textarea placeholder="禁用状态" disabled />,
};
