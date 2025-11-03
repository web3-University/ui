import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          无样式、可访问的组件库
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>博客</div>
        <Separator orientation="vertical" />
        <div>文档</div>
        <Separator orientation="vertical" />
        <div>源码</div>
      </div>
    </div>
  ),
};
