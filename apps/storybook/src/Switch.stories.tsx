import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Label } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Form/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">飞行模式</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled">禁用开关</Label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">通知</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="marketing" />
        <Label htmlFor="marketing">营销邮件</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="security" disabled />
        <Label htmlFor="security">安全更新（禁用）</Label>
      </div>
    </div>
  ),
};
