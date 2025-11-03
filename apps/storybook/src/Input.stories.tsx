import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="输入内容..." />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">邮箱</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Input disabled placeholder="禁用状态" />,
};

export const File: Story = {
  render: () => <Input type="file" />,
};

export const Password: Story = {
  render: () => <Input type="password" placeholder="密码" />,
};

export const Number: Story = {
  render: () => <Input type="number" placeholder="数字" />,
};

export const Search: Story = {
  render: () => <Input type="search" placeholder="搜索..." />,
};
