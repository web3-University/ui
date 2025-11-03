import type { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              shadcn/ui 的创建者 - 一个使用 Radix UI 和 Tailwind CSS 构建的组件集合。
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                加入于 2021年12月
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
