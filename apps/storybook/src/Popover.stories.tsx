import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">打开弹出框</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">尺寸</h4>
            <p className="text-sm text-muted-foreground">
              设置图层的尺寸。
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">宽度</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 rounded-md border px-3"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height">高度</label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 rounded-md border px-3"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
