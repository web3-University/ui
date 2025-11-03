import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>什么是 shadcn/ui？</AccordionTrigger>
        <AccordionContent>
          shadcn/ui 是一个现代化的组件库，基于 Radix UI 和 Tailwind CSS 构建，
          提供了优秀的可访问性和自定义能力。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>如何安装？</AccordionTrigger>
        <AccordionContent>
          你可以使用 npx shadcn-ui@latest add 命令来添加组件，
          或者像我们这样手动集成到项目中。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>有哪些特性？</AccordionTrigger>
        <AccordionContent>
          shadcn/ui 具有完全可定制、无障碍访问、支持深色模式、
          TypeScript 支持等特性。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>功能特性</AccordionTrigger>
        <AccordionContent>
          支持多选模式，可以同时展开多个面板。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>样式定制</AccordionTrigger>
        <AccordionContent>
          完全基于 Tailwind CSS，支持自定义主题。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>动画效果</AccordionTrigger>
        <AccordionContent>
          内置流畅的展开/收起动画。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
