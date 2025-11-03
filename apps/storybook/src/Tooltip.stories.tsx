import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">悬停查看提示</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>这是一个提示信息</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
