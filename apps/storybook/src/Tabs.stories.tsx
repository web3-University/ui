import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Layout/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>账户</CardTitle>
            <CardDescription>
              在这里更改您的账户设置。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>账户设置内容</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>密码</CardTitle>
            <CardDescription>
              在这里更改您的密码。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>密码设置内容</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">标签 1</TabsTrigger>
        <TabsTrigger value="tab2">标签 2</TabsTrigger>
        <TabsTrigger value="tab3">标签 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">第一个标签的内容</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">第二个标签的内容</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">第三个标签的内容</div>
      </TabsContent>
    </Tabs>
  ),
};
