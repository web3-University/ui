import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@web3-university/ui";
import { Button } from "@web3-university/ui";
import { toast } from "sonner";

const meta = {
  title: "shadcn/ui/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("事件已创建", {
            description: "2024年1月15日 下午3:00",
          })
        }
      >
        显示 Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => toast.success("操作成功！")}
      >
        成功提示
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => toast.error("出错了！")}
      >
        错误提示
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("事件已创建", {
            description: "2024年1月15日 下午3:00",
            action: {
              label: "撤销",
              onClick: () => console.log("撤销"),
            },
          })
        }
      >
        带操作按钮
      </Button>
    </div>
  ),
};
