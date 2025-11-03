import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>你确定吗？</DialogTitle>
          <DialogDescription>
            此操作无法撤销。这将永久删除您的账户并从我们的服务器中删除您的数据。
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};
