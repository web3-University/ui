import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="输入命令或搜索..." />
      <CommandList>
        <CommandEmpty>未找到结果。</CommandEmpty>
        <CommandGroup heading="建议">
          <CommandItem>日历</CommandItem>
          <CommandItem>搜索表情符号</CommandItem>
          <CommandItem>计算器</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="设置">
          <CommandItem>个人资料</CommandItem>
          <CommandItem>账单</CommandItem>
          <CommandItem>设置</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
