import type { Preview } from "@storybook/react";
import "./preview.css";
// 导入 UI 库样式 - 使用 workspace 协议时需要使用包的实际路径
import "../../../packages/ui/dist/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
