import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@web3-university/ui";
import { AlertCircle, Terminal } from "lucide-react";

const meta = {
  title: "shadcn/ui/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>提示</AlertTitle>
      <AlertDescription>
        您可以在设置中添加组件和依赖到您的应用。
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>错误</AlertTitle>
      <AlertDescription>
        您的会话已过期，请重新登录。
      </AlertDescription>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertDescription>
        这是一个简单的提示消息，没有标题和图标。
      </AlertDescription>
    </Alert>
  ),
};
