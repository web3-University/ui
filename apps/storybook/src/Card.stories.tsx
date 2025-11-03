import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card 标题</CardTitle>
        <CardDescription>Card 描述信息</CardDescription>
      </CardHeader>
      <CardContent>
        <p>这里是 Card 的主要内容区域</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Card 底部</p>
      </CardFooter>
    </Card>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>创建项目</CardTitle>
        <CardDescription>一键部署新项目</CardDescription>
      </CardHeader>
      <CardContent>
        <p>配置您的新项目并开始构建</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">取消</Button>
        <Button>创建</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>简单卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <p>没有描述和底部的简单卡片</p>
      </CardContent>
    </Card>
  ),
};
