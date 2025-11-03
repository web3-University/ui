import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@web3-university/ui";
import { useEffect, useState } from "react";

const meta = {
  title: "shadcn/ui/Data Display/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={33} className="w-[300px]" />,
};

export const Complete: Story = {
  render: () => <Progress value={100} className="w-[300px]" />,
};

export const Empty: Story = {
  render: () => <Progress value={0} className="w-[300px]" />,
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[300px]" />;
  },
};

export const Loading: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[300px] space-y-2">
        <Progress value={progress} />
        <p className="text-sm text-muted-foreground text-center">
          {progress}%
        </p>
      </div>
    );
  },
};
