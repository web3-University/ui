import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新建标签页 <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            新建窗口 <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>分享</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>打印</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            撤销 <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            重做 <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>查找</MenubarItem>
          <MenubarItem>替换</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>查看</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>全屏</MenubarItem>
          <MenubarItem>实际大小</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>放大</MenubarItem>
          <MenubarItem>缩小</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
