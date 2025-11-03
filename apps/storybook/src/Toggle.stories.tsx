import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@web3-university/ui";
import { Bold, Italic, Underline } from "lucide-react";

const meta = {
  title: "shadcn/ui/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="切换斜体">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => <Toggle aria-label="切换斜体">斜体</Toggle>,
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="切换斜体">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="切换下划线">
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
};
