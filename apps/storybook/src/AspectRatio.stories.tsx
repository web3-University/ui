import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="照片"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1 / 1} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="照片"
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  ),
};
